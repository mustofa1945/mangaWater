<script setup>
import {  computed } from 'vue';
import { useCompoDropDownHeader } from '../../../composable/compoDropDown';

const { compuDropHeader , runDropDownHeader } = useCompoDropDownHeader()

const isGenreStatusActive = computed(() => compuDropHeader.concatDrop.value[1].status)

</script>

<template>
    <div :class="`flex-col absolute  min-[576px]:flex left-0 top-10 w-fit ${isGenreStatusActive ? 'h-[91dvh]' : 'h-fit'} overflow-y-scroll bg-slate-900 py-2 min-[1200px]:hidden transition-all duration-300`">
        <div v-for="item in compuDropHeader.concatDrop.value" :class="`relative   text-gray-300 ${compuDropHeader.isDropActive.value ? 'w-[320px]' : 'w-[130px]' }`">
            <div v-if="item.isHaveDrop" class="w-full  flex flex-col">
                <div @click="runDropDownHeader(item.id)" class="w-full flex justify-center items-center gap-x-2 py-2  hover:bg-blue-900 hover:contrast-90 ">
                    <div>
                        <i class="fa-solid fa-chevron-right flex-1 text-sm flex justify-end items-center"></i>
                    </div>
                    <h2 :class="`${compuDropHeader.isDropActive.value ? 'w-[80%]' : 'w-[60%]' } text-sm`">{{ item.title }}</h2>
                </div>
                <div v-if="item.status" :class="`w-full ${item.updateAnimeProper.height} overflow-hidden transition-all duration-300 border-y-1 border-blue-600/50`">
                    <div class="w-full flex flex-wrap mt-2 px-2 pb-2">
                        <h1 v-for="itemDrop in item.dataDrop" class="w-1/2 text-sm hover:bg-blue-900 hover:contrast-90 p-1 pl-2 rounded-lg">{{ itemDrop }}</h1>
                    </div>
                </div>
            </div>
            <div v-else class="w-full flex justify-center items-center gap-x-2 py-2  hover:bg-blue-900 hover:contrast-90 ">
                <div>
                    <i class="fa-solid fa-chevron-right flex-1 text-sm flex justify-end items-center"></i>
                </div>
                <h2 :class="`${compuDropHeader.isDropActive.value ? 'w-[80%]' : 'w-[60%]' } text-sm`">{{ item.title }}</h2>
            </div>
        </div>
    </div>
</template>
