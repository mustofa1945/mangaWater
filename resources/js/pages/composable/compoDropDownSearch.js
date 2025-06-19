import { ref, computed } from "vue";
import { datas } from "../../data/dataSearch";
import { useThemeGlobal } from "../theme/globalStyle";
import { useUtils } from "../utils/utilsFunctionStore";

export const useDropDownSearch = () => {
    const { templateDropDown } = useThemeGlobal();

    const { findByStatus, delay, switchActive } = useUtils();

    const dataDropDownSearch = ref(
        datas.map((el, index) => {
            return {
                id: index + 1,
                status: false,
                placeHolder: el.placeholder,
                dataDrop: el.dataDrop,
                proper: el.property,
                width: el.width ?? "w-full",
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

    const selectDropById = (id) => {
        const findDrop = dataDropDownSearch.value.find((el) => el.id === id);
        findDrop.status = !findDrop.status;
    };

    const splitDataDropDownById = (id) => {
        return {
            target: dataDropDownSearch.value.find((el) => el.id === id),
            reverseTarget: dataDropDownSearch.value.filter(
                (el) => el.id !== id
            ),
        };
    };

    const runDropdown = async (id) => {
        const { target, reverseTarget } = splitDataDropDownById(id);

        const elStatusActive = findByStatus(target.animProper);
        // Coba cari elemen aktif, jika tidak ada, cari elemen non-aktif sebagai fallback
        const findReverseActive = findByStatus(reverseTarget) ?? findByStatus(reverseTarget, false);

        if (!target.status) {
            selectDropById(id);
            await delay(10);
            switchActive(elStatusActive, target.animProper);
            findReverseActive.animProper.forEach((anim) => {
                anim.status = anim.id === 1 ? true : false;
            });
            await delay(300);
            findReverseActive.status = false;
        } else {
            switchActive(elStatusActive, target.animProper);
            await delay(300);
            selectDropById(id);
        }
    };

    const selectItemDropById = (id, itemList) => {
        const el = itemList.find((el) => el.id === id);

        el.status = !el.status
        el.icon = !el.status
            ? "fa-regular fa-square"
            : "fa-solid fa-square-plus";
        el.bg = !el.status ? "" : "bg-sky-700/60";
    };
    return { compuDropSearch: { readDropSearch }, runDropdown, selectItemDropById };
};
