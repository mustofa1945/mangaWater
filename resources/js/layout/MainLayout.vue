<script setup>
import Header from '../pages/components/ui/Header.vue';
import Footer from '../pages/components/ui/Footer.vue'
</script>

<template>
    <main :class="`max-w-full`">
        <Header :menu="{ status: false, height: 8, widht: 20, space: 7 }" class="relative"/>
        <article :class="`bg-slate-900 z-0 relative w-full  `">
            <slot />
        </article>
        <Footer />
    </main>
</template>
: