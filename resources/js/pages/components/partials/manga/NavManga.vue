<script setup>
import { useCompoStar } from '../../../composable/compoStar';

const { onOverHoverStar, dataStar, grade, scor } = useCompoStar()

</script>
<template>
    <nav class="flex relative z-10 flex-col  w-full col-span-1 row-span-9 pt-5">
        <div class="flex flex-col text-sm">
            <span class="text-slate-500 text-[16.5px] ">Author : <a href=""
                    class="text-white hover:text-sky-600 duration-150 transition-all">Yuuki Tabata</a></span>
            <span class="text-slate-500 text-[16.5px]">Published : <span
                    class="text-white hover:text-sky-600 duration-150 transition-all">February
                    2015</span></span>
            <span class="text-slate-500 text-[16.5px]">Genres : <a href=""
                    class="text-white hover:text-sky-600 duration-150 transition-all">Comedy</a>,<a
                    class="text-white hover:text-sky-600 duration-150 transition-all" href="">Action</a></span>
            <span class="text-slate-500 text-[16.5px]">Megazines : <a href=""
                    class="text-white hover:text-sky-600 duration-150 transition-all">Shounen Jump</a></span>
        </div>
        <div
            class="mt-10 h-[12dvh] w-[45dvh] text-white bg-slate-900  border-1 p-1 border-white/30  rounded-2xl flex gap-x-2 items-center justify-center">
            <div class="pl-2 w-[45%]">
                <h1 class="text-2xl">{{ scor }} / 10</h1>
                <p class="text-slate-600">{{ grade }}</p>
            </div>
            <div class="flex-1 h-full flex relative justify-center items-center gap-2">
                <i v-for="star in dataStar" @mouseover="onOverHoverStar(star.id)"
                    :class="`${star.icon} ${star.scale} fa-star text-lg  font-bold text-yellow-300 transition-all duration-200`"></i>
            </div>
        </div>
        <div class="mt-50 text-white border-1 border-white/30  rounded-2xl flex flex-col h-[20dvh] overflow-hidden">
            <div class="flex justify-between items-center h-1/2 border-b-1 border-slate-400 p-3 bg-slate-900">
                <h1 class="text-2xl text-slate-500">Related Manga</h1>
                <div class="border-1 border-slate-600 w-[15dvh] flex justify-center items-center rounded-2xl">
                    <a href="">More</a>
                    <i class="fa-solid fa-bottom"></i>
                </div>
            </div>
            <h1 class="h-1/2 flex pl-3 items-center w-full bg-slate-700/10 text-slate-500">One puch man
            </h1>
        </div>

        <div class="bg-gray-800  flex flex-col  rounded-lg mt-10">
            <h2 class="text-xl ml-2 mt-2 font-semibold mb-4 text-white">
                You may also like
            </h2>
            <div v-for="item in 7" class="flex items-center odd:bg-slate-900 p-3  even:bg-slate-800/70   even:saturate-70 ">
                <img alt="Cover of Mob Psycho 100" class="w-12 h-15 rounded mr-4" height="55"
                    src="https://storage.googleapis.com/a1aa/image/LT-4Pwofy34SDu_RVOlc5NJ7s5h825eyKvu_DO98zDc.jpg"
                    width="50" />
                <div>
                    <h3 class="text-sm font-semibold hover:text-sky-600 transition-all duration-150 text-white">
                        Mob Psycho 100
                    </h3>
                    <p class="text-xs text-gray-400">
                        Chap 101 · Vol 16
                    </p>
                </div>
            </div>
        </div>
    </nav>
</template>