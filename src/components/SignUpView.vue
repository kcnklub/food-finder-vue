<script setup lang="ts">
import UserFormView from "@/components/UserFormView.vue";
import {ref} from "vue";
import {type CreateNewUserRequest, useUserStore} from "@/model/CurrentUser";
import {UserApi} from "@/api/UserApi";
import {useRouter} from "vue-router";

const router = useRouter();

const errorMessage = ref();
const username = ref();
const email = ref();
const password = ref();
const confirmedPassword = ref();

const signUp = async () => {
  const newUserRequest: CreateNewUserRequest = {
    username: username.value === undefined ? "" : username.value.trim(),
    email: email.value === undefined ? "" : email.value.trim(),
    password: password.value === undefined ? "" : password.value.trim(),
    confirmPassword: confirmedPassword.value === undefined ? "" : confirmedPassword.value.trim()
  }
  const userStore = useUserStore();
  const response = await userStore.createNewUser(newUserRequest, new UserApi());
  if(!response.isSuccess) {
    errorMessage.value = response.errorMessage;
  } else {
    await router.push("/")
  }
}
</script>

<template>
  <user-form-view>
    <template v-slot:inputs>
      <p class="error-message rounded bg-red-400 text-white text-center">{{ errorMessage }}</p>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input
          v-model="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Email">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Password
      </label>
      <input
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Confirm Password
      </label>
      <input
          v-model="confirmedPassword"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirm-password"
          type="password"
          placeholder="******************">
    </template>
    <template v-slot:button>
      <button
          class="btn btn-orange mt-3"
          @click="signUp"
      >
        Sign In!
      </button>
    </template>
  </user-form-view>
</template>

<style>
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

