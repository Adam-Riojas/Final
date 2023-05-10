<script setup>
import { ref } from 'vue'
import MainCards from '@/components/MainCards.vue'
import MainPagination from '@/components/MainPagination.vue'

const title = "Welcome to our page"
</script>

<template>
  
  <main class="flex min-h-screen items-center justify-center">
    
    <MainCards />
    
  </main>
  <h1 class="flex min-h-screen items-center justify-center text-6xl font-thin text-red-500">{{ title }}</h1>
  <MainPagination />
</template>
