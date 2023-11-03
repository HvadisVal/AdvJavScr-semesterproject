<template>
  <!-- about design -->

  <section class="about" id="about">
        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3></h3>
            <p>My name is Valeria Ionascu and this is my portfolio where you can check my <a href="./portfolio">Projects</a>, download my <a href="https://files.fm/down.php?i=46wa5bn6c">CV</a>, watch my <a href="https://youtu.be/FjBXLHlP1uc">Video Resume</a> and link with me on <a href="https://www.linkedin.com/in/valeriaionascu/">LinkedIn</a>.
            Currently I'm studying in my first year of AP degree in Multimedia Design at ERHVERVSAKADEMI SYDVEST in Esbjerg, Denmark.
        <br>
        <br>
        <br>
            My curiosity and creativity got me to study a program where I can practice, improve and learn Graphic Design, Web Development and User Experience.
            <!-- In search for knowledge I strive for new experiences and opportunities.
        --> <br>
        <br>
        <br>
            My future plans consist of graduating Multimedia Design degree and Web Development Bachelor degree at the same academy. With this knowledge I hope to join a company with creative and fun environment that will allow me to grow profesionally and personally.  

    </p>
           <!--  <a href="./images/portfolio_project23.pdf" target="_blank" class="btn" >Read More</a> -->
        </div>
    </section>
</template>

<style>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--second-bg-color);
  padding: 80px; /* Adjust padding for spacing */
}

.heading {
  text-align: center;
  font-size: 5rem;
  color: var(--main-color); /* Use a futuristic color */
}

.about-content {
  max-width: 800px; /* Limit content width for better readability */
}

.about-content h3 {
  font-size: 2.6rem;
  color: var(--main-color); /* Use a futuristic color */
}

.about-content p {
  font-size: 1.8rem; /* Increase font size for readability */
  margin: 2rem 0 3rem;
  line-height: 1.6; /* Adjust line height for better readability */
  color: #ccc; /* Use a muted color for text */
}

.about-content p a {
  color: var(--main-color); /* Use a futuristic color */
}

/* Additional Styling for Links */
.about-content p a:hover {
  text-decoration: underline;
}

/* Optional: Add futuristic font */
body {
  font-family: 'Roboto', sans-serif; /* Use a modern font */
}


</style>