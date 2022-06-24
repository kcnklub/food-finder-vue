<template>
  <div class="relative flex justify-center mt-24">
    <div class="rounded bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 text-white">
      <div class="p-12">
        <div>
          <p class="text-2xl">Welcome!</p>
        </div>
        <div class="">
          <slot name="inputs"/>
          <slot name="button"/>
        </div>
        <div>
          <slot name="extra-data"/>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
</style>
