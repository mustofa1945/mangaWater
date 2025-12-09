import { ref } from "vue";
export const useProvideDataStatusButton = () => {
    const dataButton = ref([
        {
            id: 1,
            title: "disabled",
            status: false,
            style: "translate-x-0 bg-gray-700",
            styleParent: "border-gray-700",
        },
        {
            id: 2,
            title: "enabled",
            status: true,
            style: "translate-x-4 bg-blue-600",
            styleParent: "border-blue-600",
        },
    ]);

    return { dataButton };
};
