<script setup>

const props = defineProps(["card"]);

</script>
<template>
        <div class="w-full  min-[1200px]:h-full min-[1024px]:h-[12rem]  min-[600px]:h-[12rem] max-[600px]:h-[8rem]">
            <div
                class="absolute right-0 top-0 w-1/4 h-full group-hover:rotate-0 scale-140 group-hover:scale-100 transition-all rotate-20 -z-10 duration-200"
            >
                <img
                    alt="The Rising of the Shield Hero cover image"
                    class="w-full h-full object-cover rounded-r-lg"
                    :src="`${props.card.url}`"
                />
            </div>
            <div class="mr-1/3 h-[12rem] w-[75%]">
                <div class="min-[600px]:h-1/2 max-[600px]:h-[25%]">
                    <h2 class="text-sm text-gray-400 mb-2">Releasing</h2>
                    <h3 class="text-xl text-white font-bold mb-2">
                        {{ props.card.title }}
                    </h3>
                </div>
                <div class="min-[600px]:h-1/2 max-[600px]:pt-6 max-[600px]:h-[75%] flex flex-col min-[768px]:gap-y-2 max-[600px]:gap-y-2">
                    <p class="text-gray-400 min-[600px]:block hidden">
                        Twenty-year-old otaku Naofumi Iwatani is mysteriously...
                    </p>
                    <p class="text-gray-400  max-[600px]:text-sm">Chap 114 - Vol. 28</p>
                    <div class="flex space-x-2 text-gray-400 max-[600px]:text-sm">
                        <span> Action </span>
                        <span> Drama </span>
                        <span> Isekai </span>
                    </div>
                </div>
            </div>
            <i
                class="absolute hidden scale-0 group-hover:block group-hover:scale-180 text-yellow-500 top-[2dvh] right-[2dvh] fa-solid fa-award duration-300"
            ></i>
        </div>
</template>
