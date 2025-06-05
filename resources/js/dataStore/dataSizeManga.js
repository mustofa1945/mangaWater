import { ref } from "vue";
export const useProvideDataSizeManga = () => {
    const mangaSizeSetting = ref([
        {
            status: false,
            type: "Fit Widht",
            typeSizes: [
                {
                    status : true,
                    id: 1,
                    icon: "fas fa-comment-alt",
                    name: "Fit Widht",
                    width: "full",
                    height: "full",
                },
                {
                    status : false,
                    id: 2,
                    name: "Fit Widht",
                    width: "1/2",
                    height: "full",
                },
                {
                    status : false,
                    id: 3,
                    name: "Fit Widht",
                    width: "full",
                    height: "[80vh]",
                },
            ],
        },
        {
            status: true,
            type: "Fit Height",
            typeSizes: [
                {
                    status : true,
                    id: 1,
                    icon: "fas fa-comment-alt",
                    name: "Fit Height",
                    width: "[80vh]",
                    height: "full",
                },
                {
                    status : false,
                    id: 2,
                    name: "Fit Height",
                    width: "1/4",
                    height: "full",
                },
                {
                    status : false,
                    id: 3,
                    name: "Fit Height",
                    width: "1/2",
                    height: "[80vh]",
                },
            ],
        },
        {
            status: false,
            type: "Fit Both",
            typeSizes: [
                {
                    status : true,
                    id: 1,
                    icon: "fas fa-comment-alt",
                    name: "Fit Both",
                    width: "[80vh]",
                    height: "full",
                },
                {
                    status : false,
                    id: 2,
                    name: "Fit Both",
                    width: "1/4",
                    height: "full",
                },
                {
                    status : false,
                    id: 3,
                    name: "Fit Both",
                    width: "1/2",
                    height: "[80vh]",
                },
            ],
        },
        {
            status: false,
            type: "No Limit",
            typeSizes: [
                {
                    status : true,
                    id: 1,
                    icon: "fas fa-comment-alt",
                    name: "No Limit",
                    width: "full",
                    height: "full",
                },
                {
                    status : false,
                    id: 2,
                    name: "No Limit",
                    width: "1/2",
                    height: "full",
                },
                {
                    status : false,
                    id: 3,
                    name: "No Limit",
                    width: "full",
                    height: "[80vh]",
                },
            ],
        },
    ]);


    return { mangaSizeSetting };
};
