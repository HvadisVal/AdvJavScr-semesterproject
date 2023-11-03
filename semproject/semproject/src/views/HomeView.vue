<template>
  
  <section class="home" id="home">
    <div class="home-content">
      <h3>Welcome to</h3>
      <h1>Wolleron</h1>
      <h2>And I'm a <span class="typingEffect"></span></h2>
      <p>Valeria's creative grounds.</p>
      <div class="social-media">
        <a href="https://www.linkedin.com/in/valeriaionascu/"><i class='bx bxl-linkedin'></i></a>
        <a href="https://www.instagram.com/wolleron/"><i class='bx bxl-instagram'></i></a>
      </div>
      <a href="https://files.fm/down.php?i=46wa5bn6c" class="btn" download="" target="_new">Download CV</a>
    </div>
    <div class="home-img">
      <img src="../assets/LogoYellow.png" alt="Logo" />
    </div>
  </section>
    <AboutView></AboutView>
    <ProjectsView></ProjectsView>
    <ContactMe></ContactMe>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import AboutView from './AboutView.vue';
import ProjectsView from './ProjectsView.vue';
import ContactMe from './ContactMe.vue';

const professions = ["Multimedia Designer", "Frontend Developer", "Digital Creator"];
let currentProfessionIndex = ref(0);



function startTypingEffect() {
  let typingElement = document.querySelector('.typingEffect');
  typingElement.textContent = '';

  let currentProfession = professions[currentProfessionIndex.value];
  let charIndex = 0;

  let typingInterval = setInterval(() => {
    typingElement.textContent += currentProfession[charIndex];
    charIndex++;

    if (charIndex >= currentProfession.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        eraseText();
      }, 1500);
    }
  }, 100);
}

function eraseText() {
  let typingElement = document.querySelector('.typingEffect');
  let text = typingElement.textContent;
  let textLength = text.length;

  let eraseInterval = setInterval(() => {
    typingElement.textContent = text.substring(0, textLength - 1);
    textLength--;

    if (textLength === 0) {
      clearInterval(eraseInterval);
      currentProfessionIndex.value = (currentProfessionIndex.value + 1) % professions.length;
      setTimeout(() => {
        startTypingEffect();
      }, 500);
    }
  }, 50);
}

onMounted(() => {
  startTypingEffect();

  
});


</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10rem 9% 2rem;
  background-color: #1E1E1E;
  color: #f8ba1a; /* Changed main color to #f8ba1a */
}

.home-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.home-content h3 {
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.home-content h1 {
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1.3;
}

.home-content p {
  font-size: 1.6rem;
  margin: 2rem 0 3rem;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 3rem;
}

.social-media a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: .2rem solid #f8ba1a; /* Changed border color to #f8ba1a */
  border-radius: 50%;
  font-size: 2rem;
  color: #f8ba1a; /* Changed icon color to #f8ba1a */
  margin: 3rem 1.5rem 3rem 0;
  transition: .5s ease;
}

.social-media a:hover {
  background: #f8ba1a; /* Changed background color on hover to #f8ba1a */
  color: #1E1E1E;
  box-shadow: 0 0 1rem #f8ba1a; /* Changed box shadow color to #f8ba1a */
}

.btn {
  display: inline-block;
  padding: 1rem 2.8rem;
  background: #f8ba1a; /* Changed button background color to #f8ba1a */
  border-radius: 4rem;
  box-shadow: 0 0 1rem #f8ba1a; /* Changed box shadow color to #f8ba1a */
  font-size: 1.6rem;
  color: #1E1E1E;
  letter-spacing: .1rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 3rem;
  transition: background-color .5s;
}

.btn:hover {
  box-shadow:none;
}

.home-img img {
  width: 35vw;
  animation: floatImage 4s ease-in-out infinite;
}

.glow {
  animation: glow 1.5s ease-in-out infinite alternate; /* Added glowing animation */
}

@keyframes floatImage {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2.4rem);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes glow {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 #f8ba1a); /* Added drop-shadow for glow effect */
  }
  100% {
    transform: scale(1.05);
    filter: drop-shadow(0 0 8px #f8ba1a); /* Increased shadow for glow effect */
  }
}

.typingEffect {
  max-width: 220px;
  overflow: hidden;
  border-right: 2px solid white;
  font-size: 1.6rem;
  white-space: nowrap;
}

@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes blink {
  0%, 45% {
    border-color: transparent;
  }
  50%, 100% {
    border-color: #f8ba1a; /* Changed border color to #f8ba1a */
  }
}

@media (max-width: 768px) {
  .home-content h1 {
    font-size: 4rem; /* Adjusted font size for mobile devices */
  }
}

@media (max-width: 576px) {
  .home-content h1 {
    font-size: 3rem; /* Adjusted font size for smaller mobile devices */
  }

  .home-content p {
    font-size: 1.4rem; /* Adjusted font size for smaller mobile devices */
  }

  .social-media a {
    font-size: 1.6rem; /* Adjusted font size for smaller mobile devices */
  }

  .btn {
    font-size: 1.4rem; /* Adjusted font size for smaller mobile devices */
  }
}
</style>