<script setup>
import Header from '../pages/components/ui/Header.vue';
import Footer from '../pages/components/ui/Footer.vue'
</script>

<template>
    <main :class="`max-w-full`">
        <Header :menu="{ status: false, height: 'h-8', widht: 'w-20' }" class="relative gap-x-1 p-3"/>
        <article :class="`bg-slate-900 z-0 relative w-full saturate-100`">
            <slot />
        </article>
        <Footer />
    </main>
</template>
: