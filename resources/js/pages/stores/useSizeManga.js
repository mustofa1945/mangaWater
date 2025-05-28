import { defineStore } from "pinia";
import { computed } from "vue";
import { useProvideDataSizeManga } from "../../dataStore/dataSizeManga";
import { useUtils } from "../utils/utilsFunctionStore";
export const useMangaSize = defineStore("mangaSize", () => {
    const { mangaSizeSetting } = useProvideDataSizeManga();

    const { switchActive, findByStatus } = useUtils();
    
    const getModeStatus = computed(() => findByStatus(mangaSizeSetting.value));
     
    const getModeSize = computed(() =>
        findByStatus(getModeStatus.value.typeSizes)
    );

    const changeSizeType = (changeMode) =>
        switchActive(changeMode, mangaSizeSetting.value);

    return {
        getModeStatus,
        changeSizeType,
        getModeSize,
        mangaSizeSetting,
    };
});
