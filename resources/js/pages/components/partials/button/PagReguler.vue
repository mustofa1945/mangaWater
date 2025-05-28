<script setup>
defineProps({
    options : {
        type : Object,
    }
})
</script>
<template>
    <div class="bg-slate-500 rounded-lg justify-center items-center flex hover:brightness-115">
        <button class="text-sm text-black">
            <i :class="`text-${options.size} text-white fas fa-chevron-${options.position}`"></i>
        </button>
    </div>
</template>