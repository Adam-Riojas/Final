




<template>
    <div class="card" @click="selectCard">
      <div class="card-image">
        
      </div>
      
    </div>
  </template>


<style scoped lang="postcss">
  .card {
    @apply cursor-pointer overflow-hidden rounded-md bg-slate-100 p-64 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-slate-900;
    
  }
</style>