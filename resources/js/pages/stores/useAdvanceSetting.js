import { defineStore } from "pinia";
import { computed, nextTick } from "vue";
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

    const { changeStatus, findByStatus, findLastStatus } = useUtils();

    const readSetting = computed(() => findByStatus(advanceSetting.value));

    const selectSetting = (id) =>
        advanceSetting.value.forEach((type) => {
            type.status = type.id === id;
            type.bg = type.id === id ? "bg-sky-600" : "bg-slate-900";
        });

    const showAndUpdate = () => changeStatus(setting);

    const changeStatusButtonType = async (id, buttonType, progressBar) => {
        if (id === 1) {
            runProvideClickGiveStatus(30, progressBar);
            const el = findLastStatus(progressBar);
            //Tunggu Update Dom Terbaru Dan Masuk Ke viewPort
            await nextTick();
            setTimeout(() => {
                //Sinkron Kan viewport Page Berdasarkan status
                el.element?.scrollIntoView({
                    behavior: "instant",
                    block: "center",
                    inline: "center",
                });
            }, 100);
        }
        buttonType.forEach((el) => {
            if (el.id === id) el.status = !el.status;
        });
    };

    return {
        advanceSetting,
        selectSetting,
        showAndUpdate,
        setting,
        changeStatusButtonType,
        swip,
        imageSizing,
        imageColoring,
        compuAdvaSet: {
            readSetting,
        },
    };
});
