<script setup>
import { ref } from 'vue';

const up = ref(false)
defineProps(['attr'])
</script>
<template>

    <div class="relative w-[11%]" @click="() => !up ? up = true : up = false">
        <div class="h-7 bg-white flex border border-gray-200 rounded items-center">
            <input :placeholder="`${attr.placeholder}`" type="select" name="select" id="select"
                class="px-4 appearance-none text-sm  outline-none text-gray-800 w-full" checked="false" />

            <label for="show_more"
                class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </label>
        </div>


        <div v-if="up"
            class="absolute rounded shadow bg-white overflow-hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
            <div class="cursor-pointer h-7 group " v-for="data in attr.item">
                <a
                    class=" p-2 border-transparent  border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100" href="#">{{ data }}</a>
            </div>
        </div>
    </div>

</template>