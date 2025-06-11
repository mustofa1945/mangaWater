<script setup>
import { useProgressButton } from '../../stores/useButtonProgress';
import PagReguler from '../partials/button/PagReguler.vue';

const data = defineProps({
    page: Boolean,
    input: {
        type: Boolean,
    },
    display: String,
})

const { instanceProxy, pickPage } = useProgressButton()

const emit = defineEmits(['slidePage'])
</script>
<template>
    <div
        :class="`Page-menu w-[51.5vh] ${!data.page ? 'translate-x-[100%]' : '-translate-x-0'} ${data.display} right-0 flex-col divide-y divide-gray-700  bg-gray-900 border-1 border-blue-900 text-white overflow-x-hidden overflow-y-scroll  h-[92vh] fixed duration-250 transition-all`">
        <div :class="`flex items-center ${!data.input ? 'justify-end' : ''}  bg-gray-800 px-3 py-2 `">
            <svg v-if="data.input" class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"></path>
            </svg>
            <input v-if="data.input" type="text" placeholder="Find number..."
                class="bg-transparent focus:outline-none w-full text-sm placeholder-gray-200" />
            <PagReguler @click="emit('slidePage')" :options="{ size: 'md', position: 'right' }"
                class="bg-slate-500 h-[4vh] w-[5vh] " />
        </div>
        <!-- Content -->
        <div class="flex flex-col divide-y divide-gray-700">
            <div v-for="page in instanceProxy" @click="pickPage(page.id)"
                :class="` relative w-full ${page.pageColor} hover:bg-[#4169E1] saturate-70  cursor-pointer transition-all duration-100`">
                <div
                    :class="`flex ${page.pageTranslateX} hover:translate-x-4 transition-all duration-500 items-center w-full py-2`">
                    <i class="fa-solid fa-play text-sm"></i>
                    <span class="ml-2">
                        Page {{ page.id }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>