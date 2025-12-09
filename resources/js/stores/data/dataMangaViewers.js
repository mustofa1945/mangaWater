import { ref } from "vue";
import { useThemeGlobal } from "../../theme/globalStyle";
export const useProvideDataMangaViewers = () => {
    const {
        border: { colorful, transparent },
    } = useThemeGlobal();
    const typeMangaViewers = ref([
        {
            id: 1,
            status: true,
            title: "Single Page",
            icon: "fas fa-bookmark",
            bar: 1,
            border: colorful,
        },
        {
            id: 2,
            status: false,
            title: "Double Page",
            icon: "fas fa-bookmark",
            bar: 2,
            border: transparent,
        },

        {
            id: 3,
            status: false,
            title: "Long Strip",
            icon: "fas fa-bookmark",
            bar: 1,
            border: transparent,
        },
    ]);

    return { typeMangaViewers };
};
