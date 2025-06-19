<script setup>
import { useStoreToDownOrUp } from '../../stores/storeToDownOrUp';

const {compuPiniaToDownOrUp , stateShowDown } = useStoreToDownOrUp()

</script>
<template>
    <div
        v-if="compuPiniaToDownOrUp.modalError.status"
        class="fixed inset-0 z-40 flex items-center justify-center bg-black/50 bg-opacity-10"
    >
        <div
            :class="`bg-[#1e2a3a] relative rounded-md w-[80dvh] p-6 text-white shadow-lg ${compuPiniaToDownOrUp.readStyleError.style} `"
        >
            <button
                @click="stateShowDown(compuPiniaToDownOrUp.modalError , compuPiniaToDownOrUp.readStyleError)"
                aria-label="Close"
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-300"
            >
                <i class="fas fa-times"></i>
            </button>
            <h2 class="font-semibold text-white text-lg mb-2">Report Error</h2>
            <p class="text-[#7a8ca6] text-sm mb-1">Savage Hero</p>
            <a href="#" class="text-[#3a8ccf] text-sm mb-4 inline-block"
                >Chapter 0</a
            >
            <textarea
                placeholder="Please describe your issue here"
                class="w-full h-20 bg-[#273746] rounded-md text-[#7a8ca6] text-sm p-2 resize-none mb-4 placeholder-[#7a8ca6] focus:outline-none focus:ring-2 focus:ring-[#3a8ccf]"
            ></textarea>
            <div
                class="flex items-center justify-between bg-[#273746] rounded-md p-2 mb-4"
            >
                <div class="flex items-center space-x-2">
                    <div
                        class="bg-[#2e7d32] rounded-full w-8 h-8 flex items-center justify-center"
                    >
                        <i class="fas fa-check text-white text-sm"></i>
                    </div>
                    <span class="text-white text-sm">Success!</span>
                </div>
                <div
                    class="flex flex-col text-right text-white text-[10px] font-semibold"
                >
                    <span>CLOUD</span>
                    <span class="text-[#f38020]">FLARE</span>
                    <div
                        class="flex space-x-1 text-[8px] font-normal text-[#a0a0a0]"
                    >
                        <a href="#" class="underline">Privacy</a>
                        <span>·</span>
                        <a href="#" class="underline">Terms</a>
                    </div>
                </div>
            </div>
            <button
                class="w-full bg-[#3a8ccf] rounded-md py-2 text-white font-semibold text-sm hover:bg-[#2f6fb3] transition-colors"
                type="button"
            >
                Send Report <i class="fas fa-chevron-right ml-1"></i>
            </button>
        </div>
    </div>
</template>
