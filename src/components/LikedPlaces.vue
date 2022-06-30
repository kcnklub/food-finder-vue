<script setup lang="ts">

import {computed} from "vue";
import {currentGroupStore} from "@/model/CurrentGroup";

const currentGroup = currentGroupStore();

const likedPlaced = computed(() => {
  return currentGroup.getSortedLikedPlaces;
})

</script>

<template>
  <div class="relative flex justify-center mt-24">
    <div class="rounded bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 text-white">
      <div class="p-12">
        <h1 class="text-2xl">Groups</h1>
        <div>
          <div
              class="group flex justify-between"
              v-for="group in likedPlaced"
              :key="group.id"
          >
            <p>
              {{ group.name }}
            </p>
            <p>
              {{ group.membersThatLiked.length }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group {
  background-color: #ffe4d8;
}

.group:hover {
  background-color: #ffcbb4;
  cursor: pointer;
}
</style>
