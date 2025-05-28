import { defineStore } from "pinia";
import { useProvideDataDropDown } from "../../dataStore/dataDropDown";
export const useDropStore = defineStore("drop", () => {
    //AMbil data Dari Provide
    const {
        elements,
        canHover,
        stopAndHide,
        animatioDropdown: { NONE, DISSAPEARED, APPEARED },
    } = useProvideDataDropDown();

    //Destruct  proxy
    const { itemOne, itemTwo } = elements;
    //Lalu Letakkan di Array supaya Bisa Dimodifikasi
    const elementsArray = [itemOne, itemTwo];
    //Ambil element berdasarkan id yang di select sekaligus kebalikannya
    const getElement = (id) => {
        return {
            target: elementsArray.find((el) => el.id == id),
            reverseTarget: elementsArray.filter((el) => el.id != id),
        };
    };
    
    //Jalankan Animasi DropDown
    function runDropdown(id) {
        const { target, reverseTarget } = getElement(id);
        //Matikan hover
        canHover.value = false;
        if (target.animation == NONE) {
            target.display = "flex";
            reverseTarget.forEach(
                (elReverse) => (elReverse.animation = DISSAPEARED)
            );
            target.animation = DISSAPEARED;
        } else if (target.animation == DISSAPEARED) {
            target.display = "flex";
            target.animation = APPEARED;
            //hanya boleh ada satu element yang appread
            reverseTarget.forEach((elReverse) => {
                if (elReverse.animation == APPEARED) {
                    elReverse.animation = DISSAPEARED;
                }
            });
        } else {
            target.animation = DISSAPEARED;
        }
    }

    //jika dissapeard animasi berakhir maka ubah ke display hidden
    function dropdownAnimationEnd(id) {
        const { target } = getElement(id);
        if (target.animation == DISSAPEARED) {
            target.display = "hidden";
            canHover.value = false;
        }
    }

    //Reset semua jika mouse keluar dari element
    function reset(id) {
        const { target, reverseTarget } = getElement(id);

        reverseTarget.forEach((elReverse) => {
            if (
                target.animation == DISSAPEARED &&
                elReverse.animation == DISSAPEARED
            ) {
                //Solusi Jika user mouseout sebelum animasi selesai
                if (stopAndHide.value) target.display = "hidden";

                target.animation = NONE;
                elReverse.animation = NONE;
                canHover.value = true;
            }
        });
    }

    return { reset, runDropdown, elements, dropdownAnimationEnd, canHover };
});
