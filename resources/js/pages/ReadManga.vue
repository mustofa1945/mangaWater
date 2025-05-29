<script setup>
import { defineAsyncComponent, useTemplateRef, watch, computed, nextTick, watchEffect, onMounted } from 'vue';
import { useMangaViewer } from './stores/useMangaViewer';
import { useMangaSize } from './stores/useSizeManga';
import NavReadMenu from './components/ui/NavReadMenu.vue';
import ProgressManga from './components/ui/ProgressManga.vue';
import MangaViewer from './components/ui/MangaViewer.vue';
import { useProgressButton } from './stores/useButtonProgress';
import { useShowClose } from './stores/useShowClose';
import ReadLayout from '../layout/ReadLayout.vue';
import { useAdvanceSetting } from './stores/useAdvanceSetting';
import { useReadingDirec } from './stores/useReadingDirec';
import { useProvideOneUtilsProgressBar } from './utils/oneUtils/oneUtilsProgressBar';
const NextButton = defineAsyncComponent(() => import('./components/partials/button/NextButton.vue'));
const AdvancesSetting = defineAsyncComponent(() => import('./components/ui/AdvancesSetting.vue'))
const ModalError = defineAsyncComponent(() => import('./components/ui/ModalError.vue'))

const { typeMangaViewers: [singlePage, doublePage, longStrip] } = useMangaViewer()
const { instanceProxy, scrollDetectStatus, wacthScroll, nextProgressCLick, prevProgressCLick } = useProgressButton()
const { runProvideClickGiveStatus } = useProvideOneUtilsProgressBar()
const storeMangaSize = useMangaSize()
const storeMangaViewer = useMangaViewer()
const longStripEl = useTemplateRef('itemLongStrip')
const singleEl = useTemplateRef("itemSinglePageSwip")
const { modalError, showOrClose } = useShowClose()
const storeReadingDirec = useReadingDirec()
const { setting, swip } = useAdvanceSetting()
// const pageManga = ref(20)

const scrollElements = computed(() => {
    if (storeMangaViewer.readMangaViewer.id === 3) {
        return longStripEl.value
    }
    if (swip[0].status) {
        return singleEl.value
    }
    return null // supaya watch terpicu saat berubah dari array → null dan sebaliknya
})


watch(() => scrollElements.value, async (val) => {
    await nextTick()
    wacthScroll(val)

})

watch(() => instanceProxy, (newValue) => runProvideClickGiveStatus(30, newValue), { immediate: true, once: true })



defineOptions({ layout: ReadLayout })
</script>
<template>
    <div class="flex w-full relative ">
        <!-- Gambar Manga -->
        <div @scroll="scrollDetectStatus(instanceProxy)"
            :class="`relative w-full flex h-[91.9vh] justify-center items-center ${storeMangaViewer.readMangaViewer.id === 3 ? 'overflow-y-auto' : ''}`">
            <MangaViewer :singlePage="singlePage.status" :doublePage="doublePage.status" :longStrip="longStrip.status">
                <template #singlePage>
                    <div ref="itemSinglePage" v-if="!swip[0].status"
                        :class="`h-${storeMangaSize.getModeSize.height} bg-sky-500 w-${storeMangaSize.getModeSize.width} -z-10 m-auto `">
                    </div>
                    <template v-else>
                        <div ref="itemSinglePageSwip" v-for="item in 30"
                            :class="`h-${storeMangaSize.getModeSize.height} flex-shrink-0 bg-red-900 w-${storeMangaSize.getModeSize.width} mx-80`">
                        </div>
                    </template>
                </template>
                <template #doublePage>
                    <div ref="itemDoublePage" v-for="index in 2"
                        :class="`h-${storeMangaSize.getModeSize.height} bg-sky-500 w-${storeMangaSize.getModeSize.width} -z-10`">
                    </div>
                </template>
                <template #longStrip>
                    <div ref="itemLongStrip" value="30" v-for="el in 30"
                        :class="`h-${storeMangaSize.getModeSize.height} bg-sky-500 w-${storeMangaSize.getModeSize.width}  -z-10`">
                    </div>
                </template>
            </MangaViewer>
        </div>
        <NavReadMenu />

        <div v-if="modalError.status" class="fixed  inset-0 flex items-center justify-center bg-black/50 bg-opacity-10">
            <ModalError @close="showOrClose(modalError)" />
        </div>

        <template v-if="storeMangaViewer.readMangaViewer.id !== 3">
            <template v-for="direc in storeReadingDirec.readingDirec" :key="direc.id">
                <NextButton @click="() => {
                    if (direc.status) {
                        nextProgressCLick()
                    } else {
                        prevProgressCLick()
                    }
                }" :class="`${direc.position} ${modalError.status ? '-z-10' : ''}`" />
            </template>
        </template>

        <ProgressManga />
        <AdvancesSetting v-if="setting.status" />
    </div>
</template>
