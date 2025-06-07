<script setup>
defineProps({
    options : {
        type : Object,
    }
})
</script>
<template>
    <div class="bg-slate-500 rounded-lg justify-center items-center flex hover:brightness-115 cursor-pointer ">
        <button class=" text-black">
            <i :class="`${options.size} fas fa-chevron-${options.position} stroke-2 text-gray-300 cursor-pointer `"></i>
        </button>
    </div>
</template>