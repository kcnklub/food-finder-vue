<script setup lang="ts">
// @ts-ignore
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import awsExport from "../aws-exports";

import { Amplify, Auth } from 'aws-amplify';

Amplify.configure(awsExport);
Auth.currentAuthenticatedUser().then(console.log)

const auth = useAuthenticator();
auth.username;

</script>

<template>
  <Authenticator class="mt-5">
    <template v-slot="{ user, signOut }" >
      <h1>Hello {{ user.username }}!</h1>
      <router-link to="/"><button>go home</button></router-link>
      <button @click="signOut">Sign Out</button>
    </template>
  </Authenticator>
</template>



<style scoped>

</style>