import { isProxy } from "vue";
import { useThemeGlobal } from "../theme/globalStyle";
export const useUtils = () => {
    const applyLogic = (callback, data) => data.forEach((el) => callback(el));

    const findByStatus = (instance, value = true) =>
        instance.find((el) => el.status === value);

    const findLastStatus = (instance, value = true) =>
        instance.findLast((el) => el.status === value);

    const pushElement = (instance, value) => instance.push(value);

    const wait = (callback, timeout) => setTimeout(() => callback(), timeout);

    const changeStatus = (proxy) =>
        (proxy.status = proxy.status ? false : true);

    //Function untuk berganti mode selanjutnya
    const getNextActiveIndex = (data) => {
        let index = data.findIndex((el) => el.status) + 1;
        //reset jika index sudah di bagian lastIndex dari suatu element
        if (data.length == index) index = 0;

        return index;
    };
    //Function untuk ganti mode secara ber urutan
    const switchActive = (elementReactive, elementsReactive) => {
        try {
            if (!isProxy(elementReactive) && !isProxy(elementsReactive))
                throw {
                    message: "is not proxy",
                    el: {
                        activeEl: elementReactive,
                        swicthReactive: elementsReactive,
                    },
                };
            const findIndex = getNextActiveIndex(elementsReactive);
            //Matikan mode yang sekarang
            elementReactive.status = false;
            //Activekan mode selanjutnya
            elementsReactive[findIndex].status = true;
        } catch (error) {
            console.error(error);
        }
    };

    const choiseType = (proxy, id) => {
        const { border: b } = useThemeGlobal();

        applyLogic((el) => {
            el.status = el.id === id;
            el.border = el.id === id ? b.colorful : b.transparent;
        }, proxy);
    };

    const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

    const selectById = (proxy, id, ctxTrue, ctxFal) => {
        proxy.forEach((el) => {
            el.status = id == lang.id;
            el.style = id == lang.id ? ctxTrue : ctxFal;
        });
    };

    return {
        switchActive,
        wait,
        findLastStatus,
        pushElement,
        applyLogic,
        findByStatus,
        choiseType,
        changeStatus,
        delay,
        selectById,
    };
};

export const useUtilsDOM = () => {};
