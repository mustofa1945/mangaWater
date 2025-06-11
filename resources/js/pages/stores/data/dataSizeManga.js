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
                    height: "h-[60vh]",
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
                    width: "w-[80vh]",
                    height: "h-full",
                },
                {
                    status : false,
                    id: 2,
                    name: "Fit Height",
                    width: "w-1/4",
                    height: "h-full",
                },
                {
                    status : false,
                    id: 3,
                    name: "Fit Height",
                    width: "w-1/2",
                    height: "h-[60vh]",
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
                    width: "w-[80vh]",
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
                    height: "h-[60vh]",
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
                    height: "h-[60vh]",
                },
            ],
        },
    ]);


    return { mangaSizeSetting };
};
