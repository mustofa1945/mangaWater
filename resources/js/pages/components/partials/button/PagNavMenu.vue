<script setup>
import BoxIcon from '../box/BoxIcon.vue';
import PagReguler from './PagReguler.vue';
import { useSlidePage } from '../../../stores/useSlidePage';
import { useProgressButton } from '../../../stores/useButtonProgress';

const { pages: [pageOne, pageTwo], showPage } = useSlidePage()
const { nextProgressCLick: next, prevProgressCLick: prev } = useProgressButton()
const storeProgressBar = useProgressButton()
</script>
<template>
    <div class="flex flex-wrap items-center justify-between gap-2 ">
        <PagReguler :options="{ size: 'md', position: 'left' }" class="bg-slate-800  h-[7vh] w-[10%] " />
        <BoxIcon @click="showPage(pageOne.id)"
            :options="{ title: 'Chapter 1', icon: 'fas fa-caret-down', reverse: false }"
            class="w-[70%] rounded-lg h-[7vh] px-3 bg-slate-800" />
        <PagReguler :options="{ size: 'md', position: 'right' }" class="bg-slate-800 h-[7vh] w-[10%] " />
        <PagReguler @click="prev" :options="{ size: 'md', position: 'left' }" class="bg-slate-800 h-[7vh] w-[10%] " />
        <BoxIcon @click="showPage(pageTwo.id)"
            :options="{ title: `Page ${storeProgressBar.readPage}`, icon: 'fas fa-caret-down', reverse: false }"
            class="w-[70%] rounded-lg h-[7vh] px-3 bg-slate-800" />
        <PagReguler @click="next" :options="{ size: 'md', position: 'right' }" class="bg-slate-800 h-[7vh] w-[10%] " />
    </div>
</template>