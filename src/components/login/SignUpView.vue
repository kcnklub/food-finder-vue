<script setup lang="ts">
import UserFormView from "@/components/login/UserFormView.vue";

const signUp = () => {
  console.log("Signing up");
}
</script>

<template>
  <user-form-view>
    <template v-slot:inputs>
      <w-input class="user-login" color="deep-orange-dark3" type="text">
        <span class="deep-orange-dark3">
          Username
        </span>
      </w-input>
      <w-input class="user-login" color="deep-orange-dark3" type="text">
        <span class="deep-orange-dark3">
          Email
        </span>
      </w-input>
      <w-input class="user-login" color="deep-orange-dark3" type="text">
        <span class="deep-orange-dark3">
          Password
        </span>
      </w-input>
      <w-input class="user-login" color="deep-orange-dark3" type="password">
        <span class="deep-orange-dark3">
          Confirm Password
        </span>
      </w-input>
    </template>
    <template v-slot:button>
      <w-button
          bg-color="deep-orange-dark3"
          class="mt5 deep-orange-light5"
          xl
          @click="signUp"
      >
        Sign Up
      </w-button>
    </template>
  </user-form-view>
</template>

<style>
.user-login {
  max-height: 5em;
  margin-top: 5px;
}
</style>

