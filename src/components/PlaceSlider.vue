<script setup lang="ts">
import axios from "axios";
import {computed, reactive} from "vue";

const currentPlace = reactive({
  id: null,
  name: "",
  photoReference: ""
})
const getRandomPlace = () => {
  axios.get("/place",)
      .then((response) => {
        currentPlace.id = response.data.id;
        currentPlace.name = response.data.name;
        currentPlace.photoReference = response.data.photoReference;
      })
      .catch((error) => {
        console.log(error);
      })
}

const linkToGoogleMaps = computed(() => {
  return `https://www.google.com/maps/place/?q=place_id:${currentPlace.id}`;
})

getRandomPlace();
</script>

<template>
  <div class="relative flex justify-center mt-24">
    <div class="rounded bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 text-white">
      <div class="p-12">
        <div>
          <div>
            <h1 class="flex text-2xl justify-center">{{ currentPlace.name }}</h1>
            <div class="flex justify-center">
              <img :src="currentPlace.photoReference" alt="No Image found">
            </div>
            <div>
              <a :href="linkToGoogleMaps">Open Google Maps</a>
            </div>
            <div class="rounded-lg, justify-center">
              <button @click="getRandomPlace()" class="swipe-button like-button">Like</button>
              <button @click="getRandomPlace()" class="swipe-button dislike-button">Dislike</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.swipe-button {
  @apply w-1/2 p-1 rounded-lg
}
.like-button {
  @apply bg-green-400
}
.like-button:hover {
  @apply bg-green-500
}
.dislike-button{
  @apply bg-red-400
}
.dislike-button:hover {
  @apply bg-red-500
}
</style>
