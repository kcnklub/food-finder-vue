<script setup lang="ts">
import FoodFinderHeader from "@/components/FoodFinderHeader.vue";
</script>

<template>
  <w-app>
    <FoodFinderHeader></FoodFinderHeader>
    <router-view></router-view>
  </w-app>
</template>

<style scoped>
* {
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
  color: #c83e00
}
</style>
