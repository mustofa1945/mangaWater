<script setup>
const pagination = defineProps(['position'])
</script>
<template>
    <div :class="`z-20 absolute w-8 top-1/2 ${pagination.position}-[-2vh] rounded-xl p-1 flex justify-center items-center bg-sky-500`">
                    <button class="text-lg text-white">
                        <i :class="`fas fa-chevron-${pagination.position}`"></i>
                    </button>
                </div>
</template>