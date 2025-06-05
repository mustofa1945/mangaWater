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
    const { instanceProxy, nextProgressCLick, prevProgressCLick, wacthScroll } = useProgressButton()
    const { runProvideClickGiveStatus } = useProvideOneUtilsProgressBar()
    const { createShowCloseComputedGroup, showOrHidden, header, navReadMenu } = useShowClose()
    const { readHeader, readNavReadMenu } = createShowCloseComputedGroup()
    const { swip } = useAdvanceSetting()
    const { pages } = useSlidePage()

    const scrollElements = computed(() => {
        if (computedViewer.readMangaViewer.id === 3) {
            return longStripEl.value;
        }
        if (swip[0].status) {
            console.log
            return singleEl.value;
        }
        return null; // supaya watch terpicu saat berubah dari array → null dan sebaliknya
    });

    watch(
        () => scrollElements.value,
        async (val) => {
            console.log(val)
            await nextTick();
            wacthScroll(val);
        }
    );

    watch(
        () => instanceProxy,
        (newValue) => runProvideClickGiveStatus(30, newValue),
        { immediate: true, once: true }
    );

    onMounted(() => {
        window.addEventListener("keydown", (e) => {
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
