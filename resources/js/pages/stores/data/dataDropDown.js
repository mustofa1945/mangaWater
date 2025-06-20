import { reactive, ref } from "vue";
import { types, mangaGenres } from "../../../data/dataManga";

export const useProvideDataDropDown = () => {
    let canHover = ref(true);
    let stopAndHide = ref(true);

    const elements = reactive({
        itemOne: {
            id: 1,
            title: "types",
            animation: "none",
            display: "hidden",
            style: {
                width: "w-[30dvh]",
                childWidth : "w-full",
                flexType: "flex-col",
                size: 15,
            },
            data: types,
        },
        itemTwo: {
            id: 2,
            title: "genres",
            animation: "none",
            display: "hidden",
            style: {
                width: "w-[80dvh]",
                childWidth : "w-[30%]",
                flexType: "flex-wrap",
                size: 17,
            },
            data: mangaGenres,
        },
    });
   
    const animatioDropdown = {
        NONE: "none",
        APPEARED: "appeard",
        DISSAPEARED: "dissapeard",
    };

    return { elements, canHover, stopAndHide , animatioDropdown };
};