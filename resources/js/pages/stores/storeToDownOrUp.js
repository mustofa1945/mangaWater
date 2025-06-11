import { defineStore } from "pinia";
import { computed } from "vue";
import { useCompoToDownOrUp } from "../composable/compoUpDownAnim";
import { useUtils } from "../utils/utilsFunctionStore";

export const useStoreToDownOrUp = defineStore("storeToDownOrUp", () => {
    const { modalError, showDown : runShowDown  , modalSetting } = useCompoToDownOrUp();

    const { findByStatus } = useUtils();

    const readStyleError = computed(() => findByStatus(modalError.style));

    const readStyleSetting = computed(() => findByStatus(modalSetting.style))

    const stateShowDown = (targetInstance, instance) =>
        runShowDown(targetInstance, instance);

    return {
        stateShowDown,
        compuPiniaToDownOrUp: {
            modalSetting,
            modalError,
            readStyleError,
            readStyleSetting
        },
    };
});
