<template>
  <div
      v-for="place in 3"
      :key="place"
      class="liked-place xs10 pa1">
    <div>{{ place }}</div>
  </div>
</template>
