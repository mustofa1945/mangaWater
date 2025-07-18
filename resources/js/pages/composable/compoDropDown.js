import { ref, computed, watch } from "vue";
import { Manga } from "../../data/dataSearch";
import { useThemeGlobal } from "../theme/globalStyle";
import { useCompoUtilsDropDown } from "../utils/composabeUtils";
import { mangaGenres } from "../../data/dataManga";
import { useUtils } from "../utils/utilsFunctionStore";
import { useProvideDataDropDown } from "./data/dataDropdown";

const { templateDropDown } = useThemeGlobal();

const { dropdown } = useCompoUtilsDropDown();

const { findByStatus } = useUtils();

export const useDropDownSearch = () => {
    const { propertyDropdownSearch } = useProvideDataDropDown();

    const dataDropDownSearch = ref(
        propertyDropdownSearch.map((el, index) => {
            return {
                id: index + 1,
                status: false,
                placeHolder: el.placeholder,
                dataDrop: el.dataDrop,
                proper: el.property,
                width: el.width ?? "w-full",
                event: el.event,
                animProper: [
                    { ...templateDropDown },
                    {
                        id: 2,
                        status: false,
                        height: el.height,
                    },
                ],
            };
        })
    );

    const readDropSearch = computed(() => dataDropDownSearch.value);

    const readDataGenres = computed(() => dataDropDownSearch.value[1]);

    const readDataYear = computed(() => dataDropDownSearch.value[4]);

    const runDropdown = (id) => dropdown(id, readDropSearch);

    const selectItemDropById = (id, itemList) => {
        const el = itemList.find((el) => el.id === id);

        el.status = !el.status;
        el.icon = !el.status
            ? "fa-regular fa-square"
            : "fa-solid fa-square-plus";
        el.bg = !el.status ? "" : "bg-sky-700/60";
    };

    return {
        compuDropSearch: { readDropSearch, readDataGenres, readDataYear },
        runDropdown,
        selectItemDropById,
    };
};

//Dekstop
export const useCompoDropdownHeaderLarge = () => {
    const { propertyDropDownHeader } = useProvideDataDropDown();

    const dataDropDownHeader = ref(
        propertyDropDownHeader.map((el, index) => {
            return {
                id: index + 1,
                status: false,
                dataDrop: el.dataDrop,
                title : el.title,
                property: el.property,
                childWidth : el.childWidth,
                animProper: [
                    { ...templateDropDown },
                    {
                        id: 2,
                        status: false,
                        height: el.height,
                    },
                ],
            };
        })
    );
    
    const readDropDownHeader = computed(() => dataDropDownHeader.value);

    const runDropdown = (id) => dropdown(id, readDropDownHeader);


    return {
        runDropdown,
        compuDropdownHeader: { readDropDownHeader },
    };
};

//Header Mobile
export const useCompoDropDownHeader = () => {
    const headerHaveDrop = [
        { title: "Types", dataDrop: [...Manga], height: "h-[20dvh]" },
        { title: "Genres", dataDrop: [...mangaGenres], height: "h-[128dvh]" },
    ];

    const headerHaventDrop = ["Newest", "Updated", "Added", "Random"];

    const firtsDrop = headerHaveDrop.map((el, index) => ({
        id: index + 1,
        title: el.title,
        status: false,
        dataDrop: el.dataDrop,
        isHaveDrop: true,
        animProper: [
            { ...templateDropDown },
            {
                id: 2,
                status: false,
                height: el.height,
            },
        ],
        updateAnimeProper: { ...templateDropDown },
    }));

    let index = 2;

    const secondDrop = headerHaventDrop.map((el) => {
        index++;
        return {
            id: index,
            status: false,
            title: el,
            isHaveDrop: false,
        };
    });

    const concatDrop = ref([...firtsDrop, ...secondDrop]);

    const isDropActive = computed(() =>
        concatDrop.value.some((el) => el.status == true)
    );

    const runDropDownHeader = (id) => dropdown(id, readDropHeader);

    //Monitor Object Sampai ke akar-akarnya
    watch(
        concatDrop,
        (newValue) => {
            newValue.forEach((el) => {
                if (el.isHaveDrop) {
                    el.updateAnimeProper = findByStatus(el.animProper);
                }
            });
        },
        { deep: true }
    );

    const readDropHeader = computed(() => concatDrop.value);

    return {
        compuDropHeader: {
            concatDrop,
            isDropActive,
        },
        runDropDownHeader,
    };
};
