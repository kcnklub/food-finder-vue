<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
const createGroup = () => {
  router.push("/group/create-group")
}
</script>

<template>
  <div class="relative flex justify-center mt-24">
    <div class="rounded bg-gradient-to-r from-cyan-500 to-blue-500 w-5/6 text-white">
      <div class="p-12">
        <div class="text-center">
          <h1 class="text-2xl">Food Finder</h1>
          <p class="ma-1">Democratize your groups food search.</p>
          <p class="ma-1">Create a group to get started</p>
          <button
              class="btn btn-orange"
              @click="createGroup"
          >
            Create New Group
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-orange {
    @apply bg-orange-500;
  }
  .btn-orange:hover {
    @apply bg-orange-700;
  }
</style>
