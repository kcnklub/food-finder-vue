<script setup lang="ts">
import PlaceSlider from "@/components/PlaceSlider.vue";
import {reactive} from "vue";

const group = reactive({
  id: null,
  name: "Fellas need food.",
  numberOfMembers: 3,
  members: ["Kyle", "Steven", "Slade"],
  likedPlaces: []
})
</script>

<template>
  <w-flex column align-center justify-start>
    <div class="pt10">
      <h1 class="headline">{{ group.name }}</h1>
      <p>Number of Members: {{ group.numberOfMembers }}</p>
    </div>
  </w-flex>
  <place-slider/>
</template>
