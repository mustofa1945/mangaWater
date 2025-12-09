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
                    width: "w-full",
                    height: "h-full",
                },
                {
                    status : false,
                    id: 2,
                    name: "Fit Widht",
                    width: "w-1/2",
                    height: "h-full",
                },
                {
                    status : false,
                    id: 3,
                    name: "Fit Widht",
                    width: "w-full",
                    height: "h-[60dvh]",
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
                    width: "w-100",
                    height: "h-full",
                },
                {
                    status : false,
                    id: 2,
                    name: "Fit Height",
                    width: "w-full max-w-90",
                    height: "h-full",
                },
                {
                    status : false,
                    id: 3,
                    name: "Fit Height",
                    width: "w-full max-w-100",
                    height: "h-[60dvh]",
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
                    width: "w-[80dvh]",
                    height: "h-full",
                },
                {
                    status : false,
                    id: 2,
                    name: "Fit Both",
                    width: "w-1/4",
                    height: "h-full",
                },
                {
                    status : false,
                    id: 3,
                    name: "Fit Both",
                    width: "w-1/2",
                    height: "h-[60dvh]",
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
                    width: "w-full",
                    height: "h-full",
                },
                {
                    status : false,
                    id: 2,
                    name: "No Limit",
                    width: "w-1/2",
                    height: "h-full",
                },
                {
                    status : false,
                    id: 3,
                    name: "No Limit",
                    width: "w-full",
                    height: "h-[60dvh]",
                },
            ],
        },
    ]);


    return { mangaSizeSetting };
};
