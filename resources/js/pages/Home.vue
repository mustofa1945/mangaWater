<script setup>
import Pagnation from "./components/partials/button/Pagnation.vue";
import SosiaLinks from "./components/partials/button/SosiaLinks.vue";
import CardManga from "./components/partials/card/CardManga.vue";
import CardMostViewed from "./components/partials/card/CardMostViewed.vue";
import CardRecentlyUpdate from "./components/partials/card/CardRecentlyUpdate.vue";
import BoxLight from "./components/ui/BoxLight.vue";
import { dataManga } from "../data/dataManga";
import PagReguler from "./components/partials/button/PagReguler.vue";
import { typeMangaSearch } from "../data/dataSearch";
import MainLayout from "../layout/MainLayout.vue";
import { useSlider, useSliderProgressBar } from "./composable/compoSLider";
import { onMounted, useTemplateRef } from "vue";

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

onMounted(() => {
    setSubElement(sliderBar.value);
    setElement(sliders.value);
});

defineOptions({ layout: MainLayout });
</script>
<template>
    <BoxLight css="10">
        <div>
            <div class="relative flex">
                <div
                    class="flex justify-between items-center gap-x-[23px] overflow-hidden"
                >
                <Link  v-for="manga in dataSlider" href="/manga">
                    <div
                        ref="sliders"
                        :style="{ transform: manga.translateX }"
                        :class="`slider cursor-pointer p-4 rounded-lg border-l-3 opacity-50 ${computedSlider.readProperty.value.transition} ease-in-out group hover:opacity-100 border-sky-400 relative w-[106vh] flex-shrink-0 overflow-hidden bg-slate-800 z-10`"
                    >
                        <CardManga :card="manga" />
                    </div>
                </Link>
                </div>
                <Pagnation @click="prev" position="left-0" title="left" />
                <Pagnation @click="next" position="right-0" title="right" />
            </div>

            <div class="flex flex-col gap-y-2">
                <div
                    class="bg-secondary text-center text-white py-2 rounded-lg my-4"
                >
                    The image loading issue has been fixed, everything is ok
                    now!
                </div>
                <div
                    class="flex flex-col items-center bg-slate-800 py-2 gap-y-2.5"
                >
                    <p class="text-slate-400">
                        If you enjoy the website, please consider sharing it
                        with your friends. Thank you!
                    </p>
                    <div class="text-center gap-y-1">
                        <SosiaLinks />
                    </div>
                </div>
            </div>
        </div>

        <!-- Most View -->
        <div
            class="relative mt-[5vh] px-[10px] flex flex-col gap-y-3 items-left justify-around border-b-1 border-slate-500/50 pb-[7vh]"
        >
            <h1 class="text-[25px] font-bold text-gray-100">Most View</h1>

            <div class="flex items-center gap-x-4 justify-center w-full">
                <CardMostViewed
                    v-for="(manga, index) in dataManga"
                    icon="true"
                    :key="manga.id"
                    width="w-[28vh]"
                    :manga="{
                        title: manga.title,
                        url: manga.url,
                        index: index,
                    }"
                />
            </div>
        </div>
        <span
            class="absolute bottom-[-0.1vh] left-0 w-[30%] h-[1px] bg-sky-700"
        ></span>

        <!-- Recently Update -->

        <!-- Parent Div -->
        <div class="shadow-md rounded-lg p-5">
            <!-- Child Div Pertama -->
            <div class="mb-4 flex justify-between">
                <h1 class="text-2xl text-gray-100 font-bold mb-2">
                    Recently Update
                </h1>
                <div class="flex items-center space-x-2">
                    <!-- Child Div dari Child Div Pertama -->
                    <span
                        class="text-sky-700 hover:text-secondary px-3 py-1 rounded"
                        >All</span
                    >
                    <span
                        v-for="type in typeMangaSearch"
                        class="text-slate-400 hover:text-white/90 px-3 py-1 rounded duration-100"
                        >{{ type }}</span
                    >
                    <PagReguler
                        :options="{ size: 'md', position: 'left' }"
                        position="left"
                        class="w-7"
                    />
                    <PagReguler
                        :options="{ size: 'md', position: 'right' }"
                        position="right"
                        class="w-7"
                    />
                </div>
            </div>
            <div class="flex flex-wrap gap-3">
                <CardRecentlyUpdate
                    v-for="manga in dataManga"
                    :key="manga.id"
                    :manga="{
                        title: manga.title,
                        url: manga.url,
                        date: manga.date,
                        type: manga.type,
                        chapter: manga.chapter,
                        lang: manga.lang,
                    }"
                />
            </div>
        </div>
        <!-- New Release -->

        <div
            class="relative mt-[10vh] px-[10px] flex flex-col gap-y-3 items-left w-full justify-around border-b-1 border-slate-500/50 pb-[10vh]"
        >
            <div class="mb-4 flex justify-between">
                <h1 class="text-2xl text-white/80 font-bold mb-2">
                    Recently Update
                </h1>
                <div class="flex items-center space-x-2">
                    <PagReguler
                        @click="prevSub"
                        :options="{ size: 'md', position: 'left' }"
                        position="left"
                        class="w-7"
                    />
                    <PagReguler
                        @click="nextSub"
                        :options="{ size: 'md', position: 'right' }"
                        position="right"
                        class="w-7"
                    />
                </div>
            </div>

            <div class="flex w-full overflow-hidden gap-x-3 h-full">
                <div
                    ref="sliderBar"
                    :style="{ transform: mangaBar.translateX }"
                    :class="`${computedSliderBar.readPropertyBar.value.transition} ease-in-out`"
                    v-for="mangaBar in dataSubSlider"
                >
                    <CardMostViewed
                        :key="mangaBar.id"
                        width="w-[34vh]"
                        :manga="{
                            title: mangaBar.title,
                            url: mangaBar.url,
                        }"
                    />
                </div>
            </div>
            <div class="flex gap-x-2 w-[40%] mx-auto mt-5">
                <span
                    v-for="bar in instanceBar"
                    :class="`w-1/14 h-[0.3vh] ${bar.color} rounded-full`"
                ></span>
            </div>
        </div>
    </BoxLight>
</template>
