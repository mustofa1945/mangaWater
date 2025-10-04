import { useUtils } from "./utilsFunctionStore";
import { toRaw, watch } from "vue";

const { delay, findLastStatus, findByStatus, switchActive } = useUtils();

export const useProvideUtilsSlide = () => {
    const runTransformUpdate = (instance, numX) => {
        instance.forEach((el) => {
            el.translateX = `translate(${numX}%)`;
        });
    };

    const set = (
        templateRef,
        dataSlider,
        isHaveBar = false,
        instanceBar = null
    ) => {
        console.log(templateRef);
        watch(
            dataSlider,
            (sliders) => {
                sliders.forEach((el, index) => {
                    el.element = templateRef[index];
                    el.translateX = "translateX(0%)";
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

        property.transition = `transition-all duration-${property.duration}`;

        runTransformUpdate(instance, property.numX);
    };

    const nextSlide = async (isSlide, offSite, property, dataSlider) => {
        if (isSlide.value) return;

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

        await delay(property.value.duration);

        isSlide.value = false;
    };

    const prevSLide = async (isSlide, offSite, property, dataSlider) => {
        if (isSlide.value) return;

        isSlide.value = true;

        property.value.numX += 0;

        const dataDelete = [...toRaw(dataSlider.value)].shift();

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

        await delay(property.value.duration);

        property.value.transition = "";

        property.value.numX += offSite;

        runTransformUpdate(dataSlider.value, property.value.numX);

        dataSlider.value.shift();

        isSlide.value = false;
    };

    const swicthBar = async (isSlideBar, callBack, instanceBar) => {
        if (isSlideBar.value) return;

        isSlideBar.value = true;

        const findEl = findLastStatus(instanceBar.value);
        findEl.status = false;
        findEl.color = "bg-slate-800";
        const index = callBack(findEl.id);
        instanceBar.value[index].status = true;
        instanceBar.value[index].color = "bg-sky-600";

        await delay(200);

        isSlideBar.value = false;
    };

    return {
        runTransformUpdate,
        slideCard,
        nextSlide,
        prevSLide,
        set,
        swicthBar,
    };
};

export const useCompoUtilsDropDown = () => {
    const selectDropById = (id, dropDown) => {
        const findDrop = dropDown.value.find((el) => el.id === id);
        findDrop.status = !findDrop.status;
    };

    const splitDataDropDownById = (id, dropDown) => {
        return {
            target: dropDown.value.find((el) => el.id === id),
            reverseTarget: dropDown.value.filter((el) => el.id !== id),
        };
    };

    const dropdown = async (id, dropDown) => {
        const { target, reverseTarget } = splitDataDropDownById(id, dropDown);

        const elStatusActive = findByStatus(target.animProper);
        // Coba cari elemen aktif, jika tidak ada, cari elemen non-aktif sebagai fallback
        const findReverseActive =
            findByStatus(reverseTarget) ?? findByStatus(reverseTarget, false);

        if (!target.status) {
            selectDropById(id, dropDown);
            await delay(10);
            switchActive(elStatusActive, target.animProper);
            //Tutup ReverseDropdown
            findReverseActive.animProper.forEach((anim) => {
                anim.status = anim.id === 1 ? true : false;
            });
            await delay(300);
            findReverseActive.status = false;
        } else {
            switchActive(elStatusActive, target.animProper);
            await delay(300);
            selectDropById(id, dropDown);
        }
    };

    const genaratePropertyObjects = (data) =>
        data.map((el, index) => ({
            id: index + 1,
            status: false,
            title: el,
            icon: "fa-regular fa-square",
            bg: "",
        }));

    return { selectDropById, dropdown, genaratePropertyObjects };
};
