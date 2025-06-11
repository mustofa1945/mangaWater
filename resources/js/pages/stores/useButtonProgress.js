import { defineStore } from "pinia";
import { computed } from "vue";
import { useProvideDataProgressBar } from "./data/dataProgreesButton";
import { useProvideOneUtilsProgressBar } from "../utils/oneUtils/oneUtilsProgressBar";
import { useUtils } from "../utils/utilsFunctionStore";

export const useProgressButton = defineStore("progressButton", () => {
    //Ambil Data Dari DataStore
    const { instanceProxy, typePositionScrollBar, page } =
        useProvideDataProgressBar();
    //Gunakan utils untuk mengambil element berdasarkan status dan mengubah mode secara berurutan
    const {
        switchActive,
        findByStatus,
        choiseType
    } = useUtils();

    const {
        runProvideClickGiveStatus,
        runNextProgressCLick,
        runPrevProgressCLick,
        runScrollDetectStatus,
        pickPage: runPickPage,
        updatePage,
        updateDOM,
    } = useProvideOneUtilsProgressBar();

    // Setiap perubahan pada typePositionScrollBar akan memicu pencarian status terkait
    const readTypePosition = computed(() =>
        findByStatus(typePositionScrollBar.value)
    );
    //Computasi Untuk Page Update
    const readPage = computed(() => page.value);

    const nextPositionMode = (position, typeMangaViewer) => {
        runProvideClickGiveStatus(
            30 / typeMangaViewer.bar,
            instanceProxy.value
        );
        // Nonaktifkan mode saat ini dan aktifkan mode berikutnya berdasarkan posisi
        switchActive(position, typePositionScrollBar.value);
        //Relasikan dengan Advance Setting
        choiseType(typePositionScrollBar.value, readTypePosition.value.id);
    };
    //Navigasi ke progress bar berikutnya
    const nextProgressCLick = () => runNextProgressCLick(instanceProxy.value);
    // Navigasi ke progress bar sebelumnya
    const prevProgressCLick = () => runPrevProgressCLick(instanceProxy.value);
    // Update DOM element berdasarkan mode yang active, tanpa mengubah struktur data aslinya
    const watchTypeScroll = (tempRef) => updateDOM(tempRef, instanceProxy.value);
    //// Manual trigger update karena computed tidak memantau object nested secara deep
    updatePage(instanceProxy.value, page);
    //Setiap ELement Terlihat DI ViewPort Berikan Status true
    const scrollDetectStatus = (elements) => runScrollDetectStatus(elements);
    //Ubah mode Progress Bar berdasarkan ID yang dipilih
    const selectProgressBarById  = (id) => choiseType(typePositionScrollBar.value, id);
    //Memilih Page Berdasarkan Page Yang Dipilih
    const pickPage = (id) => runPickPage(instanceProxy.value, id);

    return {
        typePositionScrollBar,
        scrollDetectStatus,
        instanceProxy,
        nextPositionMode,
        watchTypeScroll,
        nextProgressCLick,
        prevProgressCLick,
        selectProgressBarById,
        pickPage,
        computedProgressBar: {
            readPage,
            readTypePosition,
        },
    };
});
