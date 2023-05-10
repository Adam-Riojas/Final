<template>
    <div class="card" @click="selectCard">
      <div class="card-image">
        <img src="https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=640:*">
      </div>
      <div class="card-details">
      <a class="card-details-name">Audi</a>
      
      <p class="card-details-job">R8</p>
      <p class="card-details-quote">$580/Month</p>
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