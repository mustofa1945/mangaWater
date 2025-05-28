<script setup>
import { defineAsyncComponent, watch, watchEffect } from 'vue'
import Header from '../pages/components/ui/Header.vue';
import { useSlidePageNav } from '../pages/stores/useSlidePageNav'
import { useSlidePage } from '../pages/stores/useSlidePage';
const Comment = defineAsyncComponent(() =>
    import('../pages/components/ui/Comment.vue'))
const PageMenu = defineAsyncComponent(() =>
    import('../pages/components/ui/PageMenu.vue'))

const { getComment: { readOnly: comment }, getHeader: { readOnly: header }, showComment } = useSlidePageNav()
const willRefactor = useSlidePageNav()
const { pages, showPage } = useSlidePage()
</script>

<template>
    <main :class="`max-w-full w-${willRefactor.getMain.width} duration-250 transition-all flex flex-col`">
        <Header :menu="{ status: true, height: 6, widht: 10, space: 5 }"
            :class="`translate-y-${header.translateY} ${header.display} duration-250 transition-all gap-x-3 w-full flex-1`" />
        <article :class="` relative w-full h-[91.9vh] overflow-hidden`">
            <slot />
        </article>
        <PageMenu v-if="willRefactor.getMain.status" v-for="page in pages" :display="page.display" :page="page.status"
            class="w-[20vh] top-13" @slidePage="showPage(page.id)" :input="page.input" />
        <Comment @showComment="showComment()" @transitionend=""
            :class="`absolute top-20  right-0  h-[80vh] w-${comment.width}  ${comment.display} transition-all duration-500  overflow-y-auto rounded-lg`" />
    </main>
</template>