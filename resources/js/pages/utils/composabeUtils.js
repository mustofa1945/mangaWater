import { useUtils } from "./utilsFunctionStore";
import { toRaw } from "vue";

export const useProvideUtilsSlide = () => {
    const { delay } = useUtils();

    const runTransformUpdate = (instance, numX) => {
        instance.forEach((el) => {
            el.translateX = `translate(${numX}vh)`;
        });
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

    return { runTransformUpdate, slideCard };
};
