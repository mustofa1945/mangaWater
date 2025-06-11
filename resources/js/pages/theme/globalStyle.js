export const useThemeGlobal = () => {
    const border = {
        transparent:
            "contrast-50 hover:bg-gray-700 hover:contrast-150 text-gray-300  border-blue-600 saturate-80 hover:border-blue-600",
        colorful: "contrast-150  bg-gray-700 border-blue-600 saturate-80",
    };

    const templateStyleFade = {
        status: false,
        timeDelay: 500,
        style: [
            {
                id: 1,
                status: true,
                style: "-translate-y-[20vh] opacity-0 transition-all duration-500",
            },
            {
                id: 2,
                status: false,
                style: "translate-y-0 opacity-100  transition-all duration-500",
            },
        ],
    };

    const templateStyleDrop = {
        status: false,
        timeDelay: 300,
        style: [
            {
                id: 1,
                status: true,
                style: "h-0  transition-all duration-300",
            },
            {
                id: 2,
                status: false,
                style: "h-42 transition-all duration-300",
            },
        ],
    };

    const templateDropDown = [
        {
            id: 1,
            status: true,
            height: `h-0 duration-500  transition-all `,
            delay : 10
        },
        {
            id: 2,
            status: false,
            height: null ,
            delay : null
        },
    ];

    return { border, templateStyleDrop, templateStyleFade , templateDropDown};
};
