<script setup>

defineProps(['manga'])
</script>
<template>
    <div
        class="w-[49.2%] flex  h-[30dvh] bg-slate-800/70 hover:bg-slate-800/100 duration-100 rounded-lg border-1 border-slate-100/10">
        <div class="w-[20%] h-full rounded-lg ">
            <img :src="manga.url" class="w-full rounded-lg  h-full object-cover" alt="">
        </div>
        <div class="h-full flex flex-col  w-[80%] px-5">
            <div class="pt-2">
                <h1 class="text-[15px] text-sky-600">{{ manga.type }}</h1>
                <h1 class="text-white">{{ manga.title }}</h1>
            </div>
            <div class="flex flex-col gap-y-2 items-center justify-center pt-[2dvh] ">
                <div v-for="chap in manga.chapter"
                    class=" text-white/40 flex justify-between items-center px-[2dvh] py-1 transition-all duration-250 bg-slate-900/60 hover:bg-slate-900 hover:text-white rounded-xl w-full h-[30%] ">
                    <span class="text-[13px]">{{ `chap ${chap} ${manga.lang}` }} </span>
                    <span class="text-[13px]">{{ manga.date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>