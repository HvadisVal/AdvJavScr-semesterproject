<template>
  <header>
   <div class="wrapper navbar">
     <div class="left-links">
      <nav >
          <RouterLink to="/" :class="{ active: activeLink === 'home' }">Home</RouterLink>
          <a href="#about" :class="{ active: activeLink === 'about' }">About</a>
          <RouterLink to="/projects" :class="{ active: activeLink === 'projects' }">Projects</RouterLink>
         <!--  <a href="#scrolltoproject" :class="{ active: activeLink === 'projects' }">Projects</a> -->
          <!-- <RouterLink to="/contact" :class="{ active: activeLink === 'contact' }">Contact Me</RouterLink> -->
          <a href="#contact" :class="{ active: activeLink === 'contact' }">Contact Me</a>
        </nav>
     </div>
     <div class="right-links">
       <RouterLink to="/navguard">Admin</RouterLink>
       <button @click="logOut" v-if="isLoggedIn">Log Out</button>
     </div>
   </div>
 </header>
<div class="div">

  
</div>

 <RouterView /> 
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import { auth } from './firebase.js';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import router from './router'
import ProjectsView from './views/ProjectsView.vue';


let isLoggedIn = ref(false);

onMounted(() => {
 onAuthStateChanged(auth, (user) => {
   if (user) {
     isLoggedIn.value = true;
     console.log('user logged in', auth.currentUser)

   } else {
     isLoggedIn.value = false;
     console.log('user logged out', auth.currentUser)
   }
 });
});

let logOut = async () => {
 signOut(auth) //until here makes the user logout
   .then(() => {
     console.log('user logged out', auth.currentUser)
     router.push('/login');
   })
   .catch((error) => {
     console.log(error);
   });
};

let activeLink = ref('home'); // 'home' is the default active link

function handleScroll() {
  const sections = ['home', 'about', 'projects', 'contact'];
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el && isElementInViewport(el)) {
      activeLink.value = section;
      break;
    }
  }
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

</script>

<style scoped>
/* Global Styles */
body {
 font-family: Arial, sans-serif;
 margin: 0;
 color: #333; /* Default text color */
}

/* Header Styles */
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000; /* Adjust the z-index as needed */
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between; /* Align items to the start and end */
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 1rem; /* Add some margin to the right of each link */
}

/* Log Out Button Styles */
button {
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #252625;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 20%;
}

button:hover {
  background-color: none; /*change color when hover later*/
}


/* Main Content Styles */
main {
 padding-top: 5rem;
}

.wrapper {
  max-width: 1200px; /* Adjust the maximum width as per your design */
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .left-links {
  display: flex;
  gap: 1rem;
}

.navbar .right-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}
nav a.active {
  font-weight: bold;
  /* Add any additional styling for active links here */
}
</style>
