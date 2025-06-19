import { useUtils } from "./utilsFunctionStore";
import { toRaw, watch } from "vue";

export const useProvideUtilsSlide = () => {
    const { delay , findLastStatus } = useUtils();

    const runTransformUpdate = (instance, numX) => {
        instance.forEach((el) => {
            el.translateX = `translate(${numX}vh)`;
        });
    };

    const set = (
        templateRef,
        dataSlider,
        isHaveBar = false,
        instanceBar = null
    ) => {
        watch(
            dataSlider,
            (sliders) => {
                sliders.forEach((el, index) => {
                    el.element = templateRef[index];
                    el.translateX = "translateX(0vh)";
                });

                const mid = Math.floor(sliders.length / 2);

                sliders[mid].element.scrollIntoView({
                    behavior: "instant",
                    inline: "start",
                });

                if (isHaveBar) {
                    for (let bar = 0; bar < 14; bar++) {
                        if (bar == 0) {
                            instanceBar.value.push({
                                id: bar,
                                status: true,
                                color: "bg-sky-600",
                            });
                        } else {
                            instanceBar.value.push({
                                id: bar,
                                status: false,
                                color: "bg-slate-800",
                            });
                        }
                    }
                }
            },
            { immediate: true, once: true }
        );
    };

    const slideCard = async (
        instance,
        deletePage,
        typePushMethod,
        afterNoneTransition,
        property
    ) => {
        const deleteEl = {
            ...toRaw(deletePage),
        };

        typePushMethod(deleteEl);

        property.transition = "";

        runTransformUpdate(instance, property.numX);

        await delay(1);

        afterNoneTransition();

        property.transition = `transition-all ${property.duration}`;

        runTransformUpdate(instance, property.numX);
    };

    const nextSlide = (offSite, property, dataSlider) => {
        property.value.numX -= offSite;

        const dataDelete = dataSlider.value.pop();

        slideCard(
            dataSlider.value,
            dataDelete,
            (data) => {
                dataSlider.value.unshift(data);
            },
            () => {
                property.value.numX += offSite;
            },
            property.value
        );
    };

    const prevSLide = (offSite, property, dataSlider) => {
        property.value.numX += offSite;

        const dataDelete = dataSlider.value.shift();

        slideCard(
            dataSlider.value,
            dataDelete,
            (data) => {
                dataSlider.value.push(data);
            },
            () => {
                property.value.numX -= offSite;
            },
            property.value
        );
    };

     const swicthBar = (callBack , instanceBar) => {
        const findEl = findLastStatus(instanceBar.value);
        findEl.status = false;
        findEl.color = "bg-slate-800";
        const index = callBack(findEl.id);
        instanceBar.value[index].status = true;
        instanceBar.value[index].color = "bg-sky-600";
    };

    return { runTransformUpdate, slideCard, nextSlide, prevSLide, set , swicthBar};
};
