<script setup lang="ts">
import {currentUserStore} from '@/model/CurrentUser';
import {useRouter} from "vue-router";
import axios from "axios";
import {ref} from "vue";
import type {Group} from "@/model/Group";

const store = currentUserStore();
const router = useRouter();

const groups = ref([])
const openGroup = (group: Group) => {
  router.push(`/group/${group.id}`)
}

const username = store.username;
if (username === "") {
  router.push("/welcome");
} else {
  axios.get(`/get-groups/${username}`)
      .then(function (response) {
        groups.value = response.data;
      })
}
</script>

<template>
  <div class="relative flex justify-center mt-24">
    <div class="rounded bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 text-white">
      <div class="p-12">
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
