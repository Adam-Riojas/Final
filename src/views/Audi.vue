<template>
    <div class="CarInfo">
    <h1 class="text-6xl font-bold text-slate-900 justify-left">Audi | R8</h1>
        <h1 class="text-6xl font-thin text-slate-900 justify-left ">$580/Monthly Payments</h1>
    </div>
    
        <img class="image" src="https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=640:*">

        <button class="RentBtn">Rent This Car</button>
        
    
    <div class="About">
        <h1>About This Car:</h1>
    <p>This is the car you need to drive at least once, you will not regret it.</p>
    </div>
    
        
      
    
  </template>

<style scoped lang="postcss">
  .CarInfo{
    @apply rounded-lg bg-slate-100 tracking-wider font-bold text-center text-slate-900
  }
  .image{
    @apply justify-center mx-auto rounded-md shadow-2xl
  }
  .RentBtn{
    @apply text-7xl font-thin  tracking-wide text-slate-900 rounded-md bg-green-600 scale-100 hover:bg-green-900 shadow-2xl hover:shadow-slate-100 text-right mx-auto hover:text-slate-100
  }
  .About{
    @apply text-4xl text-slate-100
  }
</style>