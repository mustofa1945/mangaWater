import { useUtils } from "../utilsFunctionStore";
import { nextTick } from "vue";
import { useProvideOneUtilsProgressBar } from "./oneUtilsProgressBar";
import { getActivePinia, setActivePinia, storeToRefs } from "pinia";
import { useMangaSize } from "../../stores/useSizeManga";
import { useProgressButton } from "../../stores/useButtonProgress";

export const useProvideOneUtilsMangaViewer = () => {
    if (!getActivePinia()) {
        const { pinia } = require("../../../app");
        setActivePinia(pinia);
    }

    const { mangaSizeSetting } = useMangaSize();

    const { instanceProxy } = useProgressButton();

    const { readTypePosition } = storeToRefs(useProgressButton());

    const { findLastStatus, wait, findByStatus, switchActive } = useUtils();

    const { runProvideClickGiveStatus } = useProvideOneUtilsProgressBar();

    const syncMangaViewerSizes = () => {
        mangaSizeSetting.forEach((el) => {
            const { typeSizes } = el;
            //Ambil sizeActive untuk kita matikan mode yang sekarang dan diganti ke mode berikutnya
            const sizeActive = findByStatus(typeSizes);
            switchActive(sizeActive, typeSizes);
        });
    };

    const syncMangaViewerSizesById = (id) => {
        mangaSizeSetting.forEach((typeSize) => {
            const { typeSizes } = typeSize;

            typeSizes.forEach((typeViewer) => {
                typeViewer.status = typeViewer.id === id;
            });
        });
    };

    const handleProgressBarUpdate = (readMangaViewer) => {
        if (readTypePosition.position !== "none") {
            //Jika mode double page bagi instance proxy jadi 2
            if (readMangaViewer.id == 2) {
                instanceProxy.length = 30 / 2;
                //Mengontrol flow element supaya last bar colornya adalah bg-red-600 yang awalnya bg-red-600/50
                const limit = instanceProxy.every((el) => el.status === true);
                if (limit) {
                    const lastEL = findLastStatus(instanceProxy);
                    lastEL.color = "bg-[#4169E1]";
                }
            } else runProvideClickGiveStatus(30, instanceProxy);
        }
    };

    const syncProgressElementAndScroll = async (readMangaViewer) => {
        if (readMangaViewer.id !== 3) {
            instanceProxy.forEach((el) => {
                el.element = undefined;
            });
        } else {
            runProvideClickGiveStatus(30, instanceProxy);
            //Tunggu Hasil Update DOM Terbaru
            await nextTick();
            //Pastikan Element hasil directive v-if selesai di render dan masuk ke viewport
            wait(() => {
                const el = findLastStatus(instanceProxy)?.element;
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
