import { useThemeGlobal } from "../pages/theme/globalStyle";
import { mangaGenres } from "./dataManga";

const langueges = [
    "English",
    "French",
    "Spanish",
    "Spanish (LATAM)",
    "Portuguese",
    "Portuguese (Br)",
    "Japanese",
];

const Manga = ["manga", "One-Shot", "Doujinshi", "Novel", "Manhua", "Manwua"];

const status = [
    "Compleated",
    "Releasing",
    "On Hiatus",
    "Discontinued",
    "Not Yet Published",
];

const length = [
    ">= 1 chapters",
    ">= 3 chapters",
    ">= 5 chapters",
    ">= 10 chapters",
    ">= 20 chapters",
    ">= 30 chapters",
    ">= 40 chapters",
    ">= 50 chapters",
];

const recently = [
    "Recently Update",
    "Recently Added",
    "Release Date",
    "Trending",
    "Name A-Z",
    "Scores",
    "MAL Scores",
    "Most Viewed",
    "Most Favourite",
];

const changeToObj = (data) =>
    data.map((el, index) => ({
        id: index + 1,
        status: false,
        title: el,
        icon: "fa-regular fa-square",
        bg: "",
    }));

const year = [];

for (let i = 0; i <= 25; i++) {
    if (i >= 10) {
        year.push(`20${i}`);
    } else {
        year.push(`200${i}`);
    }
}

const objManga = changeToObj(Manga);

const objMangaGenres = changeToObj(mangaGenres);

const objStatus = changeToObj(status);

const objLang = changeToObj(langueges);

const objLength = changeToObj(length);

const objRecently = changeToObj(recently);

const objYear = changeToObj(year);

export const datas = [
    {
        id: 1,
        placeholder: "Manga",
        dataDrop: objManga,
        property: "w-full  flex-col",
        height: "h-[24dvh]",
    },
    {
        id: 2,
        placeholder: "Genre",
        dataDrop: objMangaGenres,
        property: "w-[100dvh] pl-2  flex-wrap",
        width: "w-[24%]",
        height: "h-[41dvh]"
    },
    {
        id: 3,
        placeholder: "Status",
        dataDrop: objStatus,
        property: " w-[30dvh]  flex-col",
        height:  "h-[24dvh]",
    },
    {
        id: 4,
        placeholder: "Languege",
        dataDrop: objLang,
        property: " w-[30dvh] flex-col",
        height:   "h-[28dvh]",
    },
    {
        id: 5,
        placeholder: "Year",
        dataDrop: objYear,
        property: "w-[70dvh] flex pl-2 flex-wrap",
        width: "w-[24%]",
        height:  "h-[35dvh]",
    },
    {
        id: 6,
        placeholder: "Lenght",
        dataDrop: objLength,
        property: "w-full flex-col text-[14px]",
        height:  "h-[29dvh]",
    },
    {
        id: 7,
        placeholder: "Recently updated",
        dataDrop: objRecently,
        property: "w-[30dvh] right-0 flex-col",
        height: "h-[37dvh]",
    },
];

export const typeMangaSearch = ["Manga", "Manwa", "Manhua", "Trending"];
