<script setup>

const data = defineProps({
    title: String,
    url: String
})
</script>
<template>
    <div class="flex items-center h-[5vh] px-4 py-4 w-full">
        <div class="w-7 h-4">
            <img :src="data.url" alt="Indonesia" class="w-full h-full  bg-cover">
        </div>
        <h2 class="ml-4 text-[10px] ">{{ data.title }}</h2>
    </div>
</template>