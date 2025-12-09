<script setup>
import DropdownSearch from "../components/partials/dropdowns/DropdownSearch.vue";
import BoxLight from "../components/ui/BoxLight.vue";
import { dataManga } from "../data/dataManga";
import CardRecentlyUpdate from "../components/partials/card/CardRecentlyUpdate.vue";
import PagReguler from "../components/partials/button/PagReguler.vue";
import { typeMangaSearch } from "../data/dataSearch";
import DefaultLayout from "../layout/DefaultLayout.vue";
import { useDropDownSearch } from "../composable/compoDropDown";
import { useStoreToDownOrUp } from "../stores/storeToDownOrUp";
import { onMounted } from "vue";

const { compuDropSearch, runDropdown } = useDropDownSearch();

const { compuPiniaToDownOrUp, stateShowDown } = useStoreToDownOrUp();

onMounted(() => { 
    compuDropSearch.readDataGenres.value.event = stateShowDown;
    compuDropSearch.readDataGenres.value.fadeStyle = compuPiniaToDownOrUp.modalGenres;
    compuDropSearch.readDataGenres.value.fadeActive  = compuPiniaToDownOrUp.readStyleModalGenres;
    compuDropSearch.readDataYear.value.event = stateShowDown;
    compuDropSearch.readDataYear.value.fadeStyle = compuPiniaToDownOrUp.modalYear;
    compuDropSearch.readDataYear.value.fadeActive  = compuPiniaToDownOrUp.readStyleModalYear;
});

defineOptions({ layout: DefaultLayout });
</script>

<template>
    <BoxLight class="px-5">
        <div class="flex justify-between items-center mt-10">
            <h2 class="text-xl text-white/70">New Release</h2>
            <span class="text-white/30 text-sm">30,062 mangas</span>
        </div>
        <!-- Seacrh -->
        <div
            class="relative z-30 mt-5 grid min-[1200px]:grid-cols-9 min-[410px]:grid-cols-9 min-[768px]:grid-cols-10 max-[410px]:grid-cols-10 gap-2"
        >
            <div
                class="relative min-[1200px]:col-span-1 min-[768px]:col-span-2 min-[410px]:col-span-3 max-[410px]:col-span-5"
            >
                <div
                    class="h-8 bg-slate-900 flex border border-blue-600/20 rounded items-center"
                >
                    <input
                        placeholder="Search..."
                        type="search"
                        name="select"
                        id="select"
                        class="px-4 appearance-none text-sm outline-none text-gray-300 w-full"
                        checked
                    />

                    <label
                        for="show_more"
                        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
                    >
                        <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </label>
                </div>
            </div>
            <DropdownSearch
                v-for="dataDrop in compuDropSearch.readDropSearch.value"
                @showDrop="
                    () => {
                        runDropdown(dataDrop.id);
                        if (dataDrop.event) {
                            dataDrop.event(
                                dataDrop?.fadeStyle,
                                dataDrop?.fadeActive
                            );
                        }
                    }
                "
                :key="dataDrop.id"
                :dataDrop="dataDrop"
            />
            <button
                class="bg-secondary saturate-70 hover:saturate-100 text-white font-bold px-4 rounded min-[1200px]:col-span-1 min-[768px]:col-span-4 min-[410px]:col-span-3 max-[410px]:col-span-10"
            >
                Filter
            </button>
        </div>

        <div class="shadow-md rounded-lg mt-4">               
            <div class="flex flex-wrap gap-2">
                <CardRecentlyUpdate 
                    v-for="manga in dataManga"
                    :key="manga.id"
                    :manga="{
                        idManga: manga.id,
                        title: manga.title,
                        url: manga.url,
                        type: manga.type,
                        dataActive: manga.dataActive,
                        lang: manga.lang,
                    }"
                />
            </div>
        </div>
    </BoxLight>
</template>
