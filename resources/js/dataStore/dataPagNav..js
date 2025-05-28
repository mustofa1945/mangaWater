import { reactive , computed } from "vue";
import { useUtils } from "../pages/utils/utilsFunctionStore";
export const useProvidePagNav = () => {
    const pagNavUpdate = reactive({
        main: [
            {
                status: true,
                width: "[75%]",
            },
            {
                status: false,
                width: "full",
            },
        ],
        nav: {
            status: true,
            time: 10,
            width: "[25%]",
            display: "flex",
        },
        comment: {
            status: true,
            display: "hidden",
            width: "0",
        },
        header: {
            status: true,
            display: undefined,
            translateY: "0",
        },
    });

    const { nav, comment, main, header } = pagNavUpdate;

    const { readProxy, readProxyByStatus , findByStatus } = useUtils();

    const listComputed = {
        getMain: computed(() => findByStatus(main)),
        getNav: readProxy(nav).value,
        getComment: readProxy(comment).value,
        getHeader: readProxy(header).value,
    };

    return {
        pagNavUpdate,
        listComputed,
        eachItemProxy: {
            nav,
            comment,
            main,
            header,
        },
    };
};
