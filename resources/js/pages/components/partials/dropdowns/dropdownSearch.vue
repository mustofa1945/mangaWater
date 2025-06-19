<script setup>
import { computed } from "vue";
import { useUtils } from "../../../utils/utilsFunctionStore";
import { useDropDownSearch } from "../../../composable/compoDropDownSearch";

const props = defineProps(["dataDrop"]);

const emits = defineEmits(["showDrop"]);

const { findByStatus } = useUtils();

const { selectItemDropById } = useDropDownSearch();

const el = computed(() => findByStatus(props.dataDrop.animProper));

</script>
<template>
    <div class="relative w-[11%]" @click="emits('showDrop')">
        <div
            class="h-7 bg-slate-900 flex border border-blue-600/20 rounded items-center"
        >
            <input
                :placeholder="`${props.dataDrop.placeHolder}`"
                type="select"
                name="select"
                id="select"
                class="px-4 appearance-none text-sm outline-none text-gray-300 w-full"
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

        <div
            @click.stop
            v-if="props.dataDrop.status"
            :class="`absolute rounded shadow bg-slate-900 ${props.dataDrop.proper} ${el.height} rounded-lg overflow-hidden mt-1 border border-blue-600/20 transition-all duration-300`"
        >
            <div
                :class="`mt-2 ${props.dataDrop.proper} px-2 pb-2 gap-1 flex `"
            >
                <div
                    @click="selectItemDropById(data.id , props.dataDrop.dataDrop)"
                    :class="`cursor-pointer flex justify-center text-gray-300 ${data.bg} hover:bg-sky-700/60 rounded-md transition-all duration-300 ${props.dataDrop.width}`"
                    v-for="data in props.dataDrop.dataDrop"
                >
                    <span class="flex-1 flex items-center justify-center">
                        <i
                            v-select-state="`halo`"
                            :class="`${data.icon} text-gray-300 transition-all duration-300`"
                        ></i>
                    </span>
                    <span class="w-[80%]">{{ data.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
