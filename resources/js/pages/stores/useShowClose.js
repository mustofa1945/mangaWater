import { defineStore } from "pinia";
import { useProvideUtilsData } from "../utils/utilsDatastore";
import { computed, reactive, toRefs, watchEffect, toRef } from "vue";
import { useUtils } from "../utils/utilsFunctionStore";
import { useProvideDataShowAndClose } from "../../dataStore/dataShowAndClose";

export const useShowClose = defineStore("showClose", () => {
    const { modalError, langActive, modalLogin } =
        useProvideUtilsData();

    const {
        dataShowAndClose: { navReadMenu, comment, header },
    } = useProvideDataShowAndClose();

    const { findByStatus, switchActive } = useUtils();

    //Best Practice Dalam menangani destruc computed
    const createShowCloseComputedGroup = () => {

        const groups = reactive({
            readNavReadMenu: computed(() => findByStatus(navReadMenu)),
            readComment: computed(() => findByStatus(comment)),
            readHeader: computed(() => findByStatus(header))
        })

        return toRefs(groups)
    }

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
        header,
        comment,
        navReadMenu,
        langActive,
        modalLogin,
        showOrHidden,
        createShowCloseComputedGroup,
    };
});
