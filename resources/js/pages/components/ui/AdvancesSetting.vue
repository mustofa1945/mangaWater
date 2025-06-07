<script setup>
import { watchEffect } from 'vue';
import { useAdvanceSetting } from '../../stores/useAdvanceSetting';
import Image from '../partials/setting/Image.vue';
import PageLayout from '../partials/setting/PageLayout.vue';
import ShortCut from '../partials/setting/ShortCut.vue';

const { advanceSetting, selectSetting, showAndUpdate  } = useAdvanceSetting()
const [pageLayout, image, shortCut] = advanceSetting



</script>
<template>
  <div class="fixed inset-0 bg-black/40 flex flex-col items-center justify-center z-50 w-full  h-full">
    <div class="bg-gray-800 text-white w-[45%] rounded-lg shadow-lg px-6 py-2 h-[80%]">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Advanced Settings</h2>
        <button @click="showAndUpdate()" class="text-gray-400 text-2xl hover:text-white">&times;</button>
      </div>

      <!-- Tabs -->
      <div class="relative flex border-b w-full border-blue-700/10 mb-4 rounded-lg border-1 overflow-hidden gap-x-0.5">
        <button v-for="setting in advanceSetting" @click="selectSetting(setting.id)"
          :class="`px-4 py-2 font-semibold  w-1/3 ${setting.bg} saturate-60 text-white duration-500 transition-all`">{{ setting.title }}</button>
      </div>

      <PageLayout v-if="pageLayout.status" />
      <Image v-if="image.status" />
      <ShortCut v-if="shortCut.status" />
    </div>
  </div>
</template>
