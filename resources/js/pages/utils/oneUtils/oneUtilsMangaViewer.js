import { useUtils } from "../utilsFunctionStore";
import { computed, nextTick } from "vue";
import { useProvideOneUtilsProgressBar } from "./oneUtilsProgressBar";
import { getActivePinia, setActivePinia } from "pinia";
import { useMangaSize } from "../../stores/useSizeManga";
import { useProgressButton } from "../../stores/useButtonProgress";

export const useProvideOneUtilsMangaViewer = () => {
    
    if (!getActivePinia()) {
        const { pinia } = require("../../../app");
        setActivePinia(pinia);
    }

    const storeMangaSize = useMangaSize();

    const storeProgressBar = useProgressButton();

    const { findLastStatus, wait, findByStatus, switchActive } = useUtils();

    const { runProvideClickGiveStatus } = useProvideOneUtilsProgressBar();


    const syncMangaViewerSizes = () => {
        storeMangaSize.mangaSizeSetting.forEach((el) => {
            const { typeSizes } = el;
            //Ambil sizeActive untuk kita matikan mode yang sekarang dan diganti ke mode berikutnya
            const sizeActive = findByStatus(typeSizes);
            switchActive(sizeActive, typeSizes);
        });
    };

    const syncMangaViewerSizesById = (id) => {
        storeMangaSize.mangaSizeSetting.forEach((typeSize) => {
            const { typeSizes } = typeSize;

            typeSizes.forEach((typeViewer) => {
                typeViewer.status = typeViewer.id === id;
            });
        });
    };

    const handleProgressBarUpdate = (readMangaViewer) => {
        if (storeProgressBar.getType.position !== "none") {
            //Jika mode double page bagi instance proxy jadi 2
            if (readMangaViewer.id == 2) {
                storeProgressBar.instanceProxy.length = 30 / 2;
                //Mengontrol flow element supaya last bar colornya adalah bg-red-600 yang awalnya bg-red-600/50
                const limit = storeProgressBar.instanceProxy.every(
                    (el) => el.status === true
                );
                if (limit) {
                    const lastEL = findLastStatus(
                        storeProgressBar.instanceProxy
                    );
                    lastEL.color = "bg-[#4169E1]";
                }
            } else
                runProvideClickGiveStatus(30, storeProgressBar.instanceProxy);
        }
    };

    const syncProgressElementAndScroll = async (readMangaViewer) => {
        if (readMangaViewer.id !== 3) {
            storeProgressBar.instanceProxy.forEach((el) => {
                el.element = undefined;
            });
        } else {
            runProvideClickGiveStatus(30, storeProgressBar.instanceProxy);
            //Tunggu Hasil Update DOM Terbaru
            await nextTick();
            //Pastikan Element hasil directive v-if selesai di render dan masuk ke viewport
            wait(() => {
                const el = findLastStatus(
                    storeProgressBar.instanceProxy
                )?.element;
                if (el instanceof HTMLElement) {
                    el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                } else {
                    console.warn("Element belum tersedia:", el);
                }
            }, 200);
        }
    };

    return {
        syncMangaViewerSizes,
        syncMangaViewerSizesById,
        handleProgressBarUpdate,
        syncProgressElementAndScroll,
    };
};
