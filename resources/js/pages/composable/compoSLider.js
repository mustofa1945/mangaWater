import { ref, computed } from "vue";
import { dataManga, dataRecentlyUpdate } from "../../data/dataManga";
import { useProvideUtilsSlide } from "../utils/composabeUtils";

const { nextSlide, prevSLide, set, swicthBar } = useProvideUtilsSlide();

export const useSlider = () => {
    let isSlide = ref(false);

    const dataSlider = ref([...dataManga]);

    const property = ref({
        transition: "transition-all duration-400",
        numX: 0,
        duration: 300,
    });

    const readProperty = computed(() => property.value);

    const setElement = (cards) => {
        const width =
            window.innerWidth >= 1000
                ? `${window.innerWidth / 2 - 35}`
                : `${window.innerWidth - 35}`;

        cards.forEach((el) => {
            el.style.width = `${width}px`;
        });
        set(cards, dataSlider);
    };

    const next = () => nextSlide(isSlide, 100, property, dataSlider);

    const prev = () => prevSLide(isSlide, 105, property, dataSlider);

    return {
        dataSlider,
        next,
        prev,
        setElement,
        computedSlider: { readProperty },
    };
};

export const useSliderProgressBar = () => {
    let isSlide = ref(false);

    let isSlideBar = ref(false);

    const dataSubSlider = ref([...dataRecentlyUpdate]);

    const instanceBar = ref([]);

    const property = ref({
        transition: "transition-all duration-200",
        numX: 0,
        duration: 200,
    });

    const readPropertyBar = computed(() => property.value);

    const setSubElement = (templateRef) =>
        set(templateRef, dataSubSlider, true, instanceBar);

    const nextSub = () => {
        nextSlide(isSlide, 100, property, dataSubSlider);
        swicthBar(
            isSlideBar,
            (id) => (id == instanceBar.value.length - 1 ? 0 : id + 1),
            instanceBar
        );
    };

    const prevSub = () => {
        prevSLide(isSlide, 104, property, dataSubSlider);

        swicthBar(
            isSlideBar,
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
