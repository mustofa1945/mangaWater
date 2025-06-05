<script setup>
import MainLayout from '../layout/MainLayout.vue';
import SosiaLinks from './components/partials/button/SosiaLinks.vue';
import BoxLight from './components/ui/BoxLight.vue';

defineOptions({ layout: MainLayout })
</script>
<template>
    <BoxLight css="4">
        <div class="grid grid-cols-4  grid-rows-3 gap-x-3">
            <!-- Details Manga -->
            <div class="max-w-[100%] col-span-3 row-span-1  p-4">
                <div class="flex h-[60vh] flex-col md:flex-row items-start md:items-center bg-gray-800 p-4 rounded-lg">
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
                            <Link href="/read" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            START READING
                            </Link>
                            <button class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
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

            <nav class="flex flex-col  w-[100%] col-span-1 row-span-2 pt-5">
                <div class="flex flex-col text-sm">
                    <span class="text-slate-500">Author : <a href="" class="text-white">Yuuki Tabata</a></span>
                    <span class="text-slate-500">Published : <span class="text-white">February 2015</span></span>
                    <span class="text-slate-500">Genres : <a href="" class="text-white">Comedy</a>,<a class="text-white"
                            href="">Action</a></span>
                    <span class="text-slate-500">Megazines : <a href="" class="text-white">Shounen Jump</a></span>
                </div>
                <div class="mt-10 text-white border-1 border-white/30 p-3 rounded-2xl">
                    <div>
                        <h1 class="text-2xl">8.93 / 10</h1>
                        <p class="text-slate-600">by 1,094 reviews</p>
                    </div>
                    <div>
                        <!-- Star -->
                    </div>
                </div>
                <div class="mt-50 text-white border-1 border-white/30  rounded-2xl flex flex-col h-[20vh]">
                    <div class="flex justify-between items-center h-1/2 border-b-1 border-slate-400 p-3 ">
                        <h1 class="text-2xl text-slate-500">Related Manga</h1>
                        <div class="border-1 border-slate-600 w-[15vh] flex justify-center items-center rounded-2xl">
                            <a href="">More</a>
                            <i class="fa-solid fa-bottom"></i>
                        </div>
                    </div>
                    <h1 class="h-1/2 flex pl-3 items-center w-full bg-slate-700/10 text-slate-500">One puch man
                    </h1>
                </div>

                <div class="bg-gray-800 p-4 rounded-lg mt-10">
                    <h2 class="text-lg font-semibold mb-4 text-white">
                        You may also like
                    </h2>
                    <div class="flex items-center bg-gray-900 p-3 rounded-lg">
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
            <div class="container col-span-3 row-span-1 border-1 border-slate-500 rounded-xl h-full mx-auto p-4">
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center rounded-4xl bg-gray-800 p-2 ">
                        <i class="fas fa-globe mr-2 text-white"></i>
                        <span class="text-white">Language: EN</span>
                    </div>
                    <div class="relative ">
                        <input type="text" placeholder="Chap number..."
                            class="bg-gray-800 p-2 text-white rounded-xl pl-10 border-1 border-slate-500 ">
                        <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                </div>
                <div class="bg-gray-800 p-4 rounded text-white">
                    <ul>
                        <li class="flex justify-between py-2 border-b border-gray-700">
                            <span>Chapter 211: Plan</span>
                            <span>Dec 26, 2024</span>
                        </li>
                        <li class="flex justify-between py-2 border-b border-gray-700">
                            <span>Chapter 210: Recurring</span>
                            <span>Dec 12, 2024</span>
                        </li>
                        <li class="flex justify-between py-2 border-b border-gray-700">
                            <span>Chapter 209: Catch</span>
                            <span>Nov 28, 2024</span>
                        </li>
                        <li class="flex justify-between py-2 border-b border-gray-700">
                            <span>Chapter 208: Perversity</span>
                            <span>Nov 14, 2024</span>
                        </li>
                        <li class="flex justify-between py-2 border-b border-gray-700">
                            <span>Chapter 207: Bind</span>
                            <span>Oct 31, 2024</span>
                        </li>
                        <li class="flex justify-between py-2 border-b border-gray-700">
                            <span>Chapter 206: Special</span>
                            <span>Oct 17, 2024</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Comment -->
            <div class="col-span-3 row-span-1">

            </div>

        </div>
        <div>

        </div>
    </BoxLight>
</template>