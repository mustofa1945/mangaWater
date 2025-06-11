import { defineStore } from "pinia";
import { computed } from "vue";
import { useProvideDataSizeManga } from "./data/dataSizeManga";
import { useUtils } from "../utils/utilsFunctionStore";

export const useMangaSize = defineStore("mangaSize", () => {
    const { mangaSizeSetting } = useProvideDataSizeManga();

    const { switchActive, findByStatus } = useUtils();

    const readModeStatus = computed(() => findByStatus(mangaSizeSetting.value));

    const readModeSize = computed(() =>
        findByStatus(readModeStatus.value.typeSizes)
    );


    const nextMangaSizeMode = (changeMode) =>
        switchActive(changeMode, mangaSizeSetting.value);

    return {
        nextMangaSizeMode,
        mangaSizeSetting,
        computedMangaSize : {
             readModeStatus,
             readModeSize
        }
    };
});
