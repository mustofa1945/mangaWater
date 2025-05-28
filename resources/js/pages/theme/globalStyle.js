export const useThemeGlobal = () => {
    const border = {
        transparent:
            "contrast-50 hover:bg-gray-700 hover:contrast-100 border-transparent hover:border-blue-600",
        colorful: "contrast-150  border-blue-600",
    };

    return { border };
};
