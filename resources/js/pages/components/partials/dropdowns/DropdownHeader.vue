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
            class="text-gray-400 hover:text-gray-100 duration-200 transition-all"
            >{{ props.title }}</span
        >
        <div
        
            @click.stop
            v-if="props.status"
            :class="`absolute show  transition-all flex  duration-300  left-0 overflow-hidden z-100  ${el.height}   bg-slate-900 border-1 border-slate-800`"
        >
         <div :class="`mt-2 ${props.property} gap-y-1 px-2 flex `">
             <Link
                 :class="`pl-3  text-gray-300 box-border ${childWidth} hover:border-sky-600 hover:bg-sky-300/10 hover:text-sky-700 duration-200 rounded-xl`"
                 href="#"
                 v-for="itemDrop in props.dataDrop"
                 >{{ itemDrop }}</Link
             >
            </div>
        </div>
    </div>
</template>
