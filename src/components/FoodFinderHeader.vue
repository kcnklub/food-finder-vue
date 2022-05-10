<script setup lang="ts">

</script>

<template>
  <w-toolbar
      style="max-height: 2.5em;"
      bg-color="deep-orange-light5"
      class="py0"
      height="2.5em"
      shadow>
    <router-link class="deep-orange-dark3" to="/">
      <div class="title2">Food Finder</div>
    </router-link>
    <div class="spacer"></div>
    <router-link to="/login">
      <w-button
          bg-color="deep-orange-dark3"
          class="deep-orange-light5"
      >
        Sign In
      </w-button>
    </router-link>

  </w-toolbar>
</template>

<style scoped>

</style>
