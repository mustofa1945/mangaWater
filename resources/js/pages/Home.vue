<script setup>
import Pagnation from './components/partials/button/Pagnation.vue';
import SosiaLinks from './components/partials/button/SosiaLinks.vue';
import CardManga from './components/partials/card/CardManga.vue';
import CardMostViewed from './components/partials/card/CardMostViewed.vue';
import CardRecentlyUpdate from './components/partials/card/CardRecentlyUpdate.vue';
import BoxLight from './components/ui/BoxLight.vue';
import { dataManga } from '../data/dataManga';
import PagReguler from './components/partials/button/PagReguler.vue';
import { typeMangaSearch } from '../data/dataSearch';
import MainLayout from '../layout/MainLayout.vue';

defineOptions({ layout: MainLayout })
</script>
<template>
    <BoxLight css="10">
        <div>
            <div class="relative flex justify-between items-center gap-x-5 ">
                <CardManga image="https://static.mangafire.to/04f9/i/5/51/51360d75d5ffa0cc3234dc79d9c36d26.jpg" />
                <CardManga image="https://static.mangafire.to/1664/i/3/37/e6da183e3030b35909f7940e193589a8.jpg" />
                <Pagnation position="left" />
                <Pagnation position="right" />
            </div>


            <div class="flex flex-col gap-y-2">
                <div class="bg-sky-500 text-center text-white py-2 rounded-lg my-4">
                    The image loading issue has been fixed, everything is ok now!
                </div> 
                <div class="flex flex-col items-center bg-slate-800 py-2 gap-y-2.5">
                    <p class="text-slate-400"> If you enjoy the website, please consider sharing it with your friends.
                        Thank you!</p>
                    <div class="text-center  gap-y-1 ">
                        <SosiaLinks />
                    </div>
                </div>
            </div>
        </div>

        <!-- Most View -->
        <div
            class="relative mt-[10vh] px-[10px] flex flex-col gap-y-3 items-left justify-around border-b-1 border-slate-500/50 pb-[10vh]">
            <h1 class="text-[25px] text-slate-500">Most View</h1>

            <div class=" flex items-center gap-x-4 justify-center w-full">
                <CardMostViewed v-for="(manga , index) in dataManga"  icon="true" :key="manga.id" :manga="{ title: manga.title, url: manga.url ,  index : index }" />
            </div>
            <span class="absolute bottom-[-0.1vh] left-0 w-[30%] h-[1px] bg-sky-700"></span>
        </div>

        <!-- Recently Update -->


        <!-- Parent Div -->
        <div class=" shadow-md rounded-lg p-5">
            <!-- Child Div Pertama -->
            <div class="mb-4 flex justify-between">
                <h1 class="text-2xl text-white/80 font-bold mb-2">Recently Update</h1>
                <div class="flex items-center space-x-2">
                    <!-- Child Div dari Child Div Pertama -->
                    <span class=" text-sky-700 px-3 py-1 rounded">All</span>
                    <span v-for="type in typeMangaSearch" class=" text-slate-400 hover:text-white/90 px-3 py-1 rounded duration-100">{{ type }}</span>
                    <PagReguler :options="{ size: 'md', position: 'left'}" position="left" class="w-7 "/>
                    <PagReguler :options="{ size: 'md', position: 'right'}" position="right" class="w-7" />
                </div>
            </div>
            <div class="flex flex-wrap gap-3">
                <CardRecentlyUpdate v-for="manga in dataManga" :key="manga.id"
                    :manga="{ title: manga.title, url: manga.url, date: manga.date, type: manga.type, chapter: manga.chapter, lang: manga.lang }" />
            </div>
        </div>
        <!-- New Release -->

        <div
            class="relative mt-[10vh] px-[10px] flex flex-col gap-y-3 items-left justify-around border-b-1 border-slate-500/50 pb-[10vh]">
            <div class="mb-4 flex justify-between">
                <h1 class="text-2xl text-white/80 font-bold mb-2">Recently Update</h1>
                <div class="flex items-center space-x-2">
                    <PagReguler :options="{ size: 'md', position: 'left'}" position="left" class="w-7 "/>
                    <PagReguler :options="{ size: 'md', position: 'right'}" position="right" class="w-7" />
                </div>
            </div>

            <div class=" flex items-center gap-x-4 justify-center w-full">
                <CardMostViewed v-for="manga in dataManga" :key="manga.id" :manga="{ title: manga.title, url: manga.url }" />
            </div>
            <span class="absolute bottom-[-0.1vh] left-0 w-[30%] h-[1px] bg-sky-700"></span>
        </div>
    </BoxLight>
</template>