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
  <w-flex
      wrap column align-center justify-start
  >
    <div class="place-card bdrs2">
      <w-flex
          class="pa5"
          wrap column align-center justify-start
      >
        <div>
          <h1 class="headline">{{ currentPlace.name }}</h1>
        </div>
        <div>
          <w-image
              :src="currentPlace.photoReference"
              alt="No Image found"
              :width="150"
              :height="150"
          />
        </div>
        <div><a :href="linkToGoogleMaps">Open Google Maps</a></div>
        <div>
          <w-button
              bg-color="deep-orange-dark3"
              class="mt5 deep-orange-light5"
              xl
              @click="getRandomPlace"
          >
            Nope
          </w-button>
          <w-button
              bg-color="deep-orange-dark3"
              class="mt5 deep-orange-light5"
              xl
              @click="getRandomPlace"
          >
            Yep
          </w-button>
        </div>
      </w-flex>

    </div>
  </w-flex>
</template>

<style>
.place-card {
  width: 300px;
  background-color: #ffe4d8;
}
</style>
