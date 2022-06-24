<script setup lang="ts">
import {currentGroupStore} from "@/model/CurrentGroup";
import {onMounted, onUnmounted} from "vue";
import {useRoute} from "vue-router";
import {TabGroup, TabList, Tab, TabPanel, TabPanels} from "@headlessui/vue";
import LikedPlaces from "@/components/LikedPlaces.vue";
import PlaceSlider from "@/components/PlaceSlider.vue";

const groupId = useRoute().params.id;
const currentGroup = currentGroupStore();

onMounted(() => {
  currentGroup.setCurrentGroup(groupId.toString());
})
onUnmounted(() => {
  currentGroup.clearCurrentGroup();
})

</script>

<template>
  <div class="relative flex justify-center">
    <TabGroup class="w-5/6">
      <div>
        <div>
          <TabList class="space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab v-slot="{ selected }">
              <button
                  :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
              >
                Liked Places
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button
                  :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
              >
                Swipe
              </button>
            </Tab>
          </TabList>
        </div>

        <div>
          <TabPanels class="mt-2">
            <TabPanel>
              <liked-places></liked-places>
            </TabPanel>
            <TabPanel>
              <place-slider></place-slider>
            </TabPanel>
          </TabPanels>
        </div>
      </div>

    </TabGroup>
  </div>
</template>

<style scoped>
</style>
