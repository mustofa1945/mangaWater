<script setup>
import { computed } from "vue";
import { useUtils } from "../../../utils/utilsFunctionStore";

const props = defineProps([
    "title",
    "property",
    "dataDrop",
    "childWidth",
    "height",
    "animProper",
    "status",
]);

const emits = defineEmits(["runDropdown"]);

const { findByStatus } = useUtils();

const el = computed(() => findByStatus(props.animProper));
</script>
<template>
    <div :class="` text-lg relative `" @click="emits('runDropdown')">
        <span
            class="text-[#FFFFFF] hover:text-[#18715F] duration-200 transition-all"
            >{{ props.title }}</span
        >
        <div
        
            @click.stop
            v-if="props.status"
            :class="[el.height , 'absolute show  transition-all flex  duration-300  left-0 overflow-hidden z-100  bg-[#131516] border-1 border-[#FFFFFF]/30']"
        >
         <div :class="[props.property , 'mt-2 gap-y-1 px-2 flex']">
             <Link
                 :class="[childWidth , 'pl-3  text-[#FFFFFF] box-border hover:border-[#18715F] hover:bg-[#18715F]/10 hover:text-[#18715F] duration-200 rounded-xl']"
                 v-for="itemDrop in props.dataDrop"
                 href="#"
                 >{{ itemDrop.name }}</Link
             >
            </div>
        </div>
    </div>
</template>
