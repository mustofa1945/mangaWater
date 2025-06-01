import { defineStore } from "pinia";
import { computed, watchEffect, ref, watch } from "vue";
import { useProvideDataProgressBar } from "../../dataStore/dataProgreesButton";
import { useUtils } from "../utils/utilsFunctionStore";
import { useProvideOneUtilsProgressBar } from "../utils/oneUtils/oneUtilsProgressBar";

export const useProgressButton = defineStore("progressButton", () => {
    let page = ref(1);
    //Ambil Data Dari DataStore
    const { instanceProxy, typePositionScrollBar } =
        useProvideDataProgressBar();
    //Gunakan utils untuk mengambil element berdasarkan status dan mengubah mode secara berurutan
    const {
        switchActive,
        findByStatus,
        choiseType: runChoiseType,
        findLastStatus,
    } = useUtils();

    const {
        runProvideClickGiveStatus,
        runNextProgressCLick,
        runPrevProgressCLick,
        runScrollDetectStatus,
    } = useProvideOneUtilsProgressBar();

    const readType = computed(() => typePositionScrollBar.value);
    //Setiap nilai ef TypePosition berubah Jalankan GetByStatus
    const getType = computed(() => findByStatus(readType.value));

    const readPage = computed(() => page.value);

    //Matikan mode sekarang ActiveKan mode berikutnya
    const choiseTypePosition = (position, typeMangaViewer) => {
        runProvideClickGiveStatus(
            30 / typeMangaViewer.bar,
            instanceProxy.value
        );

        switchActive(position, typePositionScrollBar.value);
        //Relasikan dengan Advance Setting
        runChoiseType(typePositionScrollBar.value, getType.value.id);
    };

    const nextProgressCLick = () => runNextProgressCLick(instanceProxy.value);

    const prevProgressCLick = () => runPrevProgressCLick(instanceProxy.value);

    const wacthScroll = (elementScroll) => {
        if (elementScroll !== null) {
            instanceProxy.value.forEach(
                (el, index) => (el.element = elementScroll[index])
            );
        }
    };

    watch(
        () => instanceProxy.value,
        (val) => {
            const getPage = findLastStatus(val, true);
            page.value = getPage.id;
        },
        { deep: true }
    );
    
    const scrollDetectStatus = (elements) => runScrollDetectStatus(elements);
    //Select berdasarkan id
    const choiseType = (id) => runChoiseType(typePositionScrollBar.value, id);

    const pickPage = (id) => {
        instanceProxy.value.forEach((el) => {
            if (id >= el.id) {
                el.status = true;
                el.color = "bg-[#4169E1]/50";
            } else {
                el.status = false
                el.color = "bg-transparent";
            }
            el.pageColor = "bg-slate-900"
        });

        const el = findLastStatus(instanceProxy.value);

        el.color = "bg-[#4169E1]";
        el.pageColor = "bg-[#4169E1]"
        
        //Scroll ke Bawah
        el.element?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center", 
        });
    };

    return {
        typePositionScrollBar,
        scrollDetectStatus,
        instanceProxy,
        choiseTypePosition,
        getType,
        wacthScroll,
        nextProgressCLick,
        prevProgressCLick,
        choiseType,
        readPage,
        pickPage,
    };
});
