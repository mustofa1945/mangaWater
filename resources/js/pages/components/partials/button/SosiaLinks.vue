<script setup>
import { reactive } from 'vue';
const media = reactive(
    [
        { name: 'Facebook', icon: 'fa-brands fa-facebook', bg: 'bg-sky-600' , shared : '25.3k'},
        { name: 'Twitter', icon: 'fa-brands fa-x-twitter', bg: 'bg-black' , shared : '25.3k'},
        { name: 'Messangger', icon: 'fa-brands fa-facebook-messenger', bg: 'bg-sky-500' , shared : '25.3k'},
        { name: 'Robot', icon: 'fa-solid fa-robot' , bg: 'bg-[#b05c09]' , shared : '25.3k'},
        { name: 'Whatsapp', icon: 'fa-brands fa-whatsapp', bg: 'bg-green-600' , shared : '25.3k'},
        { name: 'Message', icon: 'fa-solid fa-message', bg: 'bg-sky-500' , shared : ''},
    ]
)

defineProps(['width'])
</script>

<template>
    <div class="flex  space-x-2 ">
        <div v-for="sosial in media" :class="`${sosial.bg} text-white px-4 py-2 rounded w-[${width}dvh] h-[5dvh] flex justify-center gap-x-2 items-center hover:-translate-y-1 hover:opacity-80 duration-400`">
            <i :class="sosial.icon"></i>
            {{ sosial.shared }}
        </div>  
    </div>
</template>