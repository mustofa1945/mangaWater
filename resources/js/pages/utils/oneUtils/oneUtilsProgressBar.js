import { useProvideDataProgressBar } from "../../../dataStore/dataProgreesButton";
import { useUtils } from "../utilsFunctionStore";
import { reactive } from "vue";
export const useProvideOneUtilsProgressBar = () => {
    const {
        viewPortHeight,
        animationPoint,
        typeBar: { bold, transparent },
    } = useProvideDataProgressBar();

    const { pushElement, findByStatus, applyLogic, findLastStatus , delay} =
        useUtils();

    const runProvideClickGiveStatus = (numBar, instance) => {
        //Genarate progress bar  berdasarkan jumlah gambar
        if (instance.length == 0) {
            let currentIndex = 0;
            for (let index = 0; index < numBar; index++) {
                currentIndex++;
                //Pastikan Bar Pertama Adalah Bold Style
                if (index == 0) pushElement(instance, bold);
                else
                    pushElement(
                        instance,
                        reactive({
                            ...transparent,
                            id: currentIndex,
                        })
                    );
            }
        } else {
            //Kembalikan ukuran length ke semula setelah mode double di ganti
            if (instance.length === numBar / 2) {
                let untilIndex = instance.length;
                for (let index = 1; index <= numBar / 2; index++) {
                    untilIndex++;
                    pushElement(
                        instance,
                        reactive({
                            ...transparent,
                            id: untilIndex,
                        })
                    );
                }
            }
        }
    };

    const runNextProgressCLick = (instance) => {
        const el = findByStatus(instance, false);

        if (el !== undefined) {
            applyLogic((el) => {
                if (el.status) {
                    el.color = "bg-[#4169E1]/50";
                }
                el.pageColor = "bg-slate-900";
                el.pageTranslateX = "-translate-x-3";
            }, instance);

            el.status = true;
            el.pageColor = "bg-[#4169E1]";
            el.pageTranslateX = "translate-x-4";
            el.color = "bg-[#4169E1]";

            el.element?.scrollIntoView({
                behavior: "smooth",
                block: "center", // untuk scroll vertikal (kita abaikan)
                inline: "center", // untuk scroll horizontal ke kiri elemen
            });
        }
    };

    const runPrevProgressCLick = (instance) => {
        for (let index = 0; index < 2; index++) {
            const el = findLastStatus(instance);
            if (index == 0 && el.id !== 1) {
                el.color = "bg-transparent hover:bg-[#4169E1]/30";
                el.status = false;
                el.pageColor = "bg-slate-900";
                el.pageTranslateX = "-translate-x-3";
            } else {
                el.color = "bg-[#4169E1]";
                el.pageColor = "bg-[#4169E1]";
                el.pageTranslateX = "translate-x-4";
            }

            el.element?.scrollIntoView({
                behavior: "smooth",
                block: "center", // untuk scroll vertikal (kita abaikan)
                inline: "center", // untuk scroll horizontal ke kiri elemen
            });
        }
    };

    const runScrollDetectStatus = async (instance) => {

        applyLogic((item) => {
            const reactEl = item.element.getBoundingClientRect().top;

            if (reactEl < viewPortHeight - animationPoint) {
                item.color = "bg-[#4169E1]/50";
                item.status = true;
                item.pageTranslateX = "-translate-x-3";
                item.pageColor = "bg-slate-900";
            } else {
                item.color = "bg-transparent hover:bg-[#4169E1]/30";
                item.pageColor = "bg-slate-900";
                item.pageTranslateX = "-translate-x-3";
                item.status = false;
            }
        }, instance);

        

        const elLast = findLastStatus(instance);
        elLast.color = "bg-[#4169E1]";
        elLast.pageColor = "bg-[#4169E1]";
        elLast.pageTranslateX = "translate-x-4";
    };

    return {
        runProvideClickGiveStatus,
        runNextProgressCLick,
        runPrevProgressCLick,
        runScrollDetectStatus,
    };
};
