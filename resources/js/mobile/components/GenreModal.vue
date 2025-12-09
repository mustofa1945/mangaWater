<script setup>
import { storeToRefs } from "pinia";
import { useDropDownSearch } from "../../composable/compoDropDown";
import { useStoreToDownOrUp } from "../../stores/storeToDownOrUp";

const {stateShowDown } = useStoreToDownOrUp();

const {modalGenres , readStyleModalGenres} = storeToRefs(useStoreToDownOrUp())

const { selectItemDropById, compuDropSearch } = useDropDownSearch();
</script>

<template>
    <div
        @click="
            stateShowDown(
                modalGenres,
                readStyleModalGenres
            )
        "
        v-if="modalGenres.status"
        class="fixed w-full h-full max-[950px]:flex hidden top-0 items-center justify-center bg-black/50 bg-opacity-10 z-50"
    >
        <div
            @click.stop
            :class="[readStyleModalGenres.style , 'overflow-y-scroll gap-y-1 bg-slate-900 flex-shrink-0 transition-all duration-200 flex flex-col h-[20rem] w-[85%]']"
        >
            <div
                @click="
                    selectItemDropById(
                        data.id,
                        compuDropSearch.readDataGenres.value.dataDrop
                    )
                "
                :class="[
                    data.bg,
                    'cursor-pointer flex w-full  text-gray-300 hover:bg-sky-700/60 rounded-md transition-all duration-300  h-[3rem]',
                ]"
                v-for="data in compuDropSearch.readDataGenres.value.dataDrop"
            >
                <span class="flex-1 flex pl-1 items-center justify-center">
                    <i
                        :class="[
                            data.icon,
                            'text-gray-300 text-md transition-all duration-300',
                        ]"
                    ></i>
                </span>

                <span class="w-[95%] pl-1 flex overflow-hidden">{{
                    data.title
                }}</span>
            </div>
        </div>
    </div>
</template>
