<script setup>
defineProps(['css'])

</script>
<template>
    <section :class="`pt-${css} relative inset-0 px-4 overflow-hidden  border-b border-slate-900 pb-[25vh] `">
        
        <slot />
        <div
            class="absolute glo-shadow  rounded-full bottom-[-25vh] right-[-20vh] h-[20vh] w-[20vh] border border-white">
        </div>
        <div
            class="absolute glo-shadow  rounded-full bottom-[-25vh] left-[-20vh] h-[20vh] w-[20vh] border border-white">
        </div>
        <div class="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
</template>

<style>
.glo-shadow {
    box-shadow: 0px 0px 250px 250px rgba(255, 255, 255, 0.2);
}
</style>