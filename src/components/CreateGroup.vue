<script setup lang="ts">
const createGroup = () => {
  console.log("creating group");
}
</script>

<template>
  <w-flex
      column align-center justify-center
  >
    <div>
      <p class="headline">Create a new Group!</p>
    </div>
    <div class="create-group bdrs2 pa3">
      <w-input color="deep-orange-dark3" type="text">
        <span class="deep-orange-dark3">
          Group Name
        </span>
      </w-input>
      <w-button
          bg-color="deep-orange-dark3"
          class="mt5 deep-orange-light5"
          xl
          @click="createGroup"
      >
        Create
      </w-button>
    </div>
  </w-flex>
  <router-view/>
</template>

<style>
.create-group {
  width: 20em;
  background-color: #ffe4d8;
}
</style>
