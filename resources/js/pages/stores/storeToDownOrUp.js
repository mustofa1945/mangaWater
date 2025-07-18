import { defineStore } from "pinia";
import { computed } from "vue";
import { useCompoToDownOrUp } from "../composable/compoUpDownAnim";
import { useUtils } from "../utils/utilsFunctionStore";

export const useStoreToDownOrUp = defineStore("storeToDownOrUp", () => {
    const {
        modalError,
        showDown: runShowDown,
        modalSetting,
        InputSearch,
        modalGenres,
        modalYear,
    } = useCompoToDownOrUp();

    const { findByStatus } = useUtils();
    
    const stateShowDown = (targetInstance, instance) =>
        runShowDown(targetInstance, instance);

    const readStyleError = computed(() => findByStatus(modalError.style));

    const readStyleSetting = computed(() => findByStatus(modalSetting.style));

    const readStyeInputSearch = computed(() => findByStatus(InputSearch.style));

    const readStyleModalGenres = computed(() =>
        findByStatus(modalGenres.style)
    );

    const readStyleModalYear = computed(() => findByStatus(modalYear.style));


    return {
        stateShowDown,
        compuPiniaToDownOrUp: {
            modalSetting,
            modalError,
            InputSearch,
            modalGenres,
            modalYear,
            readStyleError,
            readStyleSetting,
            readStyeInputSearch,
            readStyleModalGenres,
            readStyleModalYear,
        },
    };
});
