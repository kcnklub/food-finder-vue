<template>
  <w-flex column align-center justify-center>
    <div>
      <p class="headline">Welcome!</p>
    </div>
    <div class="login-container bdrs2 pa3">
      <slot name="inputs"/>
      <slot name="button"/>
    </div>
    <div>
        <slot name="extra-data"/>
      </div>
  </w-flex>
</template>

<style>
.login-container {
  width: 15em;
  background-color: #ffe4d8;
}
</style>
