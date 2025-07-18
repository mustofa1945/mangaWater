import { mangaGenres, types } from "../../../data/dataManga";

import { useCompoUtilsDropDown } from "../../utils/composabeUtils";

const year = [];

for (let i = 0; i <= 25; i++) {
    if (i >= 10) {
        year.push(`20${i}`);
    } else {
        year.push(`200${i}`);
    }
}

const {
    manga,
    status,
    length,
    recently,
    year: makedYear,
    langueges
} = {
    manga: ["manga", "One-Shot", "Doujinshi", "Novel", "Manhua", "Manwua"],
    langueges: [
        "English",
        "French",
        "Spanish",
        "Spanish (LATAM)",
        "Portuguese",
        "Portuguese (Br)",
        "Japanese",
    ],
    status: [
        "Compleated",
        "Releasing",
        "On Hiatus",
        "Discontinued",
        "Not Yet Published",
    ],
    length: [
        ">= 1 chapters",
        ">= 3 chapters",
        ">= 5 chapters",
        ">= 10 chapters",
        ">= 20 chapters",
        ">= 30 chapters",
        ">= 40 chapters",
        ">= 50 chapters",
    ],
    recently: [
        "Recently Update",
        "Recently Added",
        "Release Date",
        "Trending",
        "Name A-Z",
        "Scores",
        "MAL Scores",
        "Most Viewed",
        "Most Favourite",
    ],
    year,
};

export const useProvideDataDropDown = () => {
    const { genaratePropertyObjects: runGenerate } = useCompoUtilsDropDown();

    const {
        objManga,
        objLength,
        objMangaGenres,
        objRecently,
        objYear,
        objStatus,
        objLang
    } = {
        objManga: runGenerate(manga),
        objMangaGenres: runGenerate(mangaGenres),
        objStatus: runGenerate(status),
        objLength: runGenerate(length),
        objRecently: runGenerate(recently),
        objYear: runGenerate(makedYear),
        objLang:runGenerate(langueges)
    };

    const propertyDropdownSearch = [
        {
            id: 1,
            placeholder: "Manga",
            dataDrop: objManga,
            property: "w-[7.7rem] flex-col",
            height: "h-[11.2rem]",
            event: null,
        },
        {
            id: 2,
            placeholder: "Genre",
            dataDrop: objMangaGenres,
            property: "max-[950px]:hidden flex w-[35rem] flex-wrap ",
            width: "w-[24%]",
            height: "h-[20rem]",
            event: null,
        },
        {
            id: 3,
            placeholder: "Status",
            dataDrop: objStatus,
            property: " w-[11rem]  flex-col",
            height: "h-[9.5rem]",
            event: null,
        },
        {
            id: 4,
            placeholder: "Languege",
            dataDrop: objLang,
            property: "w-[9.5rem]  flex-col",
            height: "h-[13rem]",
            event: null,
        },
        {
            id: 5,
            placeholder: "Year",
            dataDrop: objYear,
            property: "w-[25rem] max-[768px]:hidden flex-wrap",
            width: "w-[24%]",
            height: "h-[13rem]",
            event: null,
        },
        {
            id: 6,
            placeholder: "Lenght",
            dataDrop: objLength,
            property: "w-[9rem] flex-col text-[14px]",
            height: "h-[13.1rem]",
            event: null,
        },
        {
            id: 7,
            placeholder: "Recently updated",
            dataDrop: objRecently,
            property: "w-[12rem] right-0 flex-col",
            height: "h-[16.5rem]",
            event: null,
        },
    ];


    const propertyDropDownHeader =  [
            {
            id: 1,
            title: "Types",
            dataDrop: types,
            property: "w-[9rem] flex-col text-[16px]",
            height : 'h-[10rem]',
            childWidth : null
        },
        {
            id: 2,
            title: "Genres",
            dataDrop: mangaGenres,
            property: "flex-wrap w-[30rem] text-[15px]",
            height : 'h-[25rem] ',
            childWidth : 'w-[33%] h-[1.5rem] flex items-center'
        },
    ]

    return { propertyDropdownSearch , propertyDropDownHeader};
};
