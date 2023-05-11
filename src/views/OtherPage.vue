<script setup>

import MainPagination from '@/components/MainPagination.vue'


</script>

<template>
  <h1 class="text-9xl font-bold text-slate-100 justify-center flex items-center justify-center">Now Located Near You!</h1>
  <main class="flex min-h-screen items-center justify-center">
    <img src="https://www.autotrader.com/wp-content/uploads/2021/09/2022-chrysler-300S-front-right-side.jpg" class="shadow-2xl scale-100">
    <h1 class="text-6xl font-bold text-red-300 shadow-2xl">Seamless Renting!</h1>
  </main>
  <main class="flex min-h-screen items-center justify-center">
    <h1 class="text-6xl font-bold text-red-300 shadow-2xl">Drive The Same Day!</h1>
    <img src="https://www.thedrive.com/content/2022/02/2021-ford-bronco-four-door-5.jpg?quality=85&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440" class="shadow-2xl">

  </main>
  <MainPagination />
</template>
