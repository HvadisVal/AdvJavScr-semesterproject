<template>

  <div class="about">

    <h1>This is an about page</h1>

    <div v-for="product in products" :key="product">

      <p>

        ProductID: {{ product.id  }}

      </p>

      <p>

        ProductName: {{ product.productName }}

      </p>

      <p>

        ProductPrice: {{ product.productPrice }}

      </p>

    </div>

  </div>

</template>

 

<script setup>

import { db } from '../firebase.js'

 

import { ref, onMounted } from 'vue'

import { collection, onSnapshot } from 'firebase/firestore';

 

const products = ref([]); // to store data from firebase

const productDataRef = collection(db, 'products');

 

const getProductsData = () => {

  onSnapshot(productDataRef, (snapshot) => {

    products.value = snapshot.docs.map(doc => {

      return {

        id: doc.id,

        ...doc.data()

        //productName: doc.data().productName,

        //productPrice: doc.data().productPrice

      }

    })

  })

  console.log("test", products)

}

onMounted(() => {

  getProductsData();

})

 

</script>

 
