import { ref, watchEffect } from "vue";
import { useThemeGlobal } from "../../theme/globalStyle";
import { setActivePinia, getActivePinia } from "pinia";
import { useReadingDirec } from "../useReadingDirec";
export const useProvideDataProgressBar = () => {
    if (!getActivePinia()) {
        const { pinia } = require("../app"); // pastikan kamu ekspor `pinia` di suatu file global
        setActivePinia(pinia);
    }
   
    const { compuReadDirec } = useReadingDirec();

    const { border: b } = useThemeGlobal();
    //Simpan element
    const instanceProxy = ref([]);

    //Progress scroll berdasarkan viewPort
    const animationPoint = 150;
    const viewPortHeight = window.innerHeight;

    let page = ref(1);

    const typePositionScrollBar = ref([
        {
            id: 1,
            status: true,
            position: "none",
            style: {
                positionStatus: false,
                property: "hidden",
            },
            border: b.colorful,
        },
        {
            id: 2,
            status: false,
            position: "top",
            style: {
                positionStatus: true,
                property: `flex top-0 left-0 w-full h-[0.5dvh] hover:h-[1rem] transition-all`,
            },
            border: b.transparent,
        },
        {
            id: 3,
            status: false,
            position: "left",
            style: {
                positionStatus: false,
                property:
                    "flex flex-col left-0 top-0 w-[1dvh] h-full hover:w-[3dvh] transition-all",
                absolute: "right-[-8dvh]",
            },
            border: b.transparent,
        },
        {
            id: 4,
            status: false,
            position: "right",
            style: {
                positionStatus: false,
                property:
                    "flex-col flex top-0 right-0 w-[1dvh] h-full hover:w-[3dvh] transition-all",
                absolute: "left-[-8dvh]",
            },
            border: b.transparent,
        },
        {
            id: 5,
            status: false,
            position: "bottom",
            style: {
                positionStatus: true,
                property: `flex  bottom-0 left-0 w-full h-[1dvh]`,
            },
            border: b.transparent,
        },
    ]);

    watchEffect(() => {
        const direc = compuReadDirec.readDirec.direc;

        const [, top, , , bottom] = typePositionScrollBar.value;

        top.style.property = `flex ${direc} top-0 left-0 w-full h-[0.5dvh] hover:h-[1rem] transition-all`;
        bottom.style.property = `flex ${direc} bottom-0 left-0 w-full h-[0.5dvh]`;
    });

    const typeBar = {
        bold: {
            id: 1,
            status: true,
            color: "bg-[#4169E1]",
            pageColor: "bg-[#4169E1]",
            pageTranslateX:"translate-x-4"
        },
        transparent: {
            status: false,
            color: "bg-transparent hover:bg-[#4169E1]/30",
            id: 1,
            pageColor: "bg-slate-900",
            pageTranslateX: "-translate-x-3"
        },
    };

    return {
        typePositionScrollBar,
        instanceProxy,
        animationPoint,
        viewPortHeight,
        typeBar,
        page
    };
};
