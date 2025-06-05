    <script setup>
    import { defineAsyncComponent, useTemplateRef, watchEffect } from 'vue';
    // Stores
    import { useMangaViewer } from './stores/useMangaViewer';
    import { useMangaSize } from './stores/useSizeManga';
    import { useProgressButton } from './stores/useButtonProgress';
    import { useShowClose } from './stores/useShowClose';
    import { useAdvanceSetting } from './stores/useAdvanceSetting';
    import { useReadingDirec } from './stores/useReadingDirec';

    //Composables
    import { useCompoReadManga } from './composable/composableReadManga';
    // Components
    import ProgressManga from './components/ui/ProgressManga.vue';
    import MangaViewer from './components/ui/MangaViewer.vue';
    const NextButton = defineAsyncComponent(() => import('./components/partials/button/NextButton.vue'));
    const AdvancesSetting = defineAsyncComponent(() => import('./components/ui/AdvancesSetting.vue'));
    // Layout
    import ReadLayout from '../layout/ReadLayout.vue';

    const { computedMangaSize } = useMangaSize()
    const { computedViewer } = useMangaViewer()
    const storeReadingDirec = useReadingDirec()
    const { typeMangaViewers: [singlePage, doublePage, longStrip] } = useMangaViewer()
    const { instanceProxy, scrollDetectStatus, nextProgressCLick, prevProgressCLick } = useProgressButton()
    const { swip } = useAdvanceSetting()
    const longStripEl = useTemplateRef('itemLongStrip')
    const singleEl = useTemplateRef("itemSinglePageSwip")
    // const pageManga = ref(20)
    useCompoReadManga(longStripEl, singleEl)

    defineOptions({ layout: ReadLayout })
</script>
    <template>
        <div class="w-full h-full">
            <!-- Gambar Manga -->
            <div @scroll="scrollDetectStatus(instanceProxy)"
                :class="`Instance-scroll   h-full w-full flex  items-center `">
                <MangaViewer :singlePage="singlePage.status" :doublePage="doublePage.status"
                    :longStrip="longStrip.status">
                    <template #singlePage>
                        <div ref="itemSinglePage" v-if="!swip[0].status"
                            :class="`h-${computedMangaSize.readModeSize.height} bg-sky-500 w-${computedMangaSize.readModeSize.width} z-10 m-auto `">
                        </div>
                        <template v-else>
                            <div ref="itemSinglePageSwip" v-for="item in 30"
                                :class="`h-${computedMangaSize.readModeSize.height} flex-shrink-0 bg-red-900 w-${computedMangaSize.readModeSize.width} mx-80`">
                            </div>
                        </template>
                    </template>
                    <template #doublePage>
                        <div ref="itemDoublePage" v-for="index in 2"
                            :class="`h-${computedMangaSize.readModeSize.height} bg-sky-500  w-${computedMangaSize.readModeSize.width} z-10`">
                        </div>
                    </template>
                    <template #longStrip>
                        <div ref="itemLongStrip" value="30" v-for="el in 30"
                            :class="`h-${computedMangaSize.readModeSize.height} bg-sky-500 w-${computedMangaSize.readModeSize.width} `">
                        </div>
                    </template>
                </MangaViewer>

            </div>
            <template v-if="computedViewer.readMangaViewer.id !== 3">
                <template v-for="direc in storeReadingDirec.readingDirec" :key="direc.id">
                    <NextButton @click="() => {
                        if (direc.status) {
                            nextProgressCLick()
                        } else {
                            prevProgressCLick()
                        }
                    }" :class="`${direc.position} z-20`" />
                </template>
            </template>
            <ProgressManga />
        </div>
    </template>
