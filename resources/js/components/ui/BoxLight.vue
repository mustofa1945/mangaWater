<template>
    <section :class="` relative inset-0 overflow-hidden   border-b border-slate-900 pb-[25dvh] `">
        
        <slot />
        <div
            class="absolute glo-shadow  rounded-full bottom-[-25dvh] right-[-20dvh] h-[20dvh] w-[20dvh] border border-white">
        </div>
        <div
            class="absolute glo-shadow  rounded-full bottom-[-25dvh] left-[-20dvh] h-[20dvh] w-[20dvh] border border-white">
        </div>
        <div class="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
</template>

<style>
.glo-shadow {
    box-shadow: 0px 0px 250px 250px rgba(255, 255, 255, 0.2);
}
</style>