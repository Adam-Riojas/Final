<script setup>
  import MainCardsSingle from './MainCardsSingle.vue'
  import MainCard2 from '@/components/MaidCard2.vue'
  import MainCard3 from '@/components/MainCard3.vue'
  import MainCard4 from '@/components/MainCard4.vue'
  import MainCard5 from '@/components/MainCard5.vue'
  import MainCard6 from '@/components/MainCard6.vue'
  import MainCard7 from '@/components/MainCard7.vue'
  import MainCard8 from '@/components/MainCard8.vue'
</script>

<template>
  <div class="sub-wrapper">
    <MainCardsSingle />
    <MainCard2 />
    <MainCard3 />
    <MainCard4 />
    <MainCard5 />
    <MainCard6 />
    <MainCard7 />
    <MainCard8 />
  </div>
</template>

<style scoped lang="postcss">
  .sub-wrapper {
    @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
  }
</style>