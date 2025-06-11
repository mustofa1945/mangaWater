import { defineStore } from "pinia";
import { useProvideUtilsData } from "../utils/utilsDatastore";
import { computed, reactive, toRefs } from "vue";
import { useUtils } from "../utils/utilsFunctionStore";
import { useProvideDataShowAndClose } from "./data/dataShowAndClose";

export const useShowClose = defineStore("showClose", () => {
    const { langActive } =
        useProvideUtilsData();

    const {
        dataShowAndClose: { navReadMenu, comment, header },
    } = useProvideDataShowAndClose();
    
    const { findByStatus, switchActive , changeStatus } = useUtils()
    // Best Practice Dalam menangani destruc computed
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

    const showOrClose = (proxy) => changeStatus(proxy);

    return {
        showOrClose,
        header,
        comment,
        navReadMenu,
        langActive,
        showOrHidden,
        createShowCloseComputedGroup,
    };
});
