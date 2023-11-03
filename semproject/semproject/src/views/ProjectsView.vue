<!-- <template>
  <div class="projects-list">
    <h2>Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <img :src="project.imageUrl" alt="Project Image">
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const projects = ref([]);

onMounted(async () => {
  const db = getFirestore();
  const projectsCollection = collection(db, 'projects');
  const querySnapshot = await getDocs(projectsCollection);

  querySnapshot.forEach((doc) => {
    projects.value.push({
      id: doc.id,
      name: doc.data().name,
      imageUrl: doc.data().image_url
    });
  });
});
</script>

<style scoped>
.projects-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.projects-list ul {
  list-style: none;
  padding: 0;
}

.projects-list li {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}

.projects-list img {
  max-width: 100%;
  height: auto;
}
</style>
 -->

 <template>
  <div id="scrolltoproject" class="projects-list">
    <h2>Projects</h2>
    <div class="filter-tabs">
      <button @click="filterProjects('All')" :class="{ active: selectedCategory === 'All' }">All</button>
      <button @click="filterProjects('Logo')" :class="{ active: selectedCategory === 'Logo' }">Logo</button>
      <button @click="filterProjects('Poster')" :class="{ active: selectedCategory === 'Poster' }">Poster</button>
      <button @click="filterProjects('Other')" :class="{ active: selectedCategory === 'Other' }">Other</button>
      <!-- Add buttons for other categories as needed -->
    </div>
    
    <ul>
      <li v-for="project in filteredProjects" :key="project.id" class="project-item"
          @click="openFullScreen(project.id)">
        <h3>{{ project.name }}</h3>
        <img :src="project.imageUrl" alt="Project Image">
      </li>
    </ul>
    <div v-if="fullScreenProject" class="full-screen-project">
      <button @click="closeFullScreen">Close</button>
      <h3>{{ fullScreenProject.name }}</h3>
      <img :src="fullScreenProject.imageUrl" alt="Project Image" class="full-screen-image">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const projects = ref([]);
const selectedCategory = ref('All');
const filteredProjects = ref([]);

const filterProjects = (category) => {
  selectedCategory.value = category;
  if (category === 'All') {
    filteredProjects.value = projects.value;
  } else {
    filteredProjects.value = projects.value.filter(project => project.category === category);
  }
};

const fullScreenProject = ref(null);

const openFullScreen = (projectId) => {
  fullScreenProject.value = projects.value.find(project => project.id === projectId);
};

const closeFullScreen = () => {
  fullScreenProject.value = null;
};

onMounted(async () => {
  const db = getFirestore();
  const projectsCollection = collection(db, 'projects');
  const querySnapshot = await getDocs(projectsCollection);

  querySnapshot.forEach((doc) => {
    projects.value.push({
      id: doc.id,
      name: doc.data().name,
      imageUrl: doc.data().imageUrl,
      category: doc.data().category
    });
  });

  filteredProjects.value = projects.value;
});
</script>

<style scoped>
.projects-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.filter-tabs button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #00FFFF;
  color: #1E1E1E;
  transition: background-color 0.3s;
}

.filter-tabs button.active {
  background-color: #1E1E1E;
  color: #00FFFF;
}

.projects-list ul {
  list-style: none;
  padding: 0;
}

.projects-list .project-item {
  width: calc(25% - 20px); /* Adjust the width as needed */
  margin-right: 20px;
  display: inline-block;
  vertical-align: top;
  border: 1px solid #ccc;
  padding: 10px;
}

.projects-list img {
  max-width: 100%;
  height: auto;
}


.projects-list .project-item:hover {
  transform: scale(1.1);
  transition: transform 0.3s;
}

.full-screen-project {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 20px;
  z-index: 9999;
  overflow-y: auto; /* Enable vertical scrolling */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.full-screen-image {
  max-width: 100%;
  max-height: 70vh; /* Limit the height to 70% of the viewport height */
  object-fit: contain;
  margin-bottom: 20px;
}

</style>