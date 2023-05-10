<template>
    <div class="card" @click="selectCard">
      <div class="card-image">
        <img src="https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3112/">
      </div>
      <div class="card-details">
      <a class="card-details-name">Honda</a>
      
      <p class="card-details-job">Civic</p>
      <p class="card-details-quote">$330/Month</p>
    </div>
    </div>
  </template>


<style scoped lang="postcss">
  .card {
    @apply cursor-pointer overflow-hidden rounded-md bg-slate-300 p-60 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-900 hover:bg-slate-100;
    &-image {
      img {
        @apply mx-auto rounded-lg object-contain scale-150;
      }
    }
    &-details {
      @apply flex flex-col gap-2  pt-6 text-center;
      &-name {
        @apply text-3xl font-thin  tracking-wider text-slate-800;
      }
      &-job {
        @apply -mt-2 text-xs font-bold text-red-400;
      }
      &-quote {
        @apply pt-4 text-lg italic text-slate-800;
      }
    }
  }
    
  
</style>