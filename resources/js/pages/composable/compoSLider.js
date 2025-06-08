import { ref, watch, computed  } from "vue";
import { dataManga, dataRecentlyUpdate } from "../../data/dataManga";
import { useUtils } from "../utils/utilsFunctionStore";
import { useProvideUtilsSlide } from "../utils/composabeUtils";

export const useSlider = () => {
    const dataSlider = ref([...dataManga]);

    const property = ref({
        transition: "transition-all duration-400",
        numX: 0,
        duration : "duration-500"
    });

    const { slideCard } = useProvideUtilsSlide();

    const readProperty = computed(() => property.value);

    const setElement = (templateRef) => {
        watch(
            dataSlider,
            (sliders) => {
                sliders.forEach((el, index) => {
                    el.element = templateRef[index];
                    el.translateX = "translateX(0vh)";
                });

                const mid = Math.floor(dataSlider.value.length / 2);

                dataSlider.value[mid].element.scrollIntoView({
                    behavior: "instant",
                    inline: "end",
                    block: "nearest",
                });
            },
            { immediate: true, once: true }
        );
    };

    const next = () => {
        property.value.numX -= 110;

        const dataDelete = dataSlider.value.pop();

        slideCard(
            dataSlider.value,
            dataDelete,
            (data) => {
                dataSlider.value.unshift(data);
            },
            () => {
                property.value.numX += 110;
            },
            property.value
        );
    };

    const prev = async () => {
        property.value.numX += 110;

        const dataDelete = dataSlider.value.shift();

        slideCard(
            dataSlider.value,
            dataDelete,
            (data) => {
                dataSlider.value.push(data);
            },
            () => {
                property.value.numX -= 110;
            },
            property.value
        );
    };

    return {
        dataSlider,
        next,
        prev,
        setElement,
        computedSlider: { readProperty },
    };
};

export const useSliderProgressBar = () => {
    const { findLastStatus } = useUtils();

    const dataSubSlider = ref([...dataRecentlyUpdate]);

    const instanceBar = ref([]);

    const property = ref({
        transition: "transition-all duration-400",
        numX: 0,
        duration : "duration-350"
    });

    const { slideCard } = useProvideUtilsSlide();

    const readPropertyBar = computed(() => property.value);

    // const readDataSubSlider = computed(() => dataSubSlider)

    const setSubElement = (templateRef) => {
        watch(
            dataSubSlider,
            (sliders) => {
                sliders.forEach((el, index) => {
                    el.element = templateRef[index];
                    el.translateX = "translateX(0vh)";
                });

                const mid = Math.floor(sliders.length / 2);

                sliders[mid].element.scrollIntoView({
                    behavior: "instant",
                    inline: "end",
                    block: "nearest",
                });

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

                console.table(instanceBar.value);
            },
            { immediate: true, once: true }
        );
    };

    const swicthBar = (callBack) => {
        const findEl = findLastStatus(instanceBar.value);
        findEl.status = false;
        findEl.color = "bg-slate-800";
        const index = callBack(findEl.id);
        instanceBar.value[index].status = true;
        instanceBar.value[index].color = "bg-sky-600";
    };

    const nextSub = () => {
        property.value.numX -= 35;

        const dataDelete = dataSubSlider.value.pop();

        slideCard(
            dataSubSlider.value,
            dataDelete,
            (data) => {
                console.log(data);
                dataSubSlider.value.unshift(data);
            },
            () => {
                property.value.numX += 35;
            },
            property.value
        );
        swicthBar((id) => (id == instanceBar.value.length - 1 ? 0 : id + 1));
    };

    const prevSub = () => {
        property.value.numX += 35;
        const dataDelete = dataSubSlider.value.shift();

        slideCard(
            dataSubSlider.value,
            dataDelete,
            (data) => {
                dataSubSlider.value.push(data);
            },
            () => {
                property.value.numX -= 35;
            },
            property.value
        );

        swicthBar((id) => (id == 0 ? instanceBar.value.length - 1 : id - 1));
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
