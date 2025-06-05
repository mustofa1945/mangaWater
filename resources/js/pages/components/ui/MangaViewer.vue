<script setup>
import { useReadingDirec } from '../../stores/useReadingDirec';

const status = defineProps({
    singlePage: Boolean,
    doublePage: Boolean,
    longStrip: Boolean,
})


const { compuReadDirec } = useReadingDirec()

</script>
<template>
    <!-- SinglePage -->
    <div v-if="status.singlePage"
        :class="`Single-page h-full w-full flex ${compuReadDirec.readDirec.direc}`">
        <slot name="singlePage" />
    </div>
    <!-- DoublePage -->
    <div v-if="status.doublePage" class="Double-page h-full w-full flex gap-x-3 justify-center ">
        <slot name="doublePage" />
    </div>
    <!-- LongStrip -->
    <div v-if="status.longStrip" class="Long-strip h-full flex-col gap-y-2 w-full  flex items-center overflow-y-scroll ">
        <slot name="longStrip" />
    </div>
</template>