<script setup>
import { reactive } from 'vue';

const Card = defineProps(['image'])

const style = reactive({
    rotate: 10,
    opacity: 0.7,
    scale: 1.25,
})

const medals = reactive({
    scale: 0
})



</script>
<template>
    <div @mouseover="() => {
        style.rotate = 0
        style.opacity = 1
        style.scale = 1
        medals.scale = 2
    }" @mouseout="() => {
        style.rotate = 10
        style.opacity = 0.7
        style.scale = 1.25
        medals.scale = 0
    }" :style="`opacity : ${style.opacity}`"
        class=" p-4 rounded-lg border-l-3 border-sky-400 relative w-1/2 overflow-hidden bg-slate-800 z-10">
        <div :style="`opacity : ${style.opacity}; transform: rotate(${style.rotate}deg) scale(${style.scale}) ;`"
            class="absolute right-0 top-0  w-1/4 h-full  -z-10  duration-200">
            <img alt="The Rising of the Shield Hero cover image" class=" w-full h-full object-cover rounded-r-lg"
                :src="`${Card.image}`" />
        </div>
        <div class="mr-1/3 p-4 w-[75%]">
            <h2 class="text-sm text-gray-400 mb-2">
                Releasing
            </h2>
            <h3 class="text-xl text-white font-bold mb-2">
                The Rising of the Shield Hero
            </h3>
            <p class="text-gray-400 mb-2">
                Twenty-year-old otaku Naofumi Iwatani is mysteriously...
            </p>
            <p class="text-gray-400 mb-4">
                Chap 114 - Vol. 28
            </p>
            <div class="flex space-x-2 text-gray-400">
                <span>
                    Action
                </span>
                <span>
                    Drama
                </span>
                <span>
                    Isekai
                </span>
            </div>
        </div>
        <i :style="`transform : scale(${medals.scale})`"
            class="absolute text-yellow-500 top-[2vh] right-[2vh] fa-solid fa-award duration-300"></i>
    </div>
</template>
