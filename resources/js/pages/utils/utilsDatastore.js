import { reactive, ref } from "vue";

export const useProvideUtilsData = () => {
    return reactive({
        modalError: {
            status: false,
        },
        langActive: {
            status: false,
        },
        modalLogin: {
            status: false, 
        },
        setting : {
            status : false
        }
    });
};
