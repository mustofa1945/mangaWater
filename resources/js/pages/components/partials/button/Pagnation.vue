<script setup>
const pagination = defineProps(['position' , 'title'])
</script>
<template>
    <div :class="`z-20 absolute w-8 top-1/2 ${pagination.position} cursor-pointer rounded-xl p-1 flex justify-center items-center bg-sky-600`">
                    <button class="text-lg text-white cursor-pointer">
                        <i :class="`fas fa-chevron-${pagination.title}`"></i>
                    </button>
                </div>
</template>