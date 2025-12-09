<script setup>  
const emit = defineEmits(['slide'])
defineProps(['options'])
</script>    
<template>  
    <div @click='$emit("slide")' :class="[options.reverse ? 'flex-row-reverse' : '' , 'bg-gray-700  flex items-center justify-between  text-md hover:brightness-115']">
            <span :class="[options?.isVisible]">{{ options.title }}</span>
            <i :class="[options.icon , 'text-[12px]']" ></i>
        </div> 
</template>