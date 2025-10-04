<script setup>
import { defineAsyncComponent, useTemplateRef, watchEffect } from "vue";
// Stores
import { useMangaViewer } from "./stores/useMangaViewer";
import { useMangaSize } from "./stores/useSizeManga";
import { useProgressButton } from "./stores/useButtonProgress";
import { useAdvanceSetting } from "./stores/useAdvanceSetting";
import { useReadingDirec } from "./stores/useReadingDirec";

//Composables
import { useCompoReadManga } from "./composable/composableReadManga";
// Components
import ProgressManga from "./components/ui/ProgressManga.vue";
import MangaViewer from "./components/ui/MangaViewer.vue";
const NextButton = defineAsyncComponent(() =>
    import("./components/partials/button/NextButton.vue")
);
// Layout
import ReadLayout from "../layout/ReadLayout.vue";

const { computedMangaSize } = useMangaSize();
const { computedViewer } = useMangaViewer();
const storeReadingDirec = useReadingDirec();
const {
    typeMangaViewers: [singlePage, doublePage, longStrip],
} = useMangaViewer();
const { nextProgressCLick, prevProgressCLick, computedProgressBar } =
    useProgressButton();
const { swip } = useAdvanceSetting();
const longStripEl = useTemplateRef("itemLongStrip");
const singleEl = useTemplateRef("itemSinglePageSwip");
// const pageManga = ref(20)
useCompoReadManga(longStripEl, singleEl);

defineOptions({ layout: ReadLayout });
</script>
<template>
    <!-- Gambar Manga -->
    <div
        :class="`Instance-scroll full-size align-center justify-center `"
    >
        <MangaViewer
            :singlePage="singlePage.status"
            :doublePage="doublePage.status"
            :longStrip="longStrip.status"
        >
            <template #singlePage>
                <div
                    ref="itemSinglePage"
                    v-if="!swip[0].status"
                    :class="[
                        computedMangaSize.readModeSize.height,
                        computedMangaSize.readModeSize.width,
                        'border-green-400 bg-sky-500  z-10 mx-auto flex justify-center items-center text-4xl',
                    ]"
                >
                    {{ computedProgressBar.readPage }}
                </div>
                <template v-else>
                    <div
                        ref="itemSinglePageSwip"
                        v-for="item in 30"
                        :class="[
                            computedMangaSize.readModeSize.height,
                            computedMangaSize.readModeSize.width,
                            'shrink-0 bg-red-900  mx-80 flex justify-center items-center text-4xl',
                        ]"
                    >
                        {{ item }}
                    </div>
                </template>
            </template>
            <template #doublePage>
                <div
                    ref="itemDoublePage"
                    v-for="index in 2"
                    :class="[computedMangaSize.readModeSize.height , computedMangaSize.readModeSize.width , 'bg-sky-500  z-10 flex justify-center items-center text-4xl']"
                >
                    {{ computedProgressBar.readPage }}
                </div>
            </template>
            <template #longStrip>
                <div
                    ref="itemLongStrip"
                    value="30"
                    v-for="el in 30"
                    :class="[
                        computedMangaSize.readModeSize.height,
                        computedMangaSize.readModeSize.width,
                        'shrink-0 bg-sky-500 flex justify-center items-center text-4xl',
                    ]"
                >
                    {{ el }}
                </div>
            </template>
        </MangaViewer>
        <template v-if="computedViewer.readMangaViewer.id !== 3">
            <template
                v-for="direc in storeReadingDirec.readingDirec"
                :key="direc.id"
            >
                <NextButton
                    @click="
                        () => {
                            if (direc.status) {
                                nextProgressCLick();
                            } else {
                                prevProgressCLick();
                            }
                        }
                    "
                    :class="[direc.position, 'z-2']"
                />
            </template>
        </template>
    </div>
    <ProgressManga />
    <!-- Supaya scroll Tidak Terlihat -->
    <!-- <div class="h-full w-[3dvh] absolute right-0 top-0  bg-slate-800"></div> -->
</template>
