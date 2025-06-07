<script setup>
import BoxIcon from '../box/BoxIcon.vue';
import PagReguler from './PagReguler.vue';
import { useSlidePage } from '../../../stores/useSlidePage';
import { useProgressButton } from '../../../stores/useButtonProgress';

const { pages: [pageOne, pageTwo], showPage } = useSlidePage()
const { nextProgressCLick: next, prevProgressCLick: prev } = useProgressButton()
const { computedProgressBar } = useProgressButton()
</script>
<template>
    <div class="flex flex-wrap items-center justify-between gap-0.5 gap-y-1 text-gray-300"> 
        <PagReguler :options="{ size: 'text-xs', position: 'left' }" class="bg-slate-800  h-[7vh] w-[12%] " />
        <BoxIcon @click="showPage(pageOne.id)"
            :options="{ title: 'Chapter 1', icon: 'fas fa-caret-down', reverse: false }"
            class="w-[70%] rounded-lg h-[7vh] px-3 bg-slate-800 cursor-pointer " />
        <PagReguler :options="{ size: 'text-xs', position: 'right' }" class="bg-slate-800 h-[7vh] w-[12%] " />
        <PagReguler @click="prev" :options="{ size: 'text-xs', position: 'left' }" class="bg-slate-800 h-[7vh] w-[12%] " />
        <BoxIcon @click="showPage(pageTwo.id)"
            :options="{ title: `Page ${computedProgressBar.readPage}`, icon: 'fas fa-caret-down', reverse: false }"
            class="w-[70%] rounded-lg h-[7vh] px-3 bg-slate-800 cursor-pointer" />
        <PagReguler @click="next" :options="{ size: 'text-xs', position: 'right' }" class="bg-slate-800 h-[7vh] w-[12%] " />
    </div>
</template>