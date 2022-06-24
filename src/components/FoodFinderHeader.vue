<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative bg-gradient-to-r from-cyan-500 to-blue-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <h1 class="title">
              Food Finder
            </h1>
          </router-link>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <router-link to="/login" class="text-base font-medium text-gray-500 hover:text-gray-900">
            <p class="title title-button">
              Sign In
            </p>
          </router-link>
        </PopoverGroup>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import {Popover, PopoverGroup} from '@headlessui/vue'

</script>

<style>
.title {
  @apply py-2 px-2 rounded text-2xl text-white;
}

.title-button {
  @apply bg-orange-500
}
</style>