import { defineStore } from "pinia";
import { computed } from "vue";
import { useProvideDataReadingDirec } from "./data/dataReadingDirec";
import { useUtils } from "../utils/utilsFunctionStore";

export const useReadingDirec = defineStore("direc", () => {
    const { readingDirec } = useProvideDataReadingDirec();

    const { findByStatus, switchActive, choiseType } = useUtils();

    const readDirec = computed(() => findByStatus(readingDirec.value));
    // Memilih Mode Secara Berutan
    const nextReadingDirecMode = () => {
        //Berdasarkan status
        switchActive(readDirec.value, readingDirec.value);
        //Berdasarkan id Sekaligus menyelaraskan dengan advance setting
        choiseType(readingDirec.value, readDirec.value.id);
    };
    //Ubah mode ReadingDirec berdasarkan ID yang dipilih
    const selectReadingDirecById = (id) => choiseType(readingDirec.value, id);

    return {
        nextReadingDirecMode,
        selectReadingDirecById,
        readingDirec,
        findByStatus,
        readingDirec,
        compuReadDirec : {
            readDirec
        },
    };
});
