<script setup>
//Store
import { useSlidePage } from "../../stores/useSlidePage";
import { useMangaViewer } from "../../stores/useMangaViewer";
import { useMangaSize } from "../../stores/useSizeManga";
import { useProgressButton } from "../../stores/useButtonProgress";
import { useShowClose } from "../../stores/useShowClose";
import { useReadingDirec } from "../../stores/useReadingDirec";
//Components
import BoxIcon from "../partials/box/BoxIcon.vue";
import PagNavMenu from "../partials/button/PagNavMenu.vue";
import PagReguler from "../partials/button/PagReguler.vue";
import PageMenu from "./PageMenu.vue";
import LangNavButton from "../partials/button/LangNavButton.vue";
import { useStoreToDownOrUp } from "../../stores/storeToDownOrUp";
import { useCompoToDownOrUp } from "../../composable/compoUpDownAnim";
import { useCompoUtilsShowDown } from "../../utils/composabeUtils";
import { storeToRefs } from "pinia";
import { useAdvanceSetting } from "../../stores/useAdvanceSetting";

const { nextViewerMode } = useMangaViewer();
const { readMangaViewer } = storeToRefs(useMangaViewer());
const { nextMangaSizeMode } = useMangaSize();
const { readModeSize, readModeStatus } = storeToRefs(useMangaSize());
const { nextPositionMode  , instanceProxy } = useProgressButton();
const { readTypePosition } = storeToRefs(useProgressButton());
const { nextReadingDirecMode } = useReadingDirec();
const { readDirec } = storeToRefs(useReadingDirec());
const {
    showOrHidden,
    createShowCloseComputedGroup,
    navReadMenu,
    comment,
    header,
} = useShowClose();
const { onMenu } = storeToRefs(useShowClose());
const { readNavReadMenu, readComment, readHeader } =
    createShowCloseComputedGroup();
const { pages, showPage } = useSlidePage();
const { stateShowDown } = useStoreToDownOrUp();
const { modalError, readStyleError, modalSetting, readStyleSetting } =
    storeToRefs(useStoreToDownOrUp());
const { compuToDownOrUp, selectLangById } = useCompoToDownOrUp();
const { showDown } = useCompoUtilsShowDown();
const { swip } = useAdvanceSetting();
</script>

