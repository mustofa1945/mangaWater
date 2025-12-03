<script setup>
import Pagnation from "./components/partials/button/Pagnation.vue";
import SosiaLinks from "./components/partials/button/SosiaLinks.vue";
import CardManga from "./components/partials/card/CardManga.vue";
import CardMostViewed from "./components/partials/card/CardMostViewed.vue";
import CardRecentlyUpdate from "./components/partials/card/CardRecentlyUpdate.vue";
import BoxLight from "./components/ui/BoxLight.vue";
import PagReguler from "./components/partials/button/PagReguler.vue";
import DefaultLayout from "../layout/DefaultLayout.vue";
import { dataManga } from "../data/dataManga";
import { typeMangaSearch } from "../data/dataSearch";
import { useSlider, useSliderProgressBar } from "./composable/compoSLider";
import { onMounted, toRaw, useTemplateRef, watchEffect , ref} from "vue";
import { useUtils } from "./utils/utilsFunctionStore";

const { dataSlider, next, prev, setElement, computedSlider } = useSlider();

const {
    dataSubSlider,
    setSubElement,
    nextSub,
    prevSub,
    computedSliderBar,
    instanceBar,
} = useSliderProgressBar();


const sliders = useTemplateRef("sliders");

const sliderBar = useTemplateRef("sliderBar");

watchEffect(() => {
    dataSlider.value.forEach((el) => {
        console.log(el);
    });
});

onMounted(() => {
    setSubElement(sliderBar.value);
    setElement(sliders.value);
});

