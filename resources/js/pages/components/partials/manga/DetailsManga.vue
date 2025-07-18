<script setup>
import SosiaLinks from '../button/SosiaLinks.vue';
</script>
<template>
    <div class="relative z-10 max-w-[100%] min-[1200px]:col-span-3 min-[768px]:col-span-4 min-[768px]:row-span-1 min-[1200px]:row-span-2 ">
        <div class="flex h-[60dvh] flex-col md:flex-row items-start md:items-center  p-4 rounded-lg">
            <div class="w-[20%] h-full">
                <img alt="Cover of Black Clover manga featuring a character with spiky hair and a dragon in the background"
                    class="object-cover w-full h-full rounded-lg" height="225"
                    src="https://static.mangafire.to/2385/i/d/d8/d8fd48b71ebd5f32a2392b5e71eeb3c6.jpg" />
            </div>
            <div class="md:ml-6 w-[70%] mt-4 md:mt-0">
                <h1 class="text-md text-blue-400 tracking-[5px]">
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
                    <i class="fa-solid fa-play text-sm"></i>
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
                <div class="flex items-center space-x-2 max-[1200px]:hidden text-gray-400">
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
</template>