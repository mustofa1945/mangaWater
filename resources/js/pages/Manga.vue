<script setup>
import { datas } from '../data/dataSearch';
import MainLayout from '../layout/MainLayout.vue';
import SosiaLinks from './components/partials/button/SosiaLinks.vue';
import BoxLight from './components/ui/BoxLight.vue';
import { useCompoStar } from './composable/compoStar';

const { dataStar, scor , onOverHoverStar , grade , reset  } = useCompoStar()

defineOptions({ layout: MainLayout })
</script>
<template>
    <BoxLight padding="0">
        <div class="relative z-10 w-full grid grid-cols-4  grid-rows-3 bg-gray-800/20 gap-x-3 saturate-80">
            <div class="absolute top-0  h-full w-full blur-md  opacity-10 z-0 saturate-80 ">
                <img alt="Background image with various manga characters" class="  w-full h-1/2  object-cover"
                    height="1080" src="https://mangafire.to/assets/t2/s1/images/index.jpg" width="1920" />
            </div>
            <!-- Details Manga -->
            <div class="relative z-10 max-w-[100%] col-span-3 row-span-1  p-4">
                <div class="flex h-[60vh] flex-col md:flex-row items-start md:items-center  p-4 rounded-lg">
                    <div class="w-[20%] h-full">
                        <img alt="Cover of Black Clover manga featuring a character with spiky hair and a dragon in the background"
                            class="object-cover w-full h-full rounded-lg" height="225"
                            src="https://static.mangafire.to/2385/i/d/d8/d8fd48b71ebd5f32a2392b5e71eeb3c6.jpg" />
                    </div>
                    <div class="md:ml-6 w-[70%] mt-4 md:mt-0">
                        <h1 class="text-md text-blue-400 mb-2 tracking-[5px]">
                            RELEASING
                        </h1>
                        <h1 class="text-2xl text-white font-bold">
                            Black Clover
                        </h1>
                        <h1 class="text-gray-400 mb-4">
                            Black Clover; 블랙 클로버
                        </h1>
                        <div class="flex space-x-4 mb-4">
                            <Link href="/read"
                                class="bg-sky-600 saturate-70    hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
                            START READING
                            </Link>
                            <button class="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
                                BOOKMARK
                                <i class="fas fa-bookmark">
                                </i>
                            </button>
                        </div>
                        <div class="text-gray-400 mb-4 flex gap-x-2  items-baseline">

                            <span class="text-md text-slate-400">
                                Manga
                            </span>
                            <i class="fa-solid fa-tag"></i>
                            <span>
                                23,595
                            </span>

                            <span>
                                7.86 MAL by 98,383 users
                            </span>
                        </div>
                        <p class="text-gray-300 mb-4">
                            Asta, a boisterous orphan with no magical abilities, yearns to become the Wizard King of
                            the Clover Kingdom, a title reserved for the most powerful ma...
                            <span
                                class="text-white/20 hover:text-white duration-200 border-b-1 w-[14.5%] border-sky-500 text-md">
                                Read more +
                            </span>
                        </p>
                        <div class="flex items-center space-x-2 text-gray-400">
                            <span class="text-sm">
                                135 Shares
                            </span>
                            <div class=" w-full">
                                <SosiaLinks width="15" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nav -->

            <nav class="flex relative z-10 flex-col  w-[100%] col-span-1 row-span-2 pt-5">
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
                    class="mt-10 h-[12vh] w-[45vh] text-white bg-slate-900  border-1 p-1 border-white/30  rounded-2xl flex gap-x-2 items-center justify-center">
                    <div class="pl-2 w-[45%]">
                        <h1 class="text-2xl">{{ scor }} / 10</h1>
                        <p class="text-slate-600">{{ grade }}</p>
                    </div>
                    <div class="flex-1 h-full flex relative justify-center items-center gap-2" >
                        <i v-for="star in dataStar" @mouseover="onOverHoverStar(star.id)" 
                            :class="`${star.icon} ${star.scale} fa-star text-lg  font-bold text-yellow-300 transition-all duration-200`"></i>
                    </div>
                </div>
                <div
                    class="mt-50 text-white border-1 border-white/30  rounded-2xl flex flex-col h-[20vh] overflow-hidden">
                    <div class="flex justify-between items-center h-1/2 border-b-1 border-slate-400 p-3 bg-slate-900">
                        <h1 class="text-2xl text-slate-500">Related Manga</h1>
                        <div class="border-1 border-slate-600 w-[15vh] flex justify-center items-center rounded-2xl">
                            <a href="">More</a>
                            <i class="fa-solid fa-bottom"></i>
                        </div>
                    </div>
                    <h1 class="h-1/2 flex pl-3 items-center w-full bg-slate-700/10 text-slate-500">One puch man
                    </h1>
                </div>

                <div class="bg-gray-800 p-4 flex flex-col gap-y-2.5 rounded-lg mt-10">
                    <h2 class="text-md font-semibold mb-4 text-white">
                        You may also like
                    </h2>
                    <div v-for="item in 5" class="flex items-center bg-gray-900 p-3  rounded-lg">
                        <img alt="Cover of Mob Psycho 100" class="w-12 h-12 rounded mr-4" height="50"
                            src="https://storage.googleapis.com/a1aa/image/LT-4Pwofy34SDu_RVOlc5NJ7s5h825eyKvu_DO98zDc.jpg"
                            width="50" />
                        <div>
                            <h3 class="text-sm font-semibold text-white">
                                Mob Psycho 100
                            </h3>
                            <p class="text-xs text-gray-400">
                                Chap 101 · Vol 16
                            </p>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Chap -->
            <div
                class="container relative z-10 col-span-3  row-span-1 border-1 border-slate-500/20 rounded-xl h-[80vh] mx-auto ">
                <div class="flex justify-between items-center bg-slate-900 p-3 flex-1">
                    <div class="flex items-center rounded-4xl bg-gray-800 py-1.5 px-4 ">
                        <i class="fas fa-globe mr-2 text-white"></i>
                        <span class="text-white">Language: EN</span>
                    </div>
                    <div class="relative w-[30vh] ">
                        <input type="text" placeholder="Chap number..."
                            class="bg-gray-800 w-full  py-1 text-white rounded-full pl-10 border-1 border-slate-500 ">
                        <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                </div>
                <!-- List Chapter -->
                <div class="bg-slate-800/40 saturate-80 rounded h-[89%] text-white">
                    <ul class="divide-y divide-slate-100/10 h-full overflow-y-auto">
                        <li v-for="item in 25" class="flex justify-between ">
                            <span class="m-2 hover:text-sky-600">Chapter 2{{ item + 10 }}: Plan</span>
                            <span class="m-2 hover:text-sky-600">Dec 26, 2024</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Comment -->
            <div class="relative z-10 col-span-3 row-span-1">

            </div>

        </div>
        <div>

        </div>
    </BoxLight>
</template>