<template>
    <div class="card" @click="selectCard">
      <div class="card-image">
        <img src="https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=640:*">
      </div>
      <div class="card-details">
      <a class="card-details-name">Audi</a>
      
      <p class="card-details-model">R8</p>
      <p class="card-details-quote">$580/Month</p>
      <Button class="Button" ><RouterLink to="/Audi" >Rent</RouterLink></Button>
    </div>
    </div>
  </template>


<style scoped lang="postcss">
  .card {
    @apply cursor-pointer overflow-hidden rounded-md bg-slate-300 p-60 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-900 hover:bg-slate-100;
    &-image {
      img {
        @apply mx-auto rounded-full object-contain scale-150;
      }
    }
    &-details {
      @apply flex flex-col gap-2  pt-6 text-center;
      &-name {
        @apply text-3xl font-thin  tracking-wider text-slate-800;
      }
      &-model {
        @apply -mt-2 text-xs font-bold text-red-500 text-2xl;
      }
      &-quote {
        @apply pt-4 text-lg italic text-slate-800;
      }
      
    }
  }
  .Button{
    @apply text-2xl font-thin  tracking-wider text-slate-100 rounded-full bg-red-600 hover:bg-red-900 shadow-2xl hover:shadow-slate-900;
  }
    
  
</style>