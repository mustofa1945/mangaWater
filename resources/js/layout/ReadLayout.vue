<script setup>
import { defineAsyncComponent, watchEffect } from 'vue'

import Header from '../pages/components/ui/Header.vue';
//store
import { useSlidePage } from '../pages/stores/useSlidePage';
import { useShowClose } from '../pages/stores/useShowClose';
const Comment = defineAsyncComponent(() =>
    import('../pages/components/ui/Comment.vue'))
const PageMenu = defineAsyncComponent(() =>
    import('../pages/components/ui/PageMenu.vue'))

const { pages, showPage } = useSlidePage()
const { createShowCloseComputedGroup, showOrHidden, comment } = useShowClose()
const { readNavReadMenu, readComment } = createShowCloseComputedGroup()
</script>

<template>
    <main :class="`max-w-full ${readNavReadMenu.readLayoutWidth} duration-250 transition-all flex flex-col`">
        <Header :menu="{ status: true, height: 6, widht: 10, space: 5 }"
            :class="`duration-250 transition-all gap-x-3 w-full flex-1`" />
        <article :class="` relative w-full`">
            <slot />
        </article>
        <PageMenu v-if="true" v-for="page in pages" :display="page.display" :page="page.status" class="w-[20vh] top-13"
            @slidePage="showPage(page.id)" :input="page.input" />
        <Comment v-showAndClose="readComment.delayEffect" @showComment="showOrHidden(comment, readComment)"
            :class="`absolute top-20 right-0 flex-col h-[80vh] transition-all duration-500  overflow-y-auto rounded-lg`" />
    </main>
</template>