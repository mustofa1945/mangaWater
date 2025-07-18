<script setup>
import { useStoreToDownOrUp } from '../../stores/storeToDownOrUp';


const emits = defineEmits(['showLogin'])

const {stateShowDown , compuPiniaToDownOrUp} = useStoreToDownOrUp()

</script>
<template>
    <div>
        <div @click="stateShowDown(compuPiniaToDownOrUp.InputSearch , compuPiniaToDownOrUp.readStyeInputSearch)" class="w-1/2 h-full  flex justify-center items-center">
            <i
                class="fa-sharp fa-solid fa-magnifying-glass text-md text-gray-400"
            ></i>
        </div>
        <div @click="emits('showLogin')"
            class="bg-sky-600 rounded-full h-full flex justify-center items-center w-1/2"
        >
            <i class="fa-solid fa-user"></i>
        </div>
    </div>
</template>
