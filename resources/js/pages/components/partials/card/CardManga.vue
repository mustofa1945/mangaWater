<script setup>
import { useSlider } from "../../../composable/compoSLider";

const props = defineProps(["card"]);

</script>
<template>
        <div class="w-full h-full">
            <div
                class="absolute right-0 top-0 w-1/4 h-full group-hover:rotate-0 scale-140 group-hover:scale-100 transition-all rotate-20 -z-10 duration-200"
            >
                <img
                    alt="The Rising of the Shield Hero cover image"
                    class="w-full h-full object-cover rounded-r-lg"
                    :src="`${props.card.url}`"
                />
            </div>
            <div class="mr-1/3 p-4 w-[75%]">
                <h2 class="text-sm text-gray-400 mb-2">Releasing</h2>
                <h3 class="text-xl text-white font-bold mb-2">
                    {{ props.card.title }}
                </h3>
                <p class="text-gray-400 mb-2">
                    Twenty-year-old otaku Naofumi Iwatani is mysteriously...
                </p>
                <p class="text-gray-400 mb-4">Chap 114 - Vol. 28</p>
                <div class="flex space-x-2 text-gray-400">
                    <span> Action </span>
                    <span> Drama </span>
                    <span> Isekai </span>
                </div>
            </div>
            <i
                class="absolute hidden scale-0 group-hover:block group-hover:scale-180 text-yellow-500 top-[2vh] right-[2vh] fa-solid fa-award duration-300"
            ></i>
        </div>
</template>
