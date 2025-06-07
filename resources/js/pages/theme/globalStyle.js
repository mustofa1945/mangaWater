export const useThemeGlobal = () => {
    const border = {
        transparent:
            "contrast-50 hover:bg-gray-700 hover:contrast-150 text-gray-300  border-blue-600 saturate-80 hover:border-blue-600",
        colorful: "contrast-150  bg-gray-700 border-blue-600 saturate-80",
    };

    return { border };
};
