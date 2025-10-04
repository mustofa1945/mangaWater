<script setup>
import InputSearch from "../../components/partials/button/InputSearch.vue";
import { useStoreToDownOrUp } from "../../stores/storeToDownOrUp";

const { stateShowDown, compuPiniaToDownOrUp } = useStoreToDownOrUp();
</script>
<template>
    <div
        @click="
            stateShowDown(
                compuPiniaToDownOrUp.InputSearch,
                compuPiniaToDownOrUp.readStyeInputSearch
            )
        "
        v-if="compuPiniaToDownOrUp.InputSearch.status"
        class="fixed w-full h-full top-0 items-start justify-center bg-black/50 bg-opacity-10 z-50"
    >
        <InputSearch
            @click.stop
            :class="[compuPiniaToDownOrUp.readStyeInputSearch.style , 'w-full mt-2 transition-all duration-300']"
        />
    </div>
</template>
