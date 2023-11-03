import { db } from '../firebase.js';
import { ref } from 'vue';
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref as fbref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useProjects = () => {
  const projects = ref([]);
  const projectsCollectionRef = collection(db, 'projects');


  const newProject = ref({
    name: '',
    imageUrl: '',
    category: '',
    uploadBtnDisabled: true

  });

  const getProjectsData = () => {
    onSnapshot(projectsCollectionRef, (snapshot) => {
      projects.value = snapshot.docs.map(doc => {
        const projectData = doc.data();
        const project = {
          id: doc.id,
          name: projectData.name, // Assuming 'name' is a field in your database
          imageUrl: projectData.imageUrl, // Assuming 'imageUrl' is a field in your database
          category: projectData.category
        };
  
        // If you want to preload the image, you can create an Image object
        if (project.imageUrl) {
          const image = new Image();
          image.src = project.imageUrl;
          project.image = image;
        }
  
        return project;
      });
    });
  }
  

  const deleteProject = async(id) => {
    await deleteDoc(doc(db, "projects", id));
  }

  const addNewProject = async() => {
      await addDoc(projectsCollectionRef, {
        name: newProject.value.name,
        imageUrl: newProject.value.imageUrl,
        category: newProject.value.category
      });
      newProject.value.name = '';
      newProject.value.imageUrl = '';
      newProject.value.category = '';
  }

  const updateProject = async(project) => {
    await updateDoc(doc(projectsCollectionRef, project.id), {
      name: project.name,/* 
      image_url: project.image_url, */
      category: project.category
    });
  }

  const storage = getStorage();
  const uploadImage = async(event) => {
    const file = event.target.files[0];
    if (file) {
      const storageRef = fbref(storage, `project_images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
        },
        (error) => {
          console.error('Error uploading image', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            newProject.value.imageUrl = downloadURL;
            newProject.value.uploadBtnDisabled = false;
          });
        }
      );
    }
  }


  
  return {
    projects,
    newProject,

    getProjectsData,
    deleteProject,
    addNewProject,
    updateProject,
    uploadImage
  }
}

export default useProjects;