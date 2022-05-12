<script setup lang="ts">

import {computed} from "vue";
import {currentGroupStore} from "@/model/CurrentGroup";

const currentGroup = currentGroupStore();

const likedPlaced = computed(() => {
  return currentGroup.getSortedLikedPlaces;
})

</script>

<template>
  <w-flex column align-center justify-center>
    <div class="xs7">
      <div>
        <w-flex
            class="group bdrs2 pa3 mt3"
            v-for="place in likedPlaced"
            :key="place.id"
        >
          <p class="xs11">
            {{ place.name }}
          </p>
          <p class="xs1">
            {{ place.membersThatLiked.length }}
          </p>
        </w-flex>
      </div>
    </div>
  </w-flex>

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
