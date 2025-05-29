import { defineStore } from "pinia";
import { computed, watch } from "vue";
import { useProvideDataReadingDirec } from "../../dataStore/dataReadingDirec";
import { useUtils } from "../utils/utilsFunctionStore";

export const useReadingDirec = defineStore("direc", () => {
    const { readingDirec } = useProvideDataReadingDirec();

    const { findByStatus, switchActive, choiseType } = useUtils();

    const readDirec = computed(() => findByStatus(readingDirec.value));

    const applySwicthActive = () => {
        //Berdasarkan status
        switchActive(readDirec.value, readingDirec.value);
        //Berdasarkan id Sekaligus menyelaraskan dengan advance setting

        choiseType(readingDirec.value, readDirec.value.id);
    };
    //Berdasarkan id
    const applyChoiseType = (id) => choiseType(readingDirec.value, id);

    return {
        readingDirec,
        readDirec,
        findByStatus,
        applySwicthActive,
        applyChoiseType,
        readingDirec,
    };
});
