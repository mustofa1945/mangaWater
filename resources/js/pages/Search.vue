<script setup>
import DropdownSearch from './components/partials/dropdowns/dropdownSearch.vue';
import BoxLight from './components/ui/BoxLight.vue';
import { dataManga } from '../data/dataManga';
import CardRecentlyUpdate from './components/partials/card/CardRecentlyUpdate.vue'; 
import PagReguler from './components/partials/button/PagReguler.vue'
import { datas , typeMangaSearch } from '../data/dataSearch';
import MainLayout from '../layout/MainLayout.vue';

defineOptions({ layout: MainLayout })
</script>

<template>

    <BoxLight css="4">
        <div class="flex justify-between items-center px-3">
            <h2 class="text-[4vh] text-white/70">Manga Manga</h2>
            <span class="text-white/30">30,062 mangas</span>
        </div>
        <!-- Seacrh -->
        <div class="mt-10 flex gap-x-2">
            <div class="relative w-[11%]">
                <div class="h-7 bg-white flex border border-gray-200 rounded items-center">
                    <input placeholder="Search..." type="search" name="select" id="select"
                        class="px-4 appearance-none text-sm  outline-none text-gray-800 w-full" checked />

                    <label for="show_more"
                        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
                        <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </label>
                </div>
            </div>
            <DropdownSearch v-for="item in datas" :attr="{ placeholder: item.placeholder, item: item.item }" />
            <button   class="bg-blue-600 hover:bg-blue-700 text-white font-bold  px-4 rounded w-[11%]">
               Filter
            </button>
        </div>

        <div class=" shadow-md rounded-lg p-5">
            <!-- Child Div Pertama -->
            <div class="mb-4 flex justify-between">
                <h1 class="text-2xl text-white/80 font-bold mb-2">Recently Update</h1>
                <div class="flex items-center space-x-2">
                    <!-- Child Div dari Child Div Pertama -->
                    <span class=" text-sky-700 px-3 py-1 rounded">All</span>
                    <span v-for="type in typeMangaSearch" class=" text-slate-400 hover:text-white/90 px-3 py-1 rounded duration-100">{{ type }}</span>
                    <PagReguler :options="{ size: 'md', position: 'left'}" position="left" class="w-7" />
                    <PagReguler :options="{ size: 'md', position: 'right'}" position="right" class="w-7" />
                </div>
            </div>
            <div class="flex flex-wrap gap-3">
                <CardRecentlyUpdate v-for="manga in dataManga" :key="manga.id"
                    :manga="{ title: manga.title, url: manga.url, date: manga.date, type: manga.type, chapter: manga.chapter, lang: manga.lang }" />
            </div>
        </div>
    </BoxLight>

</template>