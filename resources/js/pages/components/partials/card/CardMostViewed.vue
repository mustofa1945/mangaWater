<script setup>
import { reactive } from 'vue';

const effect = reactive({
    scale: 1
})


defineProps(['manga', 'icon'])
</script>
<template>

    <div @mouseover="() => effect.scale = 1.04" @mouseout="() => effect.scale = 1"
        class="group relative w-[14%]  h-[42vh] flex flex-col gap-x-1 bg-slate-800 rounded-xl overflow-hidden">
        <div class="relative w-full overflow-hidden flex-1  ">
            <div :style="`transform : scale(${effect.scale})`" class=" duration-200  ">
                <img :src="manga.url" alt="" class=" top-0 w-full h-full object-cover  ">
            </div>
        </div>
        <div class="w-full h-[15%]  flex justify-center items-center">
            <h1 class="text-white/40 text-[17px]">{{ manga.title }}</h1>
        </div>

        <!-- number -->

        <div v-if="icon"
            class="text-white/80 bg-slate-900 w-[3vh] group-hover:h-[7vh] h-[4vh]  rounded-b-full rounded-t-full  absolute top-1 right-2 flex justify-center items-end duration-200">
            {{ manga.index + 1 }}
        </div>
    </div>

</template>