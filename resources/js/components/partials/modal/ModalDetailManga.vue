<script setup>
import { langs } from "../../../data/dataManga";

const props = defineProps(["manga"]);

</script>
<template>
    <div
        class="absolute left-[8.2rem] top-1/4 bg-slate-900 border-1 w-[20rem] pl-4 pr-2 pb-5 pt-5 border-blue-600/30 flex-col gap-y-4"
    >
        <div>
            <h1
                class="text-sky-600 text-[12px] pl-1 contrast-125 tracking-[2.5px] -indent-1"
            >
                RELEASING
            </h1>
            <h1 class="text-lg text-gray-300">{{ props.manga.title }}</h1>
        </div>
        <div class="flex justify-between w-[40%] items-center gap-x-2">
            <img
                v-for="lang in langs"
                :key="lang.id"
                :src="lang.url"
                class="w-1/5 h-[0.7rem]"
            />
        </div>
        <div>
            <span class="text-sky-600">7.49 MAL</span>
            <span class="text-gray-500 ml-2">By 31,456 users</span>
        </div>
        <div class="w-full flex gap-x-3">
            <button
                class="border-1 rounded-full hover:bg-slate-800 transition-all duration-150 bg-slate-800/80 text-gray-300 py-[1px] px-4 text-sm"
                v-for="genre in 3"
            >
                Action
            </button>
        </div>
        <i
            class="absolute text-yellow-500 top-[2dvh] right-[2dvh] fa-solid fa-award"
        ></i>
    </div>
</template>
