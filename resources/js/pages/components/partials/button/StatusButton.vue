<script setup>
import { computed, ref } from 'vue'
import { useProvideDataStatusButton } from '../../../../dataStore/dataButton'
import { useUtils } from '../../../utils/utilsFunctionStore'
const props = defineProps({
    text: {
        type: String
    },
    isActive : Boolean
})

const emits = defineEmits(["runChangeStatus"])

const { dataButton } = useProvideDataStatusButton()

const { findByStatus } = useUtils()

const choiseType = computed(() => findByStatus(dataButton.value, props.isActive))

</script>
<template>
    <div class="flex items-center space-x-2 ">
        <button @click="emits('runChangeStatus')"
            :class="`border ${choiseType.styleParent} h-4 text-[12px] p-[1px] text-white font-bold w-8 rounded-full`">
            <span
                :class="`h-full block rounded-full w-[2vh]  transition-all duration-200 ${choiseType.style}`"></span>
        </button>
        <span>{{ props.text }}</span>
    </div>
</template>