import { defineStore } from "pinia";
import { computed, nextTick } from "vue";
//Data Store
import { useProvideDataAdvanceSetting } from "./data/dataAdvanceSetting";
import { useProvideOneUtilsProgressBar } from "../utils/oneUtils/oneUtilsProgressBar";
//Utils
import { useUtils } from "../utils/utilsFunctionStore";
import { useProvideUtilsData } from "../utils/utilsDatastore";

export const useAdvanceSetting = defineStore("setting", () => {
    //Data Driven UI AdvanceSetting
    const {
        advanceSetting,
        buttonType: { swip, imageSizing, imageColoring },
    } = useProvideDataAdvanceSetting();

    const { setting } = useProvideUtilsData();
    //Utils Untuk Membuat Data Progress Bar Berdasarkan Jumlah Page 
    const { runProvideClickGiveStatus } = useProvideOneUtilsProgressBar();
    
    const { findByStatus, findLastStatus } = useUtils();
    
    const readSetting = computed(() => findByStatus(advanceSetting.value));
    //Mememilih Satu Opsi Setting Yang Ingin Ditampilkan 
    const selectSetting = (id) =>
        advanceSetting.value.forEach((type) => {
            type.status = type.id === id;
            type.bg = type.id === id ? "bg-sky-600" : "bg-slate-900";
        });
    //Mode Read SLide 
    const changeStatusButtonType = async (id, buttonType, progressBar) => {
        if (id === 1) {
            //Singkronkan Property Denngan Mode Viewer Yang lainnya
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
        //Pilih Options Berdasarkan Id Element
        buttonType.forEach((el) => {
            if (el.id === id) el.status = !el.status;
        });
    };

    return {
        advanceSetting,
        selectSetting,
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
