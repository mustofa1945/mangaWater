<script setup>
import { useProgressButton } from '../../stores/useButtonProgress';
import { useReadingDirec } from '../../stores/useReadingDirec';

const status = defineProps({
    singlePage: Boolean,
    doublePage: Boolean,
    longStrip: Boolean,
})


const { compuReadDirec } = useReadingDirec()
const { instanceProxy, scrollDetectStatus } = useProgressButton()

</script>
<template>
    <!-- SinglePage -->
    <div v-if="status.singlePage" :class="`Single-page h-full w-full flex ${compuReadDirec.readDirec.direc} overflow-x-hidden`">
        <slot name="singlePage" />
    </div>
    <!-- DoublePage -->
    <div v-if="status.doublePage" class="Double-page h-full w-full flex gap-x-3 justify-center ">
        <slot name="doublePage" />
    </div>
    <!-- LongStrip -->
    <div @scroll="scrollDetectStatus(instanceProxy)"  v-if="status.longStrip"
        class="Long-strip  relative h-full flex-col gap-y-2 w-full  flex items-center overflow-y-scroll ">
        <slot name="longStrip" />
    </div>
</template>