defineOptions({ layout: DefaultLayout });
</script>
<template>
    <BoxLight css="10">
        <div class="border-t-1 border-sky-600 px-4">
            <div class="pt-10 w-full">
                <div class="relative">
                    <div
                        class="overflow-hidden justify-between align-center gap-x-[23px] w-full"
                    >
                        <Link v-for="manga in dataSlider" href="/manga">
                            <div
                                ref="sliders"
                                :style="{ transform: manga.translateX }"
                                :class="[
                                    computedSlider.readProperty.value
                                        .transition,
                                    'home-top-slider group hover:contrast-110 bg-slate-800',
                                ]"
                            >
                                <CardManga :card="manga" />
                            </div>
                        </Link>
                    </div>
                    <Pagnation
                        @click="prev"
                        position="max-[576px]:-left-4 left-0"
                        title="left"
                    />
                    <Pagnation
                        @click="next"
                        position="max-[576px]:-right-4 right-0"
                        title="right"
                    />
                </div>

                <div class="stack gap-y-2">
                    <div
                        class="home-bug-nofification bg-secondary max-[600px]:text-sm"
                    >
                        The image loading issue has been fixed, everything is ok
                        now!
                    </div>
                    <div class="stack items-center bg-slate-800 py-2 gap-y-2.5">
                        <p
                            class="text-slate-400 px-2 text-center max-[576px]:text-sm"
                        >
                            If you enjoy the website, please consider sharing it
                            with your friends. Thank you!
                        </p>
                        <div class="text-center gap-y-1 md:block hidden">
                            <SosiaLinks />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Most View -->
            <div
                class="relative mt-[5dvh] w-full px-[10px] stack gap-y-3 items-left justify-around border-b-1 border-slate-500/50 pb-[7dvh]"
            >
                <div class="flex">
                    <h1
                        class="sm:text-[25px] text-xl font-bold text-gray-100 flex-1"
                    >
                        Most View
                    </h1>
                    <div
                        class="w-1/2 flex justify-end items-center gap-x-2 text-gray-300"
                    >
                        <span>Day</span>
                        <span>Week</span>
                        <span>Month</span>
                    </div>
                </div>

                <div class="align-center gap-x-4 justify-between w-full">
                    <CardMostViewed
                        class="min-[1200px]:w-[13.1%] min-[992px]:w-[15.4%] min-[768px]:w-[19%] min-[664px]:w-[24%] min-[370px]:w-[30%] max-[370px]:w-[49%] max-[992px]:[&:nth-last-child(-n+2)]:hidden max-[768px]:[&:nth-last-child(-n+3)]:hidden max-[664px]:[&:nth-last-child(-n+4)]:hidden max-[370px]:[&:nth-last-child(-n+5)]:hidden max-[1200px]:last:hidden"
                        v-for="(manga, index) in dataManga"
                        icon="true"
                        :key="manga.id"
                        :manga="{
                            title: manga.title,
                            url: manga.url,
                            index: index,
                        }"
                    />
                </div>
            </div>
            <span
                class="absolute bottom-[-0.1dvh] left-0 w-[30%] h-[1px] bg-sky-700"
            ></span>

            <!-- Recently Update -->

            <!-- Parent Div -->
            <div class="shadow-md rounded-lg mt-10">
                <!-- Child Div Pertama -->
                <div
                    class="mb-4 flex max-[576px]:flex-col justify-between max-[576px]:items-left sm:items-center"
                >
                    <h1
                        class="md:text-2xl text-xl max-[576px]:text-lg text-gray-100 max-[576px]:w-full w-[40%] font-bold mb-2"
                    >
                        Recently Update
                    </h1>
                    <div
                        class="align-center sm:flex-1 gap-x-2 sm:justify-end w-full"
                    >
                        <!-- Child Div dari Child Div Pertama -->
                        <span class="text-sky-700 hover:text-secondary"
                            >All</span
                        >
                        <span
                            v-for="type in typeMangaSearch"
                            class="text-slate-400 text-md max-[576px]:text-sm hover:text-white/90 rounded duration-100"
                            >{{ type }}</span
                        >
                        <div
                            class="center gap-x-2 max-[576px]:w-[50%] max-[576px]:justify-end"
                        >
                            <PagReguler
                                :options="{
                                    size: 'micro',
                                    position: 'left',
                                }"
                                position="left"
                                class="w-4 h-[15px]"
                            />
                            <PagReguler
                                :options="{
                                    size: 'micro',
                                    position: 'right',
                                }"
                                position="right"
                                class="w-4 h-[15px]"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap gap-3">
                    <CardRecentlyUpdate
                        v-for="manga in dataManga"
                        :key="manga.id"
                        @select-type="selectTypeMangaById"
                        :typeManga="typeManga"
                        :manga="{
                            idManga : manga.id,
                            title: manga.title,
                            url: manga.url,
                            date: manga.date,
                            type: manga.type,
                            dataActive : manga.dataActive,
                            lang: manga.lang,
                        }"
                    />
                </div>
            </div>
            <!-- New Release -->

            <div
                class="relative mt-[10dvh] px-[10px] stack gap-y-3 items-left w-full justify-around border-b-1 border-slate-500/50 pb-[10dvh]"
            >
                <div class="mb-4 flex justify-between">
                    <h1
                        class="sm:text-2xl text-lg text-white/80 font-bold mb-2"
                    >
                        Manga Release
                    </h1>
                    <div class="align-center space-x-2">
                        <PagReguler
                            @click="prevSub"
                            :options="{ size: 'micro', position: 'left' }"
                            position="left"
                            class="w-4 h-[15px]"
                        />
                        <PagReguler
                            @click="nextSub"
                            :options="{
                                size: 'micro',
                                position: 'right',
                            }"
                            position="right"
                            class="w-4 h-[15px]"
                        />
                    </div>
                </div>

                <div class="flex overflow-hidden gap-x-3 w-full">
                    <div
                        ref="sliderBar"
                        :style="{ transform: mangaBar.translateX }"
                        :class="[
                            computedSliderBar.readPropertyBar.value.transition,
                            'h-full min-[1200px]:w-[13.5%] min-[995px]:w-[15.6%] min-[768px]:w-[18.7%] min-[600px]:w-[23.5%] min-[400px]:w-[31.3%] max-[400px]:w-[49%] ease-in-out flex shrink-0',
                        ]"
                        v-for="mangaBar in dataSubSlider"
                    >
                        <CardMostViewed
                            class="w-full"
                            :key="mangaBar.id"
                            :manga="{
                                title: mangaBar.title,
                                url: mangaBar.url,
                            }"
                        />
                    </div>
                </div>
                <div class="flex gap-x-2 sm:w-[30rem] w-full mx-auto mt-5">
                    <span
                        v-for="bar in instanceBar"
                        :class="[bar.color, 'w-1/14 h-[0.3dvh] rounded-full']"
                    ></span>
                </div>
            </div>
        </div>
    </BoxLight>
</template>
