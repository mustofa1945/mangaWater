<script setup>
import { useAdvanceSetting } from '../../../stores/useAdvanceSetting';
import StatusButton from '../button/StatusButton.vue';

const { changeStatusButtonType, imageSizing, imageColoring } = useAdvanceSetting()
</script>
<template>
    <div class="space-y-6">
        <div>
            <h2 class="text-lg font-semibold">Image Sizing</h2>
            <div class="flex flex-col space-y-4">
                <StatusButton @runChangeStatus="changeStatusButtonType(item.id, imageSizing)"
                    v-for="item in imageSizing" :text="item.title" :isActive="item.status" />
            </div>
        </div>

        <div>
            <h2 class="text-lg font-semibold">Image Coloring</h2>
            <div class="flex flex-col space-y-4">
                <StatusButton @runChangeStatus="changeStatusButtonType(item.id, imageColoring)"
                    v-for="item in imageColoring" :text="item.title" :isActive="item.status" />
            </div>
        </div>
    </div>
</template>