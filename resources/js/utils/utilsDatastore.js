import { reactive } from "vue";

export const useProvideUtilsData = () => {
    return reactive({
        langActive: {
            status: false,
        },
        setting : {
            status : false
        }
    });
};
