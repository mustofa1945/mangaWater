<script setup>
import { computed, ref } from "vue";
import { useUtils } from "./utils/utilsFunctionStore";
import { useCompoStar } from "./composable/compoStar";
import DefaultLayout from "../layout/DefaultLayout.vue";
import BoxLight from "./components/ui/BoxLight.vue";
import DetailsManga from "./components/partials/manga/DetailsManga.vue";
import NavManga from "./components/partials/manga/NavManga.vue";
import Chapter from "./components/ui/Chapter.vue";
import Volume from "./components/ui/Volume.vue";
import LangNavButton from "./components/partials/button/LangNavButton.vue";
import { langsWithChapter } from "../data/dataManga";

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

const { findByStatus, selectById } = useUtils();

const getActiveStatus = computed(() => findByStatus(typeManga.value));

const selectTypeMangaById = (id) => 
    selectById(typeManga.value, id, "bg-sky-600", "hover:bg-gray-300/20");

console.log(langsWithChapter);

const { onOverHoverStar, dataStar, grade, scor } = useCompoStar();

defineOptions({ layout: DefaultLayout });
</script>
<template>
    <BoxLight class="p-4">
        <div
            class="relative z-10 w-full grid grid-cols-4 xl:grid-rows-9 bg-gray-800/20 gap-5 saturate-80"
        >
            <div
                class="absolute top-0 full-size blur-md opacity-10 z-0 saturate-80"
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
            <DetailsManga />

            <div
                class="flex relative z-10 xl:flex-col max-[768px]:flex-col max-[1200px]:mb-7 max-[768px]:mb-0 justify-between w-full xl:col-span-1 max-[1200px]:col-span-4 xl:row-span-2 md:row-span-1"
            >
                <div
                    class="stack text-sm max-[1200px]:w-1/2 max-[768px]:w-full max-[1200px]:justify-center max-[1200px]:h-full"
                >
                    <span class="manga-desc-text"
                        >Author :
                        <a href="" class="manga-text-hover-blue"
                            >Yuuki Tabata</a
                        ></span
                    >
                    <span
                        class="text-slate-500 text-[16.5px] max-[768px]:text-sm"
                        >Published :
                        <span class="manga-text-hover-blue"
                            >February 2015</span
                        ></span
                    >
                    <span class="manga-desc-text"
                        >Genres :
                        <a href="" class="manga-text-hover-blue">Comedy</a>,<a
                            class="manga-text-hover-blue"
                            href=""
                            >Action</a
                        ></span
                    >
                    <span class="manga-desc-text"
                        >Megazines :
                        <a href="" class="manga-text-hover-blue"
                            >Shounen Jump</a
                        ></span
                    >
                </div>

                <div
                    class="xl:h-1/2 h-full max-[1200px]:w-1/2 max-[768px]:w-full flex max-[1200px]:justify-end items-center"
                >
                    <div
                        class="center mt-10 h-[5rem] w-full text-white bg-slate-900 border-1 p-1 border-white/30 rounded-2xl gap-x-2"
                    >
                        <div class="pl-2 w-[45%]">
                            <h1 class="text-xl">{{ scor }} / 10</h1>
                            <p class="text-slate-600 text-sm">{{ grade }}</p>
                        </div>
                        <div
                            class="flex-1 h-full flex relative justify-end pr-2 items-center gap-2"
                        >
                            <i
                                v-for="star in dataStar"
                                @mouseover="onOverHoverStar(star.id)"
                                :class="[
                                    star.icon,
                                    star.scale,
                                    'fa-star text-lg  font-bold text-yellow-300 manga-smooth-transition',
                                ]"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chap -->
            <div
                class="stack relative z-10 max-w-[100%] min-[1200px]:col-span-3 max-[1200px]:col-span-4 row-span-2"
            >
                <!-- TYPE -->
                <div
                    class="border-slate-300/40 border-1 max-[768px]:self-center self-end flex h-[2.5rem] w-[13rem] rounded-t-lg -z-10 overflow-hidden"
                >
                    <div
                        v-for="type in typeManga"
                        @click="() => selectTypeMangaById(type.id)"
                        :class="[
                            type.property,
                            'flex justify-center items-center h-full w-1/2 text-sm text-white tracking-widest manga-smooth-transition',
                        ]"
                    >
                        {{ type.title }}
                    </div>
                </div>
                <div
                    class="align-center justify-between bg-slate-900 p-3 flex-1"
                >
                    <div click=""
                        class="align-center relative rounded-4xl bg-gray-800 py-1.5 px-4 hover:contrast-70 duration-150 transition-all"
                    >
                        <i class="fas fa-globe mr-2 manga-caption-text"></i>
                        <span class="manga-caption-text max-[768px]:hidden"
                            >Language: EN</span
                        >
                        <span class="manga-caption-text md:hidden">Lang :</span>
                        <!-- <LangNavButton
                        @click=""
                        v-for="lang in compuToDownOrUp.readDropLangs.value
                            .language"
                        :key="lang.id"
                        :title="lang.lang"
                        :url="lang.url"
                        :class="`w-full h-[5dvh] px-3 z-20  ${lang.style}`"
                    /> -->
                    </div>
                    <div class="relative w-[9rem]">
                        <input
                            type="text"
                            placeholder="Chap number..."
                            class="bg-gray-800 w-full text-sm py-1 text-white rounded-full pl-10 border-1 border-slate-500"
                        />
                        <i
                            class="fas fa-search text-sm absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        ></i>
                    </div>
                </div>
                <!-- List Chapter -->
                <Chapter v-if="1 === getActiveStatus.id" />
                <Volume v-if="2 === getActiveStatus.id" />
            </div>

            <NavManga class="" />

            <!-- Comment -->
            <div
                class="relative z-10 w-full min-[1200px]:h-[35%] p-2 max-[1200px]:col-span-4 border-1 border-slate-600/20 min-[1200px]:col-span-3 min-[1200px]:row-span-4"
            >
                <h1 class="text-xl text-gray-300">Comment</h1>
            </div>
        </div>
    </BoxLight>
</template>
