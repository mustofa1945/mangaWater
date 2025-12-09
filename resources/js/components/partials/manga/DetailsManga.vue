<script setup>
import SosiaLinks from "../button/SosiaLinks.vue";
import ButtonRead from "../button/ButtonRead.vue";
import ButtonReadMobile from "../../../mobile/components/ButtonReadMobile.vue";
</script>
<template>
    <div
        class="relative z-10 max-w-[100%]  overflow-hidden  min-[1200px]:col-span-3 max-[1200px]:col-span-4 max-[1200px]:row-span-1 min-[1200px]:row-span-2"
    >
        <div
            class="flex min-[768px]:h-[20rem] min-[1200px]:h-[18rem] flex-col max-[768px]:items-center min-[768px]:flex-row p-4 rounded-lg"
        >
            <div class="w-[10rem] h-full">
                <img
                    alt="Cover of Black Clover manga featuring a character with spiky hair and a dragon in the background"
                    class="object-cover w-full h-full rounded-lg"
                    height="225"
                    src="https://static.mangafire.to/2385/i/d/d8/d8fd48b71ebd5f32a2392b5e71eeb3c6.jpg"
                />
            </div>
            <div
                class="md:ml-6 min-[768px]:w-[80%] max-[768px]:w-full max-[768px]:flex max-[768px]:flex-col items-center max-[768px]:mt-4"
            >
                <h1 class="text-sm text-blue-400 tracking-[5px]">RELEASING</h1>
                <h1 class="text-2xl text-white font-bold">Black Clover</h1>
                <h1 class="text-gray-400 mb-4 text-sm">Black Clover; 블랙 클로버</h1>
                <ButtonRead />
                <ButtonReadMobile />
                <div class="text-gray-400 mb-4 flex gap-x-2 items-baseline">
                    <span class="text-sm text-slate-400"> Manga </span>
                    <i class="fa-solid fa-tag"></i>
                    <span class="text-sm"> 23,595 </span>

                    <span class="text-sm"> 7.86 MAL by 98,383 users </span>
                </div>
                <div class="flex flex-col max-[768px]:items-center">
                    <p class="text-gray-300 text-sm max-[768px]:text-center">
                        Asta, a boisterous orphan with no magical abilities,
                        yearns to become the Wizard King of the Clover Kingdom,
                        a title reserved for the most powerful ma...
                    </p>
                    <span
                        class="text-white/20  hover:text-white duration-200 border-b-1 w-[6rem] border-sky-500 text-md"
                    >
                        Read more +
                    </span>
                </div>

                <div
                    class="flex items-center space-x-2 max-[1200px]:hidden text-gray-400"
                >
                    <span class="text-sm"> 135 Shares </span>
                    <div class="w-full">
                        <SosiaLinks width="15" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
