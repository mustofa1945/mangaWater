import { computed, isProxy, reactive, toRefs } from "vue";
import { isReactive } from "vue";
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

    return {
        switchActive,
        wait,
        findLastStatus,
        pushElement,
        applyLogic,
        findByStatus,
        choiseType,
        changeStatus,
    };
};

export const useUtilsReactive = () => {

    const wrapRef = (callback) => toRefs(callback())

    return { wrapRef }
    //     const createShowCloseComputedGroup = () => {

    //         const getGroup = shallowRef(null)

    //         const setKeyAndValue = ref([
    //             {
    //                 key: "readNavReadMenu",
    //                 value: navReadMenu
    //             },
    //             {
    //                 key: "readComment",
    //                 value: comment
    //             },
    //             {
    //                 key: "readHeader",
    //                 value: header
    //             },
    //         ])

    //         watch(setKeyAndValue, (newValue) => {
    //             getGroup.value = createGroupComputed(newValue)
    //         }, { deep: true, immediate: true })

    //         return getGroup
    //     }

    //     const { findByStatus } = useUtils()

    //     const createGroupComputed = (itemComputed) => {

    //         const isValueNull = itemComputed.some(el => el.key == undefined || el.value == undefined)

    //         if (isValueNull) return console.error("Value and key cant be undifined")

    //         const createdGroup = reactive({});

    //         for (let i = 0; i < itemComputed.length; i++) {
    //             if (!createdGroup[itemComputed[i].key]) {
    //                 createdGroup[itemComputed[i].key] = findByStatus(itemComputed[i].value)
    //             } else {
    //                 return console.error("item cant be same")
    //             }
    //         }
    //         return toRefs(createdGroup)
    //     }

    //     return { createGroupComputed }
}


