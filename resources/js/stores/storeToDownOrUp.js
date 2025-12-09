import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { useUtils } from "../utils/utilsFunctionStore";
import { useThemeGlobal } from "../theme/globalStyle";
import { useCompoUtilsShowDown } from "../utils/composabeUtils";

export const useStoreToDownOrUp = defineStore("storeToDownOrUp", () => {
    const { templateStyleFade } = useThemeGlobal();

    const { findByStatus } = useUtils();

    const { showDown } = useCompoUtilsShowDown();

    const stateShowDown = (targetInstance, instance) => {
        showDown(targetInstance, instance);
    };

    const modalLogin = reactive({ ...templateStyleFade });

    const modalError = reactive({ ...templateStyleFade });

    const modalSetting = reactive({ ...templateStyleFade });

    const modalYear = reactive({ ...templateStyleFade });

    const inputSearch = reactive({ ...templateStyleFade });

    const modalGenres = reactive({ ...templateStyleFade });

    const readStyleError = computed(() => findByStatus(modalError.style));

    const readStyleSetting = computed(() => findByStatus(modalSetting.style));

    const readStyeInputSearch = computed(() => findByStatus(InputSearch.style));

    const readStyleModalGenres = computed(() =>
        findByStatus(modalGenres.style)
    );

    const readStyleModalYear = computed(() => findByStatus(modalYear.style));

    const readStyleModalLogin = computed(() => findByStatus(modalLogin.style));

    return {
        stateShowDown,
        modalLogin,
        modalSetting,
        modalError,
        inputSearch,
        modalGenres,
        modalYear,
        readStyleError,
        readStyleSetting,
        readStyeInputSearch,
        readStyleModalGenres,
        readStyleModalYear,
        readStyleModalLogin,
    };
});
