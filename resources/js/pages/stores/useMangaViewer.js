import { defineStore } from "pinia";
import { computed } from "vue";
import { useUtils } from "../utils/utilsFunctionStore";
import { useProvideDataMangaViewers } from "./data/dataMangaViewers";
import { useProvideOneUtilsMangaViewer } from "../utils/oneUtils/oneUtilsMangaViewer";

export const useMangaViewer = defineStore("mangaViewer", () => {
    //Ambil data mangaViewer dari provider
    const { typeMangaViewers } = useProvideDataMangaViewers();

    const { switchActive, findByStatus, choiseType } = useUtils();

    const {
        syncMangaViewerSizes,
        syncMangaViewerSizesById,
        handleProgressBarUpdate,
        syncProgressElementAndScroll,
    } = useProvideOneUtilsMangaViewer();
    // Computed: Ambil manga viewer aktif berdasarkan status — digunakan oleh NavReadMenu dan changeTypeViewer
    const readMangaViewer = computed(() =>
        findByStatus(typeMangaViewers.value)
    );

    //Memilih Mode Secara Berutan
    const nextViewerMode = () => {
        //Ganti manga viewer ke mode selanjutnya
        switchActive(readMangaViewer.value, typeMangaViewers.value);
        //Jika type bar none maka bar tidak akan diberi status
        handleProgressBarUpdate(readMangaViewer.value);
        //Ubah nilai dari property element jika bukan mode longStrip
        syncProgressElementAndScroll(readMangaViewer.value);
        //Size Manga akan menyesuikan berdasarkan manga viewer
        syncMangaViewerSizes();
        //Menyelaraskan dengan AdvanceSetting
        choiseType(typeMangaViewers.value, readMangaViewer.value.id);
    };
    //Ubah mode manga viewer berdasarkan ID yang dipilih
    const selectViewerById = (id) => {
        choiseType(typeMangaViewers.value, id);
        handleProgressBarUpdate(readMangaViewer.value);
        syncProgressElementAndScroll(readMangaViewer.value);
        //Size Manga akan menyesuikan berdasarkan manga viewer berdasarkan ID
        syncMangaViewerSizesById(id);
    };
    return {
        typeMangaViewers,
        nextViewerMode,
        selectViewerById,
        computedViewer: {
            readMangaViewer,
        },
    };
});
