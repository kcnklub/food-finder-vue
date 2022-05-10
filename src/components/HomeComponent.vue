<script setup>
import {currentUser} from '@/model/CurrentUser';
import {useRouter} from "vue-router";

if(currentUser.getUsername() === ""){
  useRouter().push("/welcome");
}
</script>

<template>
  Home
</template>

<style>

</style>
