import { defineStore } from "pinia";
import { computed } from "vue";
import { useProvideDataAdvanceSetting } from "../../dataStore/dataAdvanceSetting";
import { useUtils } from "../utils/utilsFunctionStore";
import { useProvideUtilsData } from "../utils/utilsDatastore";
import { useProvideOneUtilsProgressBar } from "../utils/oneUtils/oneUtilsProgressBar";

export const useAdvanceSetting = defineStore("setting", () => {
    const {
        advanceSetting,
        buttonType: { swip, imageSizing, imageColoring },
    } = useProvideDataAdvanceSetting();

    const { setting } = useProvideUtilsData();

    const { runProvideClickGiveStatus } = useProvideOneUtilsProgressBar();

    const { changeStatus, findByStatus } = useUtils();

    const readSetting = computed(() => findByStatus(advanceSetting.value));

    const selectSetting = (proxy, id) =>
        proxy.forEach((type) => (type.status = type.id === id));

    const showAndUpdate = () => changeStatus(setting);

    const changeStatusButtonType = (id, buttonType , progressBar) => {
        if(id === 1){
            runProvideClickGiveStatus(30 , progressBar)
        }
        buttonType.forEach((el) => {
            if (el.id === id) el.status = !el.status;
        });
    };

    return {
        advanceSetting,
        selectSetting,
        readSetting,
        showAndUpdate,
        setting,
        changeStatusButtonType,
        swip,
        imageSizing,
        imageColoring,
    };
});
