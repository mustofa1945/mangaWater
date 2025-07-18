<script setup>
import Header from '../pages/components/ui/Header.vue';
import Footer from '../pages/components/ui/Footer.vue'
import InputSearchMobile from '../pages/mobile/components/InputSearchMobile.vue';
import GenreModal from '../pages/mobile/components/GenreModal.vue';
import YearModal from '../pages/mobile/components/YearModal.vue'
</script>

<template>
    <main :class="`max-w-full relative`">
        <Header :menu="{ status: false, height: 'h-8', widht: 'w-full' }" class="relative gap-x-1 p-3 max-w-screen"/>
        <article :class="`bg-slate-900   z-0 relative w-full saturate-100`">
            <slot />
        </article>
          <InputSearchMobile class="max-[576px]:flex hidden" />
          <GenreModal />
          <YearModal />
        <Footer />
    </main>
</template>
: