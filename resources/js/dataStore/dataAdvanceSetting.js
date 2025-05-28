import { reactive, ref } from "vue";
export const useProvideDataAdvanceSetting = () => {
    const advanceSetting = ref([
        {
            id: 1,
            status: true,
            title: "Page Layout",
            borderBottom: "translate-x-0",
        },
        {
            id: 2,
            status: false,
            title: "Image",
            borderBottom: "translate-x-[100%]",
        },
        {
            id: 3,
            status: false,
            title: "Shortcut",
            borderBottom: "translate-x-[200%]",
        },
    ]);

    const buttonType = reactive({
        swip: [
            {
                id: 1,
                status: false,
                title: "Enable left/right swiping",
            },
        ],
        imageSizing: [
            {
                id: 2,
                status: false,
                title: "Contain to width",
            },
            {
                id: 3,
                status: false,
                title: "Contain to height",
            },
            {
                id: 4,
                status: false,
                title: "Stretch small pages",
            },
            {
                id: 5,
                status: false,
                title: "Limit max width",
            },
            {
                id: 6,
                status: false,
                title: "Limit max height",
            },
        ],
        imageColoring: [
            {
                id: 7,
                status: false,
                title: "Greyscale pages",
            },
            {
                id: 8,
                status: false,
                title: "Dim pages",
            },
        ],
    });

    return { advanceSetting, buttonType };
};
