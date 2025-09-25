<script setup>
defineProps({
    options : {
        type : Object,
    }
})
</script>
<template>
    <div class="bg-slate-500 justify-center items-center flex hover:brightness-115 cursor-pointer ">
        <button class="w-full h-full text-black  justify-center items-center flex">
            <i :class="`${options.size} fas fa-chevron-${options.position} stroke-2 text-gray-300 cursor-pointer`"></i>
        </button>
    </div>
</template>