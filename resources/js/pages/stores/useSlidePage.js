import { defineStore } from "pinia";
import {  ref} from "vue";

export const useSlidePage = defineStore("slidePage", () => {
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
    //Dapatkan page yang dipilih dan tidak dipilih
    const splitPagesById = (id) => {
        return {
            target: pages.value.find((el) => el.id == id),
            targetReverse: pages.value.filter((el) => el.id != id),
        };
    };
    // Tampilkan page berdasarkan ID.
    function showPage(id) {
        const { target, targetReverse } = splitPagesById(id);
        if (!target.status) {
            target.display = "flex";
            setTimeout(() => (target.status = true), 20);
            //Hanya Boleh Ada satu element yang muncul
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
