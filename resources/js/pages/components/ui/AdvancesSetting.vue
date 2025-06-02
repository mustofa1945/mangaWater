<script setup>
import { useAdvanceSetting } from '../../stores/useAdvanceSetting';
import Image from '../partials/setting/Image.vue';
import PageLayout from '../partials/setting/PageLayout.vue';
import ShortCut from '../partials/setting/ShortCut.vue';

const { advanceSetting, selectSetting, showAndUpdate } = useAdvanceSetting()
const [pageLayout, image, shortCut] = advanceSetting
const read = useAdvanceSetting()

</script>
<template>
  <div class="fixed inset-0 bg-black/40 flex flex-col items-center justify-center z-50 w-full  h-full">
    <div class="bg-gray-800 text-white w-[45%] rounded-lg shadow-lg px-6 py-2 h-[80%]">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Advanced Settings</h2>
        <button @click="showAndUpdate()" class="text-gray-400 text-2xl hover:text-white">&times;</button>
      </div>

      <!-- Tabs -->
      <div class="relative flex border-b w-full border-gray-700 mb-4  ">
        <button v-for="setting in advanceSetting" @click="selectSetting(advanceSetting, setting.id)"
          :class="`px-4 py-2 font-semibold text-blue-400 w-1/3 `">{{ setting.title }}</button>
        <div
          :class="`absolute bottom-0 left-0 ${read.readSetting.borderBottom} bg-blue-400 w-1/3 h-[0.3vh] duration-200 transition-all`">
        </div>
      </div>

      <PageLayout v-if="pageLayout.status" />
      <Image v-if="image.status" />
      <ShortCut v-if="shortCut.status" />
    </div>
  </div>
</template>