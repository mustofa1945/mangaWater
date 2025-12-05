import { handleApi } from "../api/api";

export const handleTypeService = async () => {
    
    const type = await handleApi("/data/type.json");

    return type;
};
