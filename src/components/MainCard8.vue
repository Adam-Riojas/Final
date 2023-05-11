<template>
    <div class="card" @click="selectCard">
      <div class="card-image">
        <img src="https://www.motortrend.com/uploads/2022/04/2023-Jaguar-F-Type-R-Coupe_1-2.jpg">
      </div>
      <div class="card-details">
      <a class="card-details-name">Jaguar</a>
      
      <p class="card-details-model">F-Type</p>
      <p class="card-details-quote">$900/Month</p>
      <Button class="Button" ><RouterLink to="/Jaguar" >Rent</RouterLink></Button>
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