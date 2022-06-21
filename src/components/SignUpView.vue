<script setup lang="ts">
import UserFormView from "@/components/UserFormView.vue";
import {validateUserInput} from "@/model/UserFormInputValidation";
import {ref} from "vue";

const errorMessage = ref();
const username = ref();
const email = ref();
const password = ref();
const confirmedPassword = ref();

const signUp = () => {
  const validationOutput = validateUserInput({
    username: username.value === undefined ? "" : username.value.trim(),
    email: email.value === undefined ? "" : email.value.trim(),
    password: password.value === undefined ? "" : password.value.trim(),
    confirmedPassword: confirmedPassword.value === undefined ? "" : confirmedPassword.value.trim()
  })

  if(!validationOutput.isSuccess) {
    errorMessage.value = validationOutput.errorMessage;
  } else {
    errorMessage.value = "";
  }
}
</script>

<template>
  <user-form-view>
    <template v-slot:inputs>
      <p class="error-message">{{ errorMessage }}</p>
      <w-input v-model="username" class="user-login" color="deep-orange-dark3" type="text">
        <span class="deep-orange-dark3">
          Username
        </span>
      </w-input>
      <w-input v-model="email" class="user-login" color="deep-orange-dark3" type="text">
        <span class="deep-orange-dark3">
          Email
        </span>
      </w-input>
      <w-input v-model="password" class="user-login" color="deep-orange-dark3" type="password">
        <span class="deep-orange-dark3">
          Password
        </span>
      </w-input>
      <w-input v-model="confirmedPassword" class="user-login" color="deep-orange-dark3" type="password">
        <span class="deep-orange-dark3">
          Confirm Password
        </span>
      </w-input>
    </template>
    <template v-slot:button>
      <w-button
          id="sign-up-button"
          bg-color="deep-orange-dark3"
          class="sign-up-button mt5 deep-orange-light5"
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

.error-message {
  color: red;
}
</style>

