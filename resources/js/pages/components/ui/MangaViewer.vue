<script setup>
import { useReadingDirec } from '../../stores/useReadingDirec';

const status = defineProps({
    singlePage: Boolean,
    doublePage: Boolean,
    longStrip: Boolean,
})


const storeReadingDirec = useReadingDirec()

</script>
<template>
    <!-- SinglePage -->
    <div v-if="status.singlePage" :class="`h-full w-full flex ${storeReadingDirec.readDirec.direc} overflow-hidden  gap-x-2`">
        <slot name="singlePage" />
    </div>
    <!-- DoublePage -->
    <div v-if="status.doublePage" class=" h-full absolute w-full top-0 flex gap-x-3 justify-center ">
        <slot name="doublePage" />
    </div>
    <!-- LongStrip -->
    <div v-if="status.longStrip" class="flex-col gap-y-2 w-full absolute  top-0 flex justify-center items-center ">
        <slot name="longStrip" />
    </div>
</template>