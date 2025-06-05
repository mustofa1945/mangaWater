import { defineStore } from "pinia";
import {  ref} from "vue";

export const useSlidePage = defineStore("slidePage", () => {
    let pageOnMenu = ref(true)

    let pages = ref([
        {
            id: 1,
            status: false,
            input: true,
            display: "hidden",
        },
        {
            id: 2,
            status: false,
            input: false,
            display: "hidden",
        },
    ]);

    const getPages = (id) => {
        return {
            target: pages.value.find((el) => el.id == id),
            targetReverse: pages.value.filter((el) => el.id != id),
        };
    };

    function showPage(id) {
        const { target, targetReverse } = getPages(id);
        if (!target.status) {
            target.display = "show";
            setTimeout(() => (target.status = true), 20);
            targetReverse.forEach((el) => {
                if (el.status == true) {
                    el.status = false;
                    setTimeout(() => (el.display = "hidden"), 200);
                }
            });
        } else {
            target.status = false;
            setTimeout(() => (target.display = "hidden"), 200);
        }
    }

    return {
        pages, showPage
    };
});
