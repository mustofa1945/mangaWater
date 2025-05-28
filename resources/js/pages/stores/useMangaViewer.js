import { defineStore } from "pinia";
import { computed } from "vue";
import { useUtils } from "../utils/utilsFunctionStore";
import { useProvideDataMangaViewers } from "../../dataStore/dataMangaViewers";
import { useProvideOneUtilsMangaViewer } from "../utils/oneUtils/oneUtilsMangaViewer";

export const useMangaViewer = defineStore("mangaViewer", () => {
    //Ambil dari Provide yang kita buat supaya lebih refactor
    const { typeMangaViewers } = useProvideDataMangaViewers();

    const { switchActive, findByStatus, choiseType } = useUtils();

    const {
        syncMangaViewerSizes,
        syncMangaViewerSizesById,
        handleProgressBarUpdate,
        syncProgressElementAndScroll,
    } = useProvideOneUtilsMangaViewer();
    //Kita ambil manga viewer yang akan digunakan NavReadMenu dan parameter pertama dari changeTypeViewer
    const readMangaViewer = computed(() =>
        findByStatus(typeMangaViewers.value)
    );
    //Menirima proxy dari component NavReadMenu
    const changeTypeViewer = async () => {
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

    const swicthById = (id) => {
        choiseType(typeMangaViewers.value, id);
        handleProgressBarUpdate(readMangaViewer.value);
        syncProgressElementAndScroll(readMangaViewer.value);
        //Size Manga akan menyesuikan berdasarkan manga viewer berdasarkan ID
        syncMangaViewerSizesById(id);
    };
    return {
        typeMangaViewers,
        readMangaViewer,
        changeTypeViewer,
        swicthById,
    };
});
