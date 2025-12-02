import { computed, reactive } from "vue";
import { useUtils } from "../utils/utilsFunctionStore";
import { langs, langsWithChapter } from "../../data/dataManga";
import { useThemeGlobal } from "../theme/globalStyle";
import { useCompoUtilsShowDown } from "../utils/composabeUtils";

export const useCompoToDownOrUp = () => {
    const { findByStatus, delay , selectById } = useUtils();

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

    const selectLangById = async (language, id) => {
       selectById(language , id , "bg-sky-600/30 text-blue-500" , "bg-transparent"  )

        await delay(100);

        showDown(readDropLangs.value, readStyleDropLangs.value);
    };

    return {
        selectLangById,
        compuToDownOrUp: {
            readDropLangs,
            readStyleDropLangs,
            readLangByStatus,
        },
    };
};
