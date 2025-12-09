import { defineStore } from "pinia";
import { computed } from "vue";
import { useProvideDataReadingDirec } from "./data/dataReadingDirec";
import { useUtils } from "../utils/utilsFunctionStore";

export const useReadingDirec = defineStore("direc", () => {
    const { readingDirec } = useProvideDataReadingDirec();

    const { findByStatus, switchActive, choiseType , findLastStatus } = useUtils();

    const readDirec = computed(() => findByStatus(readingDirec.value));
    // Memilih Mode Secara Berutan
    const nextReadingDirecMode = (swip , instanceProxy) => {
        //Berdasarkan status
        switchActive(readDirec.value, readingDirec.value);
        //Berdasarkan id Sekaligus menyelaraskan dengan advance setting
        choiseType(readingDirec.value, readDirec.value.id);

        if(swip.status){
            const el = findLastStatus(instanceProxy)
            setTimeout(() => {
                el.element?.scrollIntoView({
                   behavior: "smooth",
                   inline: "center", // untuk scroll horizontal ke kiri elemen
               });
            } , 200)
        } 
    };

    //Ubah mode ReadingDirec berdasarkan ID yang dipilih
    const selectReadingDirecById = (id) => choiseType(readingDirec.value, id);

    return {
        nextReadingDirecMode,
        selectReadingDirecById,
        readingDirec,
        findByStatus,
        readingDirec,
        readDirec
    };
});
