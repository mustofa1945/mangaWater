import { watch, nextTick, computed, onMounted } from "vue";
import { useMangaViewer } from "../stores/useMangaViewer";
import { useProgressButton } from "../stores/useButtonProgress";
import { useProvideOneUtilsProgressBar } from "../utils/oneUtils/oneUtilsProgressBar";
import { useShowClose } from "../stores/useShowClose";
import { useAdvanceSetting } from "../stores/useAdvanceSetting";
import { useSlidePage } from "../stores/useSlidePage";

export function useCompoReadManga(
    longStripEl,
    singleEl
) {

    const { computedViewer } = useMangaViewer()
    const { instanceProxy, nextProgressCLick, prevProgressCLick, watchTypeScroll} = useProgressButton()
    const { runProvideClickGiveStatus } = useProvideOneUtilsProgressBar()
    const { createShowCloseComputedGroup, showOrHidden, header, navReadMenu } = useShowClose()
    const { readHeader, readNavReadMenu } = createShowCloseComputedGroup()
    const { swip } = useAdvanceSetting()
    const { pages } = useSlidePage()
    //Komputasi UseTemplate REf Jika Berubah Mode 
    const scrollElements = computed(() => {
        if (computedViewer.readMangaViewer.id === 3) {
            return longStripEl.value;
        }
        if (swip[0].status) {
            return singleEl.value;
        }
        return null; // supaya watch terpicu saat berubah dari array → null dan sebaliknya
    });
    //Berikan DOM Berdasakan Mode Yang DIpilih Scroll atau Swip Tanpa Mengubah Structur Main Instance Propertynya
    watch(
        () => scrollElements.value,
        async (val) => {
            await nextTick();
            watchTypeScroll(val);
        }
    );
    //Berikan Inital Value Pada Instance Ini Untuk Menghidari Bug dimana user Memilih fitur MangaViewer Sebelum memilih fitur ProgresBar
    watch(
        () => instanceProxy,
        (newValue) => runProvideClickGiveStatus(30, newValue),
        { immediate: true, once: true }
    );
     //Event untuk Shorcut
    onMounted(() => {
        window.addEventListener("keyup", (e) => {
            if (e.key == "h") {
                showOrHidden(
                    header,
                    readHeader.value,
                );
            }

            if (e.key == "m") {
                showOrHidden(
                    navReadMenu,
                    readNavReadMenu.value,
                    pages
                );
            }

            if (
                e.key == "ArrowRight" &&
               computedViewer.readMangaViewer.id !== 3
            ) nextProgressCLick();


            if (
                e.key == "ArrowLeft" &&
                computedViewer.readMangaViewer.id !== 3
            ) prevProgressCLick();

        });
    });
}
