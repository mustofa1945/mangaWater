import { defineStore } from "pinia";
import { reactive , computed } from "vue";
import { useUtils } from "../utils/utilsFunctionStore";
import { useThemeGlobal } from "../theme/globalStyle";
import { useCompoUtilsShowDown } from "../utils/composabeUtils";
import { langs , langsWithChapter } from "../../data/dataManga";

export const useSingleDrop = defineStore("singleDrop", () => {
    const { findByStatus, delay, selectById } = useUtils();

    const { templateStyleDrop } = useThemeGlobal();

    const { showDown } = useCompoUtilsShowDown();

    const dropLangs = reactive({ ...templateStyleDrop, language: [...langs] });

    const dropLangWithChap = reactive({
        ...templateStyleDrop,
        language: [...langsWithChapter],
    });

    const readDropLangs = computed(() => dropLangs);

    const readStyleDropLangs = computed(() => findByStatus(dropLangs.style));

    const readLangByStatus = computed(() => findByStatus(dropLangs.language));

    const readDropLangWithChap = computed(() => dropLangWithChap);

    const readStyleDropLangWithChap = computed(() => findByStatus(dropLangWithChap.style));

    const readLangWithChapByStatus = computed(() => findByStatus(dropLangWithChap.language));

    const selectLangById = async (language, id, dataDrop, styleDrop) => {
        selectById(
            language,
            id,
            "bg-sky-600/30 text-blue-500",
            "bg-transparent"
        );

        await delay(100);

        showDown(dataDrop, styleDrop);
    };

    return {
        selectLangById,
        readDropLangs,
        readStyleDropLangs,
        readLangByStatus,
        readDropLangWithChap,
        readLangWithChapByStatus,
        readStyleDropLangWithChap
    };
});
