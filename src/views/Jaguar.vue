<template>
    <div class="CarInfo">
    <h1 class="text-6xl font-bold text-slate-900 justify-left">Jaguar | F-Type</h1>
        <h1 class="text-6xl font-thin text-slate-900 justify-left ">$900/Monthly Payments</h1>
    </div>
    
        <img class="image" src="https://www.motortrend.com/uploads/2022/04/2023-Jaguar-F-Type-R-Coupe_1-2.jpg">

        <button class="RentBtn">Rent This Car</button>
        
    
    <div class="About">
        <h1>About This Car:</h1>
    <p>This is the Most Luxurious car that you can drive while also being a Sports car. Turn heads with this Navy blue beatiful Jaguar.</p>
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