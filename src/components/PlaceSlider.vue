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
        <h1 class="text-2xl">{{ currentPlace.name }}</h1>
        <div>
          <div>
            <img :src="currentPlace.photoReference" alt="No Image found">
            <div>
              <a :href="linkToGoogleMaps">Open Google Maps</a>
            </div>
            <button>Like</button>
            <button>Dislike</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
