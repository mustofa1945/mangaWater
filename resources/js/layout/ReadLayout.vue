<script setup>
import { defineAsyncComponent } from "vue";

import AdvancesSetting from "../pages/components/ui/AdvancesSetting.vue";
import Header from "../pages/components/ui/Header.vue";
import NavReadMenu from "../pages/components/ui/NavReadMenu.vue";
const Comment = defineAsyncComponent(() =>
    import("../pages/components/ui/Comment.vue")
);
const PageMenu = defineAsyncComponent(() =>
    import("../pages/components/ui/PageMenu.vue")
);
//store
import { useSlidePage } from "../pages/stores/useSlidePage";
import { useShowClose } from "../pages/stores/useShowClose";
import ModalError from "../pages/components/ui/ModalError.vue";

const { pages, showPage } = useSlidePage();
const { createShowCloseComputedGroup, showOrHidden, comment } =
    useShowClose();
const { readNavReadMenu, readComment, readHeader } =
    createShowCloseComputedGroup();
</script>
<template>
    <main
        :class="`relative max-w-full ${readNavReadMenu.readLayoutWidth} duration-250 transition-all flex flex-col overflow-x-hidden`"
    >
        <Header
            :menu="{ status: true, height: 'h-6', widht: 'w-10' }"
            :class="`duration-250 transition-all gap-x-3 w-full  relative`"
        />
        <article
            :class="`bg-slate-800 ${readHeader.scrollHeader} relative z-0 w-full overflow-hidden`"
        >
            <slot />
        </article>
        <AdvancesSetting />
        <ModalError />
        <NavReadMenu />
        <PageMenu
            v-waitTransition="!readNavReadMenu.onMenu"
            v-for="page in pages"
            :display="page.display"
            :page="page.status"
            class="w-[20dvh] top-13"
            @slidePage="showPage(page.id)"
            :input="page.input"
        />
    </main>
    <Comment
        v-showAndClose="readComment.delayEffect"
        @showComment="showOrHidden(comment, readComment)"
        :class="`absolute top-20 right-0 flex-col z-40  h-[80dvh] transition-all duration-500  overflow-y-auto rounded-lg`"
    />
</template>
