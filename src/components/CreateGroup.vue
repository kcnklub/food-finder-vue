<script setup lang="ts">
const createGroup = () => {
  console.log("creating group");
}
</script>

<template>
  <div class="relative flex justify-center mt-24">
    <div class="rounded bg-gradient-to-r from-cyan-500 to-blue-500 w-5/6 text-white">
      <div class="p-12">
        <h1 class="text-2xl">Create a new group!</h1>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Group Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Group Name">
        <button
            class="btn btn-orange mt-2"
            @click="createGroup"
        >
          Create Group
        </button>
      </div>

    </div>
  </div>
  <router-view/>
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
