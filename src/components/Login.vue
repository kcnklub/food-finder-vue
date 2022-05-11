<script setup lang="ts">
import {currentUser} from "@/model/CurrentUser";
import {useRouter} from "vue-router";

const router = useRouter();

const login = () => {
  currentUser.setUsername("kcnklub");
  router.push("/");
}
</script>

<template>
  <w-flex
      column align-center justify-center
  >
    <div>
      <p class="headline">Welcome!</p>
    </div>
    <div class="login-container bdrs2 pa3" shadow>
      <w-input class="user-login" color="deep-orange-dark3" type="text">
        <span class="deep-orange-dark3">
          Username
        </span>
      </w-input>
      <w-input class="user-login mt5" color="deep-orange-dark3" type="password">
        <span class="deep-orange-dark3">
          Password
        </span>
      </w-input>
      <w-button
          bg-color="deep-orange-dark3"
          class="mt5 deep-orange-light5"
          xl
          @click="login"
      >
        Sign Up
      </w-button>
    </div>
  </w-flex>
</template>

<style scoped>
.user-login {
  max-height: 5em;
}

.login-container {
  width: 15em;
  background-color: #ffe4d8;
}
</style>
