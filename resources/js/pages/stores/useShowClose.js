import { defineStore } from "pinia";
import { useProvideUtilsData } from "../utils/utilsDatastore";
import { computed } from "vue";
import { useUtils } from "../utils/utilsFunctionStore";
import { useProvideDataShowAndClose } from "../../dataStore/dataShowAndClose";

export const useShowClose = defineStore("showClose", () => {
    const { modalError, langActive, modalLogin, zIndex } =
        useProvideUtilsData();

    const {
        dataShowAndClose: { navReadMenu, comment, header },
    } = useProvideDataShowAndClose();

    const { findByStatus, switchActive } = useUtils();

    const readNavReadMenu = computed(() => findByStatus(navReadMenu));

    const readComment = computed(() => findByStatus(comment));

    const readHeader = computed(() => findByStatus(header));

    const showOrHidden = (proxy, partialProxy, page = []) => {
        //Delete semua status pages yang active
        page.forEach((el) => {
            el.status = false;
        });

        switchActive(partialProxy, proxy);
    };

    const { changeStatus } = useUtils();

    const showOrClose = (proxy) => changeStatus(proxy);

    return {
        modalError,
        showOrClose,
        langActive,
        modalLogin,
        zIndex,
        readNavReadMenu,
        navReadMenu,
        showOrHidden,
        readComment,
        comment,
        header,
        readHeader,
    };
});
