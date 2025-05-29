import { ref } from "vue";
import { useThemeGlobal } from "../pages/theme/globalStyle";

export const useProvideDataReadingDirec = () => {

    const { border: b } = useThemeGlobal();

    const readingDirec = ref([
        {
            id: 1,
            status: true, 
            title: "Left To Right",
            direc: "flex-row",
            position: "right-0",
            border: b.colorful,
        },
        {
            id: 2,
            status: false,
            title: "Right To Left",
            direc: "flex-row-reverse",
            position: "left-0",
            border: b.transparent,
        },
    ]);

    return { readingDirec };
};
