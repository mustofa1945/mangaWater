<script setup>
import PagReguler from '../partials/button/PagReguler.vue';
const emit = defineEmits(['showComment'])
</script>
<template>
<div :class="`bg-gray-900 p-4`">
    <div class="relative mb-7">
        <input type="text" name="" id="" placeholder="Comment..." class="bg-gray-600 w-full rounded-lg h-10 pl-3 text-white">
        <PagReguler @click="emit('showComment')" :options="{ size: 'md', position: 'fas fa-chevron-right'}" position="right" class="w-6 h-6 rounded-md absolute right-5 top-2" />
    </div>
    <!-- Comment Policy Section -->
    <div class="bg-gray-800 rounded-lg p-4 mb-6">
        <h2 class="text-white text-lg font-semibold">MangaFire Comment Policy</h2>
        <p class="text-gray-400">No spoilers even with spoiler tags. Be nice and friendly! Please read our Comment Policy before commenting.</p>
        <button class="mt-2 bg-blue-600 text-white font-semibold py-1 px-3 rounded">Got it</button>
    </div>

    <!-- Question Section -->
    <div class="text-center mb-4">
        <h3 class="text-white text-xl font-semibold">What are your thoughts on the manga/panel?!</h3>
        <p class="text-gray-400">46 Responses</p>
    </div>

    <!-- Emotions Section -->
    <div class="flex justify-center space-x-4 mb-6">
        <div class="flex flex-col items-center">
            <img src="https://uploads.disquscdn.com/images/69073a7a42428f4ef5c86d8a6efc64c90e553550a4fda4d608ea9d93c356d8a4.gif" alt="Average" class="w-12 h-12">
            <span class="text-white">Average</span>
        </div>
        <div class="flex flex-col items-center">
            <img src="https://uploads.disquscdn.com/images/fefc2f6b1a459a207ff5e311632c0745ac7670cde7341cd24faa20fd3ce0ef74.gif" alt="Funny" class="w-12 h-12">
            <span class="text-white">Funny</span>
        </div>
        <div class="flex flex-col items-center">
            <img src="https://uploads.disquscdn.com/images/3bc2d6d495a5d63e57adbf9392713c2c987e943670a7cb2d8f4d799472d3b1c0.gif" alt="Amazing" class="w-12 h-12">
            <span class="text-white">Amazing</span>
        </div>
        <div class="flex flex-col items-center">
            <img src="https://uploads.disquscdn.com/images/a5136ff48a7176ae6cc28c65672bc0643a80e005f64cf8f3e554ff796f062dd0.gif" alt="Surprised" class="w-12 h-12">
            <span class="text-white">Surprised</span>
        </div>
        <div class="flex flex-col items-center">
            <img src="https://uploads.disquscdn.com/images/c5a9bb1fc20878e0174821fcf9433cfc4f17823675a9157fe1a94eac1b4fe0f9.gif" alt="Sad" class="w-12 h-12">
            <span class="text-white">Sad</span>
        </div>
        <div class="flex flex-col items-center">
            <img src="https://uploads.disquscdn.com/images/03ec6cdcec550bfd52163d67d0d24a9d7fc380d6cc3413e0d5fa9d7d075c319a.gif" alt="Angry" class="w-12 h-12">
            <span class="text-white">Angry</span>
        </div>
    </div>

    <!-- Comments Section -->
    <div class="text-white mb-2">23 Comments</div>
    
    <!-- Input for Comment -->
    <div class="flex items-center">
        <input type="text" class="flex-grow bg-gray-800 text-white p-2 rounded-l" placeholder="Join the discussion...">
        <button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-r">Login</button>
    </div>
</div>
</template>