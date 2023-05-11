<script setup>
import { ref } from 'vue'
import MainCards from '@/components/MainCards.vue'
import MainPagination from '@/components/MainPagination.vue'

const title = "Welcome to NationWide Car Rentals!!"
</script>

<template>
  
  <main class="flex min-h-screen items-center justify-center">
    
    <MainCards />
    
  </main>
  <h1 class="flex min-h-screen items-center justify-center text-6xl font-thin text-red-300">{{ title }} <br> 
    <br>This is Our Grand Opening of our Webpage!!!
   <br>We are excited to bring you our new Website that Brings all the Car Enthusiasts together.
  <br>I Hope you enjoy the Website and Please Consider renting Near You!</h1>
  
  <MainPagination />
</template>
