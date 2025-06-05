<script setup>
import { defineAsyncComponent, watchEffect } from 'vue'

import Header from '../pages/components/ui/Header.vue';
//store
import { useSlidePage } from '../pages/stores/useSlidePage';
import { useShowClose } from '../pages/stores/useShowClose';
import NavReadMenu from '../pages/components/ui/NavReadMenu.vue';
const Comment = defineAsyncComponent(() =>
    import('../pages/components/ui/Comment.vue'))
const PageMenu = defineAsyncComponent(() =>
    import('../pages/components/ui/PageMenu.vue'))
import ModalError from '../pages/components/ui/ModalError.vue';
import { useAdvanceSetting } from '../pages/stores/useAdvanceSetting';
import AdvancesSetting from '../pages/components/ui/AdvancesSetting.vue';

const { pages, showPage  } = useSlidePage()
const { createShowCloseComputedGroup, showOrHidden, comment, modalError, showOrClose } = useShowClose()
const { setting } = useAdvanceSetting()
const { readNavReadMenu, readComment , readHeader } = createShowCloseComputedGroup()
</script>
<template>
    <main
        :class="`relative max-w-full ${readNavReadMenu.readLayoutWidth} duration-250 transition-all flex flex-col overflow-x-hidden`">
        <Header :menu="{ status: true, height: 6, widht: 10, space: 5 }"
            :class="`duration-250 transition-all gap-x-3 w-full  relative`" />
        <article :class="`bg-slate-800 h-[92.3vh] relative z-0 w-full`">
            <slot />
        </article>
        <div v-if="modalError.status"
            class="fixed inset-0 z-40 flex items-center justify-center bg-black/50 bg-opacity-10">
            <ModalError @close="showOrClose(modalError)" />
        </div>
        <AdvancesSetting v-if="setting.status" />
        <NavReadMenu />
        <PageMenu v-waitTransition="!(readNavReadMenu.onMenu)" v-for="page in pages" :display="page.display" :page="page.status"
            class="w-[20vh] top-13" @slidePage="showPage(page.id)" :input="page.input" />
        </main>
        <Comment v-showAndClose="readComment.delayEffect" @showComment="showOrHidden(comment, readComment)"
            :class="`absolute top-20 right-0 flex-col z-40  h-[80vh] transition-all duration-500  overflow-y-auto rounded-lg`" />
</template>