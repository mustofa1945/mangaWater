import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUtils } from "../utils/utilsFunctionStore";
import { dataManga } from "../../data/dataManga";

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

    const { findByStatus, selectById } = useUtils();

    const getActiveStatus = computed(() => findByStatus(typeManga.value));

    const selectTypeMangaById = (id) =>
        selectById(typeManga.value, id, "bg-sky-600", "hover:bg-gray-300/20");

    return { typeManga, getActiveStatus, selectTypeMangaById };
});
