<script setup lang="ts">
import {useRouter} from "vue-router";
import {currentUserStore} from "@/model/CurrentUser";
import UserFormView from "@/components/UserFormView.vue";

const router = useRouter();
const login = () => {
  currentUserStore().setUsername("kcnklub");
  router.push("/");
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
      <w-input class="user-login mt5" color="deep-orange-dark3" type="password">
        <span class="deep-orange-dark3">
          Password
        </span>
      </w-input>
    </template>
    <template v-slot:button>
      <w-button
          bg-color="deep-orange-dark3"
          class="mt5 deep-orange-light5"
          xl
          @click="login"
      >
        Sign In!
      </w-button>
    </template>
    <template v-slot:extra-data>
      <p>New User?
        <router-link to="signup">Sign Up!</router-link>
      </p>
    </template>
  </user-form-view>
</template>

<style scoped>
.user-login {
  max-height: 5em;
}
</style>
