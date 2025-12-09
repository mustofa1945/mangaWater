import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUtils } from "../utils/utilsFunctionStore";

export const useSelect = defineStore("storeSelect", () => {
    const typeManga = ref([
        {
            id: 1,
            status: true,
            title: "CHAPTER",
            style: "bg-sky-600",
        },
        {
            id: 2,
            status: false,
            title: "VOLUME",
            style: "hover:bg-gray-300",
        },
    ]);

     const typeTime = ref([
        {
            id: 1,
            status: true,
            title: "Day",
            style: "text-sky-600",
        },
        {
            id: 2,
            status: false,
            title: "Week",
            style: "hover:text-sky-600 text-white",
        },
        {
            id: 3,
            status: false,
            title: "Month",
            style: "hover:text-sky-600 text-white",
        },
    ]);

         const typePrefix = ref([
        {
            id: 1,
            status: true,
            title: "All",
            style: "text-sky-600",
        },
        {
            id: 2,
            status: false,
            title: "Manga",
            style: "hover:text-sky-600 text-white",
        },
        {
            id: 3,
            status: false,
            title: "Manhwa",
            style: "hover:text-sky-600 text-white",
        },
        {
            id: 4,
            status: false,
            title: "Manhua",
            style: "hover:text-sky-600 text-white",
        },
        {
            id: 5,
            status: false,
            title: "Trending",
            style: "hover:text-sky-600 text-white",
        },
    ]);

    const { findByStatus, selectById } = useUtils();

    const getActiveStatus = computed(() => findByStatus(typeManga.value));

    const selectTypeMangaById = (id ) =>
        selectById(typeManga.value, id, "bg-sky-600", "hover:bg-gray-300/20");

    const selectTypeTimeById = (id , type) =>
        selectById(type, id, "text-sky-600", "hover:text-sky-600 text-white");

    return { typeManga, getActiveStatus, selectTypeMangaById , typeTime , selectTypeTimeById  , typePrefix};
});
