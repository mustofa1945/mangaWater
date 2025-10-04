<script setup>
import { useStoreToDownOrUp } from "../../stores/storeToDownOrUp";
import { useAdvanceSetting } from "../../stores/useAdvanceSetting";
import Image from "../partials/setting/Image.vue";
import PageLayout from "../partials/setting/PageLayout.vue";
import ShortCut from "../partials/setting/ShortCut.vue";

const { advanceSetting, selectSetting } = useAdvanceSetting();
const [pageLayout, image, shortCut] = advanceSetting;
const { compuPiniaToDownOrUp, stateShowDown } = useStoreToDownOrUp();
</script>
<template>
    <div
        v-if="compuPiniaToDownOrUp.modalSetting.status"
        class="fixed bg-black/40 flex flex-col items-center justify-center px-2 z-50 w-full h-full"
    >
        <div
            :class="[
                compuPiniaToDownOrUp.readStyleSetting.style,
                'bg-gray-800 text-white w-140 max-[576px]:w-full  rounded-lg shadow-lg px-6 py-2 h-120',
            ]"
        >
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold">Advanced Settings</h2>
                <button
                    @click="
                        stateShowDown(
                            compuPiniaToDownOrUp.modalSetting,
                            compuPiniaToDownOrUp.readStyleSetting
                        )
                    "
                    class="text-gray-400 text-2xl hover:text-white"
                >
                    &times;
                </button>
            </div>

            <!-- Tabs -->
            <div
                class="relative flex border-b w-full border-blue-700/10 mb-4 rounded-lg border-1 overflow-hidden gap-x-0.5"
            >
                <button
                    v-for="setting in advanceSetting"
                    @click="selectSetting(setting.id)"
                    :class="[
                        setting.bg,
                        'h-10 max-[400px]:text-sm font-semibold  w-1/3 saturate-60 text-white duration-500 transition-all',
                    ]"
                >
                    {{ setting.title }}
                </button>
            </div>

            <PageLayout v-if="pageLayout.status" />
            <Image v-if="image.status" />
            <ShortCut v-if="shortCut.status" />
        </div>
    </div>
</template>
