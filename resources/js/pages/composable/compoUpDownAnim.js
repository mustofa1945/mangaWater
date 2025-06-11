import { computed, reactive, toRefs } from "vue";
import { useUtils } from "../utils/utilsFunctionStore";
import { langs } from "../../data/dataManga";
import { useThemeGlobal } from "../theme/globalStyle";

export const useCompoToDownOrUp = () => {
    const { findByStatus, delay, switchActive } = useUtils();

    const { templateStyleDrop, templateStyleFade } = useThemeGlobal();

    const listData = reactive({
        modalLogin: { ...templateStyleFade },
        modalError: { ...templateStyleFade },
        modalSetting: { ...templateStyleFade },
        dropLangs: { ...templateStyleDrop, language: [...langs] },
    });

    const { modalLogin, modalError, modalSetting, dropLangs } = listData;

    const readModalLogin = computed(() => modalLogin);

    const readStyleLogin = computed(() => findByStatus(modalLogin.style));

    const readDropLangs = computed(() => dropLangs);

    const readStyleDropLangs = computed(() => findByStatus(dropLangs.style));

    const readLangByStatus = computed(() => findByStatus(dropLangs.language));

    const showDown = async (targetInstance, instance) => {
        if (!targetInstance.status) {
            targetInstance.status = !targetInstance.status;
            await delay(10);
            switchActive(instance, targetInstance.style);
        } else {
            switchActive(instance, targetInstance.style);
            await delay(targetInstance.timeDelay);
            targetInstance.status = !targetInstance.status;
        }
    };

    const selectLangById = async (id) => {
        const { language } = dropLangs;
        language.forEach((lang) => {
            lang.status = id == lang.id;
            lang.style =
                id == lang.id
                    ? "bg-sky-600/30 text-blue-500"
                    : "bg-transparent";
        });
        await delay(100);
        showDown(readDropLangs.value, readStyleDropLangs.value);
    };

    return {
        listData,
        showDown,
        modalError,
        modalSetting,
        selectLangById,
        compuToDownOrUp: {
            readModalLogin,
            readStyleLogin,
            readDropLangs,
            readStyleDropLangs,
            readLangByStatus,
        },
    };
};
