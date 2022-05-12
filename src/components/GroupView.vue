<script setup lang="ts">
import {currentGroupStore} from "@/model/CurrentGroup";
import {computed, onMounted, onUnmounted} from "vue";
import {useRoute} from "vue-router";

const groupId = useRoute().params.id;
const currentGroup = currentGroupStore();

const groupName = computed(() => {
  return currentGroup.getName;
})

onMounted(() => {
  currentGroup.setCurrentGroup(groupId.toString());
})
onUnmounted(() => {
  currentGroup.clearCurrentGroup();
})

</script>

<template>
  <w-toolbar
      style="max-height: 2.5em;"
      class="py0"
      height="2.5em"
  >
    <div class="title3">
      <router-link :to="{ path: '/group/' + groupId}">
        {{ groupName }}
      </router-link>
      </div>
    <div class="spacer"></div>
    <w-menu
        custom
        hide-on-menu-click
        persistent
        shadow
        align-right
    >
      <template v-slot:activator="{ on }">
        <w-button
            class="ma1"
            xl
            icon="wi-check"
            v-on="on"
        >
        </w-button>
      </template>

      <div>
        <router-link :to="{ path: '/group/' + groupId}">
          List
        </router-link>
      </div>
      <div>
        <router-link :to="{ path: '/group/' + groupId + '/swipe'}">Swipe</router-link>
      </div>
    </w-menu>
  </w-toolbar>
  <router-view/>
</template>

<style scoped>
w-toolbar {
  max-height: 2em;
}
</style>
