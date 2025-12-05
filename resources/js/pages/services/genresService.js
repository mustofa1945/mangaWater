import { handleApi } from "../api/api";

export const handleGenresService = async () => {
    
    const genres = await handleApi("/data/genres.json");

    return genres;
};