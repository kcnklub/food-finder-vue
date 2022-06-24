<script setup lang="ts">
import FoodFinderHeader from "@/components/FoodFinderHeader.vue";
</script>

<template>
  <div class="absolute max-h-screen max-w-screen-2xl bg-cyan-200 z-0"></div>
  <FoodFinderHeader class="z-1"></FoodFinderHeader>
  <router-view class="z-1"></router-view>

</template>

<style scoped>
* {
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
}

body {
  @apply bg-cyan-100
}
</style>
