<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
const createGroup = () => {
  router.push("/group/create-group")
}
</script>

<template>
  <w-flex column align-center justify-center>
    <h1 class="headline">Food Finder</h1>
    <p class="pa7">Democratize your groups food search.</p>
    <p class="pb3">Create a group to get started</p>
    <w-button
        @click="createGroup"
        bg-color="deep-orange-dark3"
        class="deep-orange-light5"
        shadow
    >
      Create New Group
    </w-button>
  </w-flex>
</template>
<style></style>
