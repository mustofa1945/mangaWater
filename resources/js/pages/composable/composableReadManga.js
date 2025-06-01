import { watch, nextTick } from "vue";

export function useCompoReadManga(
    typeMangaViewer,
    isSwip,
    longStripEl,
    singleEl
) {
    const scrollElements = computed(() => {
        if (typeMangaViewer === 3) {
            return longStripEl;
        }
        if (isSwip) {
            return singleEl;
        }
        return null; // supaya watch terpicu saat berubah dari array → null dan sebaliknya
    });

    watch(
        () => scrollElements.value,
        async (val) => {
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
                storeShowAndClose.showOrHidden(
                    storeShowAndClose.header,
                    storeShowAndClose.readHeader
                );
            }

            if (e.key == "m") {
                storeShowAndClose.showOrHidden(
                    storeShowAndClose.navReadMenu,
                    storeShowAndClose.readNavReadMenu
                );
            }

            if (
                e.key == "ArrowRight" &&
                storeMangaViewer.readMangaViewer.id !== 3
            ) {
                nextProgressCLick();
            }

            if (
                e.key == "ArrowLeft" &&
                storeMangaViewer.readMangaViewer.id !== 3
            ) {
                prevProgressCLick();
            }
        });
    });
}
