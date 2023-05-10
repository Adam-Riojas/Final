<template>
    <div class="card" @click="selectCard">
      <div class="card-image">
        <img src="https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-exterior-112-1663170333.jpg?crop=0.731xw:0.548xh;0.117xw,0.323xh&resize=1200:*">
      </div>
      <div class="card-details">
        
      <a class="card-details-name">Ford</a>
      
      <p class="card-details-job">Mustang</p>
      <p class="card-details-quote">$600/Month</p>
    </div>
    </div>
  </template>


<style scoped lang="postcss">
  .card {
    @apply cursor-pointer overflow-hidden rounded-md bg-slate-300 p-60 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-900 hover:bg-slate-100;
    &-image {
      img {
        @apply mx-auto rounded-lg  scale-150;
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