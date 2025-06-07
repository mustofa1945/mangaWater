<script setup>
import MainLayout from '../layout/MainLayout.vue';
import SosiaLinks from './components/partials/button/SosiaLinks.vue';
import BoxLight from './components/ui/BoxLight.vue';
import DetailsManga from './components/partials/manga/DetailsManga.vue';
import NavManga from './components/partials/manga/NavManga.vue';

defineOptions({ layout: MainLayout })
</script>
<template>
    <BoxLight padding="0">
        <div class="relative z-10 w-full grid grid-cols-4  grid-rows-9 bg-gray-800/20 gap-5 saturate-80">
            <div class="absolute top-0  h-full w-full blur-md  opacity-10 z-0 saturate-80 ">
                <img alt="Background image with various manga characters" class="  w-full h-1/2  object-cover"
                    height="1080" src="https://mangafire.to/assets/t2/s1/images/index.jpg" width="1920" />
            </div>
            <!-- Details Manga -->
             <DetailsManga />
             
             <NavManga />

            <!-- Chap -->
            <div
                class="container relative z-10 col-span-3  row-span-3 border-1 border-slate-500/20 rounded-xl h-[80vh] mx-auto ">
                <div class="flex justify-between items-center bg-slate-900 p-3 flex-1">
                    <div
                        class="flex items-center rounded-4xl bg-gray-800 py-1.5 px-4 hover:contrast-70 duration-150  transition-all">
                        <i class="fas fa-globe mr-2 text-gray-400"></i>
                        <span class="text-gray-400">Language: EN</span>
                    </div>
                    <div class="relative w-[30vh] ">
                        <input type="text" placeholder="Chap number..."
                            class="bg-gray-800 w-full  py-1 text-white rounded-full pl-10 border-1 border-slate-500 ">
                        <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                </div>
                <!-- List Chapter -->
                <div class="bg-slate-800/40 saturate-80 rounded h-[88%] text-white ">
                    <ul class="divide-y divide-slate-100/10 h-full overflow-x-hidden overflow-y-auto">
                        <li v-for="item in 25">
                            <div class="flex  text-gray-300 hover:text-sky-600 ">
                                <div class="flex-1  flex  items-center hover:translate-x-4 -translate-x-5 gap-x-3 transition-all duration-400">
                                    <i class="fa-solid text-xl fa-square-caret-right"></i>
                                    <span class="m-2 ">Chapter {{ 25 + 1 - item }}: Plan</span>
                                </div>
                                <div class="flex justify-between w-[15%] ">
                                    <span class="m-2 ">Dec 26, 2024</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Comment -->
            <div class="relative z-10 w-full h-[35%] p-2 border-1 border-slate-600/20 col-span-3 row-span-3 ">
                <h1 class="text-xl text-gray-300">Comment</h1>
            </div>

        </div>
        <div>

        </div>
    </BoxLight>
</template>