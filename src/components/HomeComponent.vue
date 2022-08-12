<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref, onMounted} from "vue";
import type {Group} from "@/model/Group";

//@ts-ignore
import {Authenticator, useAuthenticator} from "@aws-amplify/ui-vue";
import {Auth,} from "aws-amplify";
import axios from "axios";

const router = useRouter();

const groups = ref([])
const openGroup = (group: Group) => {
  router.push(`/group/${group.id}`)
}
let signedIn = false;
let username = ref("");
onMounted(() => {
  Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log("signed in");
        userIsSignedIn(user.username);

      })
      .catch(() => {
        console.log("not signed in")
        signedIn = false
      })
})

const userIsSignedIn = (newUsername: string) => {
  signedIn = true;
  username.value = newUsername;
  axios.get(`/get-groups/${username.value}`)
      .then(function (response) {
        groups.value = response.data;
      });
}

</script>

<template>
  <div class="relative flex justify-center mt-24">
    <div class="rounded bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 text-white">
      <div class="p-12">
        <h1 id="user-welcome" class="text-2xl">Welcome {{ username }}!</h1>
        <h1 class="text-2xl">Groups</h1>
        <div>
          <div
              class="group flex justify-between"
              v-for="group in groups"
              :key="group"
              @click="openGroup(group)"
          >
            <p>
              {{ group.groupName }}
            </p>
            <p>
              {{ group.numberOfMembers }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.group {
  @apply flex
  justify-between
  bg-gradient-to-r from-amber-500 to-orange-500
  rounded
  mt-1
  p-1;
  cursor: pointer;
}

</style>
