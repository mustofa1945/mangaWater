<script setup>
import { useAdvanceSetting } from '../../../stores/useAdvanceSetting';
import StatusButton from '../button/StatusButton.vue';

const storeAdvanceSetting = useAdvanceSetting()
</script>
<template>
    <div class="space-y-6">
        <div>
            <h2 class="text-lg font-semibold">Image Sizing</h2>
            <div class="flex flex-col space-y-4">
                <StatusButton
                    @runChangeStatus="storeAdvanceSetting.changeStatusButtonType(item.id, storeAdvanceSetting.imageSizing)"
                    v-for="item in storeAdvanceSetting.imageSizing" :text="item.title" :isActive="item.status" />
            </div>
        </div>

        <div>
            <h2 class="text-lg font-semibold">Image Coloring</h2>
            <div class="flex flex-col space-y-4">
                <StatusButton
                    @runChangeStatus="storeAdvanceSetting.changeStatusButtonType(item.id, storeAdvanceSetting.imageColoring)"
                    v-for="item in storeAdvanceSetting.imageColoring" :text="item.title" :isActive="item.status" />
            </div>
        </div>
    </div>
</template>