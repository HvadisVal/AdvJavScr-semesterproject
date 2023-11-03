<template>
    <section class="contact">
      <div class="contact-content">
        <h2 class="heading">Contact <span>Me</span></h2>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="formData.message" required></textarea>
          </div>
          <button class="btn-submit" @click.prevent="submitForm">Send</button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const formData = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = () => {
    alert('Form submitted!'); // Replace this with your actual form submission logic
  };
  </script>
  
  <style scoped>
  .contact {
    background: linear-gradient(to right, #1e1e1e, #2c2c2c);
    color: #ffffff;
    padding: 3rem;
    text-align: center;
  }
  
  .contact-content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .heading {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    font-size: 1.4rem;
    display: block;
    margin-bottom: 0.3rem;
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.4rem;
    border: none;
    background: #282828;
    color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
  }
  
  input:focus,
  textarea:focus {
    background: #444;
  }
  
  button {
    padding: 1.2rem 2.5rem;
    font-size: 1.4rem;
    background-color: #00ffff;
    color: #1e1e1e;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #00cccc;
  }
  </style>

