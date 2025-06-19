import { ref, computed } from "vue";
import { dataManga, dataRecentlyUpdate } from "../../data/dataManga";
import { useProvideUtilsSlide } from "../utils/composabeUtils";

const { nextSlide, prevSLide, set, swicthBar } = useProvideUtilsSlide();

export const useSlider = () => {
    const dataSlider = ref([...dataManga]);

    const property = ref({
        transition: "transition-all duration-400",
        numX: 0,
        duration: "duration-500",
    });

    const readProperty = computed(() => property.value);

    const setElement = (templateRef) => set(templateRef, dataSlider);

    const next = () => nextSlide(103, property, dataSlider);

    const prev = () => prevSLide(103, property, dataSlider);

    return {
        dataSlider,
        next,
        prev,
        setElement,
        computedSlider: { readProperty },
    };
};

export const useSliderProgressBar = () => {

    const dataSubSlider = ref([...dataRecentlyUpdate]);

    const instanceBar = ref([]);

    const property = ref({
        transition: "transition-all duration-400",
        numX: 0,
        duration: "duration-350",
    });

    const readPropertyBar = computed(() => property.value);

    const setSubElement = (templateRef) =>
        set(templateRef, dataSubSlider, true, instanceBar);

    const nextSub = () => {
        nextSlide(35, property, dataSubSlider);
        swicthBar(
            (id) => (id == instanceBar.value.length - 1 ? 0 : id + 1),
            instanceBar
        );
    };

    const prevSub = () => {
        prevSLide(35, property, dataSubSlider);
        swicthBar(
            (id) => (id == 0 ? instanceBar.value.length - 1 : id - 1),
            instanceBar
        );
    };

    return {
        setSubElement,
        dataSubSlider,
        nextSub,
        prevSub,
        instanceBar,
        computedSliderBar: { readPropertyBar },
    };
};
