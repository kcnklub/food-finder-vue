<script setup>
import {currentUserStore} from '@/model/CurrentUser';
import {useRouter} from "vue-router";
import axios from "axios";
import {ref} from "vue";

const store = currentUserStore();
const router = useRouter();

const groups = ref([])
const openGroup = (group) => {
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
  <w-flex column align-center justify-center>
    <div class="xs7">
      <h1 class="headline">Groups</h1>
      <div>
        <w-flex
            class="group bdrs2 pa3 mt3"
            v-for="group in groups"
            :key="group"
            @click="openGroup(group)"
        >
          <p class="xs11">
            {{ group.groupName }}
          </p>
          <p class="xs1">
            {{ group.numberOfMembers }}
          </p>
        </w-flex>
      </div>

    </div>
  </w-flex>
</template>

<style>
.group {
  background-color: #ffe4d8;
}
.group:hover {
  background-color: #ffcbb4;
  cursor: pointer;
}
</style>
