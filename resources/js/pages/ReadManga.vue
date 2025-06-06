    <script setup>
    import { defineAsyncComponent, useTemplateRef } from 'vue';
    // Stores
    import { useMangaViewer } from './stores/useMangaViewer';
    import { useMangaSize } from './stores/useSizeManga';
    import { useProgressButton } from './stores/useButtonProgress';
    import { useAdvanceSetting } from './stores/useAdvanceSetting';
    import { useReadingDirec } from './stores/useReadingDirec';

    //Composables
    import { useCompoReadManga } from './composable/composableReadManga';
    // Components
    import ProgressManga from './components/ui/ProgressManga.vue';
    import MangaViewer from './components/ui/MangaViewer.vue';
    const NextButton = defineAsyncComponent(() => import('./components/partials/button/NextButton.vue'));
    // Layout
    import ReadLayout from '../layout/ReadLayout.vue';

    const { computedMangaSize } = useMangaSize()
    const { computedViewer } = useMangaViewer()
    const storeReadingDirec = useReadingDirec()
    const { typeMangaViewers: [singlePage, doublePage, longStrip] } = useMangaViewer()
    const { nextProgressCLick, prevProgressCLick } = useProgressButton()
    const { swip } = useAdvanceSetting()
    const longStripEl = useTemplateRef('itemLongStrip')
    const singleEl = useTemplateRef("itemSinglePageSwip")
    // const pageManga = ref(20)
    useCompoReadManga(longStripEl, singleEl)

    defineOptions({ layout: ReadLayout })
</script>
    <template>
        <!-- Gambar Manga -->
        <div :class="`Instance-scroll  h-full w-full flex  items-center `">
            <MangaViewer :singlePage="singlePage.status" :doublePage="doublePage.status" :longStrip="longStrip.status">
                <template #singlePage>
                    <div ref="itemSinglePage" v-if="!swip[0].status"
                        :class="`${computedMangaSize.readModeSize.height} bg-sky-500 ${computedMangaSize.readModeSize.width} z-10 m-auto `">
                    </div>
                    <template v-else>
                        <div ref="itemSinglePageSwip" v-for="item in 30"
                            :class="`h-${computedMangaSize.readModeSize.height} flex-shrink-0 bg-red-900 ${computedMangaSize.readModeSize.width} mx-80`">
                        </div>
                    </template>
                </template>
                <template #doublePage>
                    <div ref="itemDoublePage" v-for="index in 2"
                        :class="`${computedMangaSize.readModeSize.height} bg-sky-500  ${computedMangaSize.readModeSize.width} z-10`">
                    </div>
                </template>
                <template #longStrip>
                    <div ref="itemLongStrip" value="30" v-for="el in 30"
                        :class="`${computedMangaSize.readModeSize.height} flex-shrink-0 flex  bg-sky-500 ${computedMangaSize.readModeSize.width} `">
                    </div>
                </template>
            </MangaViewer>
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
        </div>
        <ProgressManga />
        <!-- Supaya scroll Tidak Terlihat -->
        <div class="h-full w-[3vh] absolute right-0 top-0  bg-slate-800"></div>
    </template>
