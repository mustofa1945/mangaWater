<script setup>
import MainLayout from "../layout/MainLayout.vue";
import BoxLight from "./components/ui/BoxLight.vue";
import DetailsManga from "./components/partials/manga/DetailsManga.vue";
import NavManga from "./components/partials/manga/NavManga.vue";
import { computed, ref } from "vue";
import Chapter from "./components/ui/Chapter.vue";
import Volume from "./components/ui/Volume.vue";
import { useUtils } from "./utils/utilsFunctionStore";
import { useCompoStar } from "./composable/compoStar";

const typeManga = ref([
    {
        id: 1,
        status: true,
        title: "CHAPTER",
        property: "bg-sky-600",
    },
    {
        id: 2,
        status: false,
        title: "VOLUME",
        property: "hover:bg-gray-300",
    },
]);

const { findByStatus } = useUtils();

const getActiveStatus = computed(() => findByStatus(typeManga.value));

const selectTypeMangaById = (id) => {
    typeManga.value.forEach((el) => {
        if (id === el.id) {
            el.status = true;
            el.property = "bg-sky-600";
        } else {
            el.status = false;
            el.property = "hover:bg-gray-300/20";
        }
    });
};

const { onOverHoverStar, dataStar, grade, scor } = useCompoStar();

defineOptions({ layout: MainLayout });
</script>
<template>
    <BoxLight class="p-4">
        <div
            class="relative z-10 w-full grid grid-cols-4 min-[1200px]:grid-rows-9   bg-gray-800/20 gap-5 saturate-80"
        >
            <div
                class="absolute top-0 h-full w-full blur-md opacity-10 z-0 saturate-80"
            >
                <img
                    alt="Background image with various manga characters"
                    class="w-full h-1/2 object-cover"
                    height="1080"
                    src="https://mangafire.to/assets/t2/s1/images/index.jpg"
                    width="1920"
                />
            </div>
            <!-- Details Manga -->
            <DetailsManga/>

            <div
                class="flex relative z-10 min-[1200px]:flex-col max-[1200px]:mb-7  justify-between w-full min-[1200px]:col-span-1 min-[768px]:col-span-4 min-[1200px]:row-span-2 min-[768px]:row-span-1"
            >
                <div class="flex flex-col text-sm  max-[1200px]:w-1/2 max-[1200px]:justify-center max-[1200px]:h-full">
                    <span class="text-slate-500 text-[16.5px]"
                        >Author :
                        <a
                            href=""
                            class="text-white hover:text-sky-600 duration-150 transition-all"
                            >Yuuki Tabata</a
                        ></span
                    >
                    <span class="text-slate-500 text-[16.5px]"
                        >Published :
                        <span
                            class="text-white hover:text-sky-600 duration-150 transition-all"
                            >February 2015</span
                        ></span
                    >
                    <span class="text-slate-500 text-[16.5px]"
                        >Genres :
                        <a
                            href=""
                            class="text-white hover:text-sky-600 duration-150 transition-all"
                            >Comedy</a
                        >,<a
                            class="text-white hover:text-sky-600 duration-150 transition-all"
                            href=""
                            >Action</a
                        ></span
                    >
                    <span class="text-slate-500 text-[16.5px]"
                        >Megazines :
                        <a
                            href=""
                            class="text-white hover:text-sky-600 duration-150 transition-all"
                            >Shounen Jump</a
                        ></span
                    >
                </div>
                 
                <div class="min-[1200px]:h-1/2 h-full max-[1200px]:w-1/2 flex max-[1200px]:justify-end items-center">
                    <div
                        class="mt-10 h-[12dvh] w-[15rem] text-white bg-slate-900 border-1 p-1 border-white/30 rounded-2xl flex gap-x-2 items-center justify-center"
                    >
                        <div class="pl-2 w-[45%]">
                            <h1 class="text-2xl">{{ scor }} / 10</h1>
                            <p class="text-slate-600">{{ grade }}</p>
                        </div>
                        <div
                            class="flex-1 h-full flex relative justify-center items-center gap-2"
                        >
                            <i
                                v-for="star in dataStar"
                                @mouseover="onOverHoverStar(star.id)"
                                :class="`${star.icon} ${star.scale} fa-star text-lg  font-bold text-yellow-300 transition-all duration-200`"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chap -->
            <div
                class="container relative z-10 max-w-[100%] min-[1200px]:col-span-3 min-[768px]:col-span-4 row-span-2 border-1 border-red-500"
            >
                <!-- TYPE -->
                <div
                    class="absolute right-0 -top-[2.3rem] border-slate-300/40 border-1 flex h-[3rem] w-[15rem] rounded-lg -z-10 overflow-hidden"
                >
                    <div
                        v-for="type in typeManga"
                        @click="() => selectTypeMangaById(type.id)"
                        :class="`h-full w-1/2 flex justify-center items-center text-white ${type.property} tracking-widest transition-all duration-200`"
                    >
                        {{ type.title }}
                    </div>
                </div>
                <div
                    class="flex justify-between items-center bg-slate-900 p-3 flex-1"
                >
                    <div
                        class="flex items-center rounded-4xl bg-gray-800 py-1.5 px-4 hover:contrast-70 duration-150 transition-all"
                    >
                        <i class="fas fa-globe mr-2 text-gray-400"></i>
                        <span class="text-gray-400">Language: EN</span>
                    </div>
                    <div class="relative w-[30dvh]">
                        <input
                            type="text"
                            placeholder="Chap number..."
                            class="bg-gray-800 w-full py-1 text-white rounded-full pl-10 border-1 border-slate-500"
                        />
                        <i
                            class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        ></i>
                    </div>
                </div>
                <!-- List Chapter -->
                <Chapter v-if="1 === getActiveStatus.id" />
                <Volume v-if="2 === getActiveStatus.id" />
            </div>

            <NavManga class="border-1 border-red-500" />

            <!-- Comment -->
            <div
                class="relative z-10 w-full h-[35%] p-2 border-1 border-slate-600/20 col-span-3 row-span-4"
            >
                <h1 class="text-xl text-gray-300">Comment</h1>
            </div>
        </div>
        <div></div>
    </BoxLight>
</template>
