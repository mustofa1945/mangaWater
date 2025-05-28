<script setup>  
const emit = defineEmits(['slide'])
defineProps(['options'])
</script>    
<template>  
    <div @click='$emit("slide")' :class="`bg-gray-700 ${options.reverse ? 'flex-row-reverse' : ''}  flex items-center justify-between  text-md hover:brightness-115`">
            {{ options.title }}
            <i :class="`${options.icon} text-[12px]`" ></i>
        </div> 
</template>