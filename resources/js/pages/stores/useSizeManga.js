import { defineStore } from "pinia";
import { computed } from "vue";
import { useProvideDataSizeManga } from "../../dataStore/dataSizeManga";
import { useUtils } from "../utils/utilsFunctionStore";
export const useMangaSize = defineStore("mangaSize", () => {
    const { mangaSizeSetting } = useProvideDataSizeManga();

    const { switchActive, findByStatus } = useUtils();

    const readModeStatus = computed(() => findByStatus(mangaSizeSetting.value));

    const readModeSize = computed(() =>
        findByStatus(readModeStatus.value.typeSizes)
    );


    const changeSizeType = (changeMode) =>
        switchActive(changeMode, mangaSizeSetting.value);

    return {
        changeSizeType,
        mangaSizeSetting,
        computedMangaSize : {
             readModeStatus,
             readModeSize
        }
    };
});
