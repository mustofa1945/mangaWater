import { ref, watch, toRaw, nextTick, computed } from "vue";
import { dataManga } from "../../data/dataManga";
import { useUtils } from "../utils/utilsFunctionStore";


export const useSlider = () => {
    const dataSlider = ref([...dataManga]);

    const transition = ref("transition-all duration-400");

    const numX = ref(0);

    const readTransition = computed(() => transition.value);

    const { delay } = useUtils();

    const setElement = (templateRef) => {
        watch(
            dataSlider,
            (sliders) => {
                sliders.forEach((el, index) => {
                    el.element = templateRef[index];
                    el.translateX = "translateX(0vh)";
                });
                  
                const mid = Math.floor(dataSlider.value.length / 2)

                dataSlider.value[mid].element.scrollIntoView({
                    behavior : "instant",
                    inline : "end",
                    block : "nearest"
                })
            },
            { immediate: true, once: true }
        );
    };

    const prev = async () => {
        numX.value += 110;

        const deleteEl = {
            ...toRaw(dataSlider.value.shift()),
        };
        dataSlider.value.push(deleteEl);

        transition.value = "";

        dataSlider.value.forEach((el) => {
            el.translateX = `translate(${numX.value}vh)`;
        });

        await delay(10);

        numX.value -= 110;

        transition.value = "transition-all duration-500";

        dataSlider.value.forEach((el) => {
            el.translateX = `translateX(${numX.value}vh)`;
        });
    };

    const next = async () => {
        numX.value -= 110;
        const deleteEl = {
            ...toRaw(dataSlider.value.pop()),
        };
        dataSlider.value.unshift(deleteEl);

        transition.value = "";

        dataSlider.value.forEach((el) => {
            el.translateX = `translate(${numX.value}vh)`;
        });

        await delay(10);

        numX.value += 110;

        transition.value = "transition-all duration-500";

        dataSlider.value.forEach((el) => {
            el.translateX = `translateX(${numX.value}vh)`;
        });
    };

    return {
        dataSlider,
        next,
        prev,
        setElement,
        computedSlider: { readTransition },
    };
};
