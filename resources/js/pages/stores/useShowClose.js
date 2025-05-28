import { defineStore } from "pinia";
import { useProvideUtilsData } from "../utils/utilsDatastore";
import { useUtils } from "../utils/utilsFunctionStore";

export const useShowClose = defineStore("showClose", () => {
    const { modalError, langActive, modalLogin, zIndex } =
        useProvideUtilsData();

    const { changeStatus } = useUtils();
    
    const showOrClose = (proxy) => changeStatus(proxy);

    return {
        modalError,
        showOrClose,
        langActive,
        modalLogin,
        zIndex,
    };
});
