import { reactive, } from "vue";

export const useProvideDataShowAndClose = () => {

    const dataShowAndClose = reactive({
        modalError: [
            {
                id: 1,
                status: false,
                animation: "AnimShow",
            },
            {
                id: 2,
                status: true,
                animation: "AnimClose",
            },
        ],

        navReadMenu: [
            {
                id: 1,
                status: false,
                readLayoutWidth: "min-[1200px]:w-[78%] w-full",
                instanceParent : 'w-[22rem]',
                delayEffect: {
                    inClosure: {
                        property: "transform",
                        timeout: 10,
                        transform: "translateY(0)",
                    },
                    outClosure: {
                        property: "display",
                        display: "flex",
                    },
                },
            },
            {
                id: 2,
                status: true,
                readLayoutWidth: "w-full",
                instanceParent : 'w-[0rem]',
                delayEffect: {
                    inClosure: {
                        property: "display",
                        timeout: 250,
                        display: "none",
                    },
                    outClosure: {
                        property: "transform",
                        transform: "translateX(100%)",
                    },
                },
            },
        ],

        comment: [
            {
                id: 1,
                status: true,
                delayEffect: {
                    inClosure: {
                        property: "display",
                        timeout: 500,
                        display: "none",
                    },
                    outClosure: {
                        property: "width",
                        width: "0",
                    },
                },
            },
            {
                id: 2,
                status: false,
                delayEffect: {
                    inClosure: {
                        property: "width",
                        timeout: 10,
                        width: "150dvh",
                    },
                    outClosure: {
                        property: "display",
                        display: "flex",
                    },
                },
            },
        ],

        header: [
            {
                id: 1,
                status: true,
                title: "Header Sticky",
                scrollHeader : "h-[92dvh]",
                delayEffect: {
                    inClosure: {
                        property: "transform",
                        timeout: 10,
                        transform: "translateY(0)",
                    },
                    outClosure: {
                        property: "display",
                        display: "flex",
                    },
                },
            },
            {
                id: 2,
                status: false,
                title: "Header Hidden",
                scrollHeader : "h-[100dvh]", 
                delayEffect: {
                    inClosure: {
                        property: "display",
                        timeout: 250,
                        display: "none",
                    },
                    outClosure: {
                        property: "transform",
                        transform: "translateY(-100%)",
                    },
                },
            },
        ],
    });


    return { dataShowAndClose };
};
