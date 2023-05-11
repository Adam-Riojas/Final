<template>
    <div class="CarInfo">
    <h1 class="text-6xl font-bold text-slate-900 justify-left">Ford | Mustang</h1>
        <h1 class="text-6xl font-thin text-slate-900 justify-left ">$600/Monthly Payments</h1>
    </div>
    
        <img class="image" src="https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-exterior-112-1663170333.jpg?crop=0.731xw:0.548xh;0.117xw,0.323xh&resize=1200:*">

        <button class="RentBtn">Rent This Car</button>
        
    
    <div class="About">
        <h1>About This Car:</h1>
    <p>This is the Car that you can be proud driving.</p>
    </div>
    
        
      
    
  </template>

<style scoped lang="postcss">
  .CarInfo{
    @apply rounded-lg bg-slate-100 tracking-wider font-bold text-center text-slate-900
  }
  .image{
    @apply justify-center mx-auto shadow-2xl
  }
  .RentBtn{
    @apply text-7xl font-thin  tracking-wide text-slate-900 rounded-md bg-green-600 scale-100 hover:bg-green-900 shadow-2xl hover:shadow-slate-100 text-right mx-auto hover:text-slate-100
  }
  .About{
    @apply text-4xl text-slate-100
  }
</style>