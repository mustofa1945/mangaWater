<script setup>
import BoxIcon from '../partials/box/BoxIcon.vue';
import PagNavMenu from '../partials/button/PagNavMenu.vue';
import PagReguler from '../partials/button/PagReguler.vue';
import PageMenu from './PageMenu.vue';
import { useSlidePageNav } from '../../stores/useSlidePageNav';
import { useSlidePage } from '../../stores/useSlidePage';
import { langs } from '../../../data/dataManga';
import LangNavButton from '../partials/button/LangNavButton.vue';
import { useMangaViewer } from '../../stores/useMangaViewer';
import { useMangaSize } from '../../stores/useSizeManga';
import { useProgressButton } from '../../stores/useButtonProgress';
import { useShowClose } from '../../stores/useShowClose';
import { useReadingDirec } from '../../stores/useReadingDirec';
import { useAdvanceSetting } from '../../stores/useAdvanceSetting';
import { watchEffect, watch } from 'vue';

const { getNav: { readOnly: nav }, showNav, showComment, headerUp } = useSlidePageNav()
const { pages, showPage } = useSlidePage()
const storeMangaViewer = useMangaViewer()
const storeMangaSize = useMangaSize()
const storeProgressBar = useProgressButton()
const storeReadingDirec = useReadingDirec()
const { showAndUpdate } = useAdvanceSetting()
const { modalError, showOrClose, langActive } = useShowClose()

</script>

<template>
    <div
        :class="`w-${nav.width} ${nav.display} py-2 px-5 box-border bg-slate-900 fixed right-0 top-0 flex-col gap-y-2 transition-all duration-250 text-white/90 overflow-y-auto overflow-hidden max-h-screen`">
        <!-- Title -->
        <div class="flex justify-between items-center gap-x-2">
            <h1 class="text-md font-semibold  ">The Seven Deadly Sins: Four Knights of the Apocalypse</h1>
            <PagReguler @click="showNav(pages)" :options="{ size: 'md', position: 'right' }"
                class="bg-slate-500 h-[4vh] w-[5vh] " />
        </div>
        <!-- Slide -->
        <div class="bg-slate-800/70 flex rounded-lg p-3 hover:brightness-115">
            <div class="flex w-[75%] flex-col ">
                <p class="text-md text-gray-400">you are reading</p>
                <span class="text-lg text-sky-400">by chapter</span>
            </div>
            <div class="w-[25%] h-full flex justify-center items-center hover:brightness-115">

                <i class="fas text-2xl fa-sync-alt text-gray-400 "></i>
            </div>
        </div>
        <div class="bg-slate-800/70 flex  relative rounded-lg p-3  justify-center items-center">
            <div @click="showOrClose(langActive)"
                class="relative flex items-center justify-center w-full hover:brightness-115">
                <span class="text-md text-gray-400">Language:</span>
                <span class="text-md  pl-1">English</span>
            </div>
            <!-- List Bahasa -->
            <div
                :class="`w-full flex flex-col absolute left-0 top-13 origin-top bg-slate-800/70 rounded-lg h-${langActive.status ? '42' : '0'} duration-200 transition-all overflow-hidden`">
                <LangNavButton v-for="lang in langs" :key="lang.id" :title="lang.lang" :url="lang.url"
                    class="w-full h-[5vh] px-3  z-20 rounded-lg " />
            </div>
        </div>
        <PagNavMenu />
        <div class="flex flex-col gap-y-2 relative">
            <BoxIcon @click="showComment()"
                :options="{ title: 'Chapter 1 Comment', icon: 'fas fa-comment-alt', reverse: true }"
                class="w-full h-[7vh] px-3 bg-slate-800 rounded-xl" />
            <BoxIcon :options="{ title: 'Bookmark', icon: 'fas fa-bookmark', reverse: true }"
                class="w-full h-[7vh] px-3  bg-slate-800 rounded-xl " />
            <BoxIcon :options="{ title: 'Manga Detail', icon: 'fas fa-info-circle', reverse: true }"
                class="w-full h-[7vh] px-3  bg-slate-800 rounded-xl " />
            <BoxIcon @click="showOrClose(modalError)"
                :options="{ title: 'Report Error', icon: 'fas fa-exclamation-triangle', reverse: true }"
                class="w-full h-[7vh] px-3  bg-slate-800 rounded-xl " />
        </div>
        <div class="flex flex-col gap-y-2 mt-7">
            <BoxIcon @click="headerUp()"
                :options="{ title: 'Header Hidden', icon: 'fas fa-comment-alt', reverse: false }"
                class="w-full h-[7vh] px-3  bg-slate-800 rounded-xl " />
            <BoxIcon @click="storeMangaViewer.changeTypeViewer()"
                :options="{ title: storeMangaViewer.readMangaViewer.title, icon: storeMangaViewer.readMangaViewer.icon, reverse: false }"
                class="w-full h-[7vh] px-3  bg-slate-800 rounded-xl" />
            <BoxIcon
                @click="storeMangaSize.changeSizeType(storeMangaSize.getModeStatus, storeMangaSize.getModeSize, storeMangaViewer.readMangaViewer)"
                :options="{ title: storeMangaSize.getModeSize.name, icon: storeMangaSize.getModeSize.icon, reverse: false }"
                class="w-full h-[7vh] px-3  bg-slate-800 rounded-xl " />
            <BoxIcon @click="storeReadingDirec.applySwicthActive()"
                :options="{ title: `${storeReadingDirec.readDirec.title}`, icon: 'fas fa-exclamation-triangle', reverse: false }"
                class="w-full h-[7vh] px-3  bg-slate-800 rounded-xl" />
            <BoxIcon
                @click="storeProgressBar.choiseTypePosition(storeProgressBar.getType, storeMangaViewer.readMangaViewer)"
                :options="{ title: `Bottom Progress ${storeProgressBar.getType.position}`, icon: 'fas fa-info-circle', reverse: false }"
                class="w-full h-[7vh] px-3  bg-slate-800 rounded-xl" />
            <BoxIcon @click="showAndUpdate()"
                :options="{ title: 'Advanced Settings', icon: 'fas fa-exclamation-triangle', reverse: false }"
                class="w-full h-[7vh] px-3  bg-slate-800 rounded-xl" />
        </div>
        <PageMenu v-if="false" v-for="page in pages" :page="page.status" class="w-full top-13 "
            @slidePage="showPage(page.id)" :input="page.input" :display="page.display" />
    </div>
</template>