<template>
    <div
        :class="[
            readNavReadMenu.instanceParent,
            'h-full duration-250 transition-all max-[1200px]:fixed  right-0 top-0 z-30',
        ]"
    >
        <div
            v-showAndClose="readNavReadMenu.delayEffect"
            :class="`Navread-menu  py-2 pb-5 hidden px-5 h-full w-full bg-slate-900  flex-col gap-y-2 transition-all duration-250 text-white/90 overflow-y-auto overflow-hidden `"
        >
            <!-- Title -->
            <div class="flex justify-between items-center gap-x-2">
                <h1 class="text-md font-semibold">
                    The Seven Deadly Sins: Four Knights of the Apocalypse
                </h1>
                <PagReguler
                    @click="showOrHidden(navReadMenu, readNavReadMenu, pages)"
                    :options="{
                        size: 'text-md',
                        position: 'fas fa-chevron-right',
                    }"
                    class="bg-slate-800/80 p-2 h-[4dvh] w-[5dvh]"
                />
            </div>
            <!-- Slide -->
            <div
                class="bg-slate-800/70 group flex items-center rounded-lg p-3 hover:backdrop-brightness-300"
            >
                <div class="flex w-[75%] flex-col">
                    <p class="text-md text-gray-400">you are reading</p>
                    <span class="text-lg text-sky-400">by chapter</span>
                </div>
                <div
                    class="w-[25%] flex justify-center items-center hover:backdrop-brightness-300"
                >
                    <i
                        class="fas text-2xl group-hover:rotate-[360deg] group-hover:scale-130 transition-all duration-1000 fa-sync-alt text-gray-400"
                    ></i>
                </div>
            </div>
            <div
                class="bg-slate-800/70 flex relative rounded-lg p-3 justify-center items-center cursor-pointer"
            >
                <div
                    @click="
                        showDown(
                            compuToDownOrUp.readDropLangs.value,
                            compuToDownOrUp.readStyleDropLangs.value
                        )
                    "
                    class="relative flex items-center justify-center w-full"
                >
                    <span class="text-md text-gray-400 font-thin"
                        >Language:</span
                    >
                    <span class="text-md pl-1 text-white">{{
                        compuToDownOrUp.readLangByStatus.value.lang
                    }}</span>
                </div>
                <!-- List Bahasa -->
                <div
                    v-if="compuToDownOrUp.readDropLangs.value.status"
                    :class="[
                        compuToDownOrUp.readStyleDropLangs.value.style,
                        'w-full flex flex-col absolute left-0 top-13 border-1 border-blue-600/30 origin-top bg-slate-800 z-10 rounded-lg  overflow-hidden',
                    ]"
                >
                    <LangNavButton
                        @click="
                            selectLangById(
                                compuToDownOrUp.readDropLangs.value.language,
                                lang.id
                            )
                        "
                        v-for="lang in compuToDownOrUp.readDropLangs.value
                            .language"
                        :key="lang.id"
                        :title="lang.lang"
                        :url="lang.url"
                        :class="`w-full h-[5dvh] px-3 z-20  ${lang.style}`"
                    />
                </div>
            </div>
            <PagNavMenu />
            <div
                class="flex flex-col gap-y-2 relative text-gray-300/80 font-thin"
            >
                <BoxIcon
                    @click="showOrHidden(comment, readComment)"
                    :options="{
                        title: 'Chapter 1 Comment',
                        icon: 'fas fa-comment-alt',
                        reverse: true,
                    }"
                    class="w-full h-13 px-3 max-[576px]:hidden flex bg-slate-800 rounded-xl cursor-pointer"
                />
                <BoxIcon
                    :options="{
                        title: 'Bookmark',
                        icon: 'fas fa-bookmark',
                        reverse: true,
                    }"
                    class="w-full h-13 px-3 bg-slate-800 rounded-xl cursor-pointer"
                />
                <BoxIcon
                    :options="{
                        title: 'Manga Detail',
                        icon: 'fas fa-info-circle',
                        reverse: true,
                    }"
                    class="w-full h-13 px-3 bg-slate-800 rounded-xl cursor-pointer"
                />
                <BoxIcon
                    @click="stateShowDown(modalError, readStyleError)"
                    :options="{
                        title: 'Report Error',
                        icon: 'fas fa-exclamation-triangle',
                        reverse: true,
                    }"
                    class="w-full h-13 px-3 bg-slate-800 rounded-xl cursor-pointer"
                />
            </div>
            <div class="flex flex-col gap-y-2 mt-7 text-gray-300/80 font-thin">
                <BoxIcon
                    @click="showOrHidden(header, readHeader)"
                    :options="{
                        title: readHeader.title,
                        icon: 'fa-solid fa-note-sticky',
                        reverse: false,
                    }"
                    class="w-full h-13 px-3 max-[576px]:hidden flex bg-slate-800 rounded-xl cursor-pointer"
                />
                <BoxIcon
                    @click="nextViewerMode()"
                    :options="{
                        title: readMangaViewer.title,
                        icon: readMangaViewer.icon,
                        reverse: false,
                    }"
                    class="w-full h-13 px-3 bg-slate-800 rounded-xl cursor-pointer"
                />
                <BoxIcon
                    @click="nextMangaSizeMode(readModeStatus)"
                    :options="{
                        title: readModeSize.name,
                        icon: readModeSize.icon,
                        reverse: false,
                    }"
                    class="w-full h-13 px-3 bg-slate-800 rounded-xl cursor-pointer"
                />
                <BoxIcon
                    @click="nextReadingDirecMode(swip[0] , instanceProxy )"
                    :options="{
                        title: `${readDirec.title}`,
                        icon: 'fas fa-exclamation-triangle',
                        reverse: false,
                    }"
                    class="w-full h-13 px-3 bg-slate-800 rounded-xl cursor-pointer"
                />
                <BoxIcon
                    @click="nextPositionMode(readTypePosition, readMangaViewer)"
                    :options="{
                        title: `Bottom Progress ${readTypePosition.position}`,
                        icon: 'fas fa-info-circle',
                        reverse: false,
                    }"
                    class="w-full h-13 px-3 bg-slate-800 rounded-xl cursor-pointer"
                />
                <BoxIcon
                    @click="stateShowDown(modalSetting, readStyleSetting)"
                    :options="{
                        title: 'Advanced Settings',
                        icon: 'fas fa-exclamation-triangle',
                        reverse: false,
                    }"
                    class="w-full h-13 px-3 bg-slate-800 rounded-xl cursor-pointer"
                />
            </div>
            <!-- Simpan Transform dalam tag yang tidak mengalami DOM Supaya tidak terjadi bug new stacking context -->
        </div>
        <div class="fixed top-13 z-50">
            <PageMenu
                v-if="onMenu"
                v-for="page in pages"
                :page="page.status"
                class="w-[21.1rem]"
                @slidePage="showPage(page.id)"
                :input="page.input"
                :display="page.display"
            />
        </div>
    </div>
</template>
