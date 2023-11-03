<template>
  <div class="about">
    <div class="section">
      <button class="btn-add" @click="addNewProject()" :disabled="newProject.uploadBtnDisabled">Add Project</button>
      <div>
        <input type="text" placeholder="Project name" v-model="newProject.name" >
        <input type="file" @change="uploadImage" accept="image/*">
        <select v-model="newProject.category">
           <option value="Logo">Logo</option>
           <option value="Poster">Poster</option>
           <option value="Other">Other</option>
        </select>
        <p>Selected Category: {{ newProject.category }}</p>
      </div>
      <hr>
    </div>
    <div v-for="project in projects" :key="project.id">
      <p>
        Project Name: {{ project.name }}
      </p>
      <p>
        Project Category: {{ project.category }}
      </p>
      <img :src="project.image_url" alt="Project Image" v-if="project.image_url" />
      <button class="btn-delete" @click="deleteProject(project.id)">Delete Project</button>
      <p>
        <input type="text" placeholder="New project name" v-model="project.name" /><!-- 
        <input type="text" placeholder="New image URL" v-model="project.image_url" /> -->
        <select v-model="project.category">
           <option value="Logo">Logo</option>
           <option value="Poster">Poster</option>
           <option value="Other">Other</option>
        </select>
      </p>
      <button class="btn-edit" @click="updateProject(project)">Edit Project</button>
      <hr>
    </div>
  </div>
</template>


<script setup>
import useProjects from '../modules/useProjects.js';
import { onMounted, ref } from 'vue';

const { 
  projects, 
  getProjectsData, 
  deleteProject, 
  addNewProject,
  updateProject,
  uploadImage,
  newProject,
  uploadBtnDisabled
} = useProjects();
/* 
const newProject = {
  name: '',
  imageUrl: '',
}; */

onMounted(() => {
  getProjectsData();
});

const fileInput = ref(null);

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      newProject.imageUrl = e.target.result;
    }
    reader.readAsDataURL(file);
  }
}
</script>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.section {
  margin-bottom: 20px;
}

.btn-add,
.btn-delete,
.btn-edit {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
}

.btn-add {
  background-color: #1E1E1E;
  color: #00FFFF;
  border: 2px solid #00FFFF;
}

.btn-delete,
.btn-edit {
  background-color: #00FFFF;
  color: #1E1E1E;
}

.futuristic-input {
  width: 250px;
  padding: 10px;
  margin: 5px;
  border: none;
  border-bottom: 2px solid #00FFFF;
  background-color: #1E1E1E;
  color: #00FFFF;
}

.futuristic-card {
  background-color: #1E1E1E;
  border: 2px solid #00FFFF;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  max-width: 500px;
}

.futuristic-info {
  color: #00FFFF;
  font-size: 18px;
  margin: 5px 0;
}
</style>
