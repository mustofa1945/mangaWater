<script setup>
import { storeToRefs } from "pinia";
import InputSearch from "../../components/partials/button/InputSearch.vue";
import { useStoreToDownOrUp } from "../../stores/storeToDownOrUp";

const { stateShowDown } = useStoreToDownOrUp();

const { inputSearch, readStyeInputSearch } = storeToRefs(useStoreToDownOrUp());
</script>
<template>
    <div
        @click="
            stateShowDown(
               inputSearch,
               readStyeInputSearch
            )
        "
        v-if="InputSearch.status"
        class="fixed w-full h-full top-0 items-start justify-center bg-black/50 bg-opacity-10 z-50"
    >
        <InputSearch
            @click.stop
            :class="[
               readStyeInputSearch.style,
                'w-full mt-2 transition-all duration-300',
            ]"
        />
    </div>
</template>
