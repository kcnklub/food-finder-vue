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
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">

      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
    </template>
    <template v-slot:button>
      <button
          class="btn btn-orange"
          @click="login"
      >
        Sign In!
      </button>
    </template>
    <template v-slot:extra-data>
      <div class="mt-2">
        New User?
        <router-link to="signup" class="text-orange-500 hover:text-orange-400">
          Sign Up!
        </router-link>
      </div>
    </template>
  </user-form-view>
</template>

<style scoped>
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
