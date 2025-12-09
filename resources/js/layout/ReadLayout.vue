<script setup>
import { defineAsyncComponent, watchEffect } from "vue";

import AdvancesSetting from "../components/ui/AdvancesSetting.vue";
import Header from "../components/ui/Header.vue";
import NavReadMenu from "../components/ui/NavReadMenu.vue";
import InputSearchMobile from "../mobile/components/InputSearchMobile.vue";
const Comment = defineAsyncComponent(() =>
    import("../components/ui/Comment.vue")
);
const PageMenu = defineAsyncComponent(() =>
    import("../components/ui/PageMenu.vue")
);

const Login = defineAsyncComponent(() =>
    import("../components/ui/Login.vue")
);
//store
import { useSlidePage } from "../stores/useSlidePage";
import { useShowClose } from "../stores/useShowClose";
import ModalError from "../components/ui/ModalError.vue";
import { useStoreToDownOrUp } from "../stores/storeToDownOrUp";
import { storeToRefs } from "pinia";

const { pages, showPage } = useSlidePage();
const { createShowCloseComputedGroup, showOrHidden, comment } = useShowClose();
const { onMenu } = storeToRefs(useShowClose());
const { readNavReadMenu, readComment, readHeader } =
    createShowCloseComputedGroup();
const { stateShowDown } = useStoreToDownOrUp();

const { modalLogin, readStyleModalLogin } = storeToRefs(useStoreToDownOrUp());
</script>
<template>
    <div
        class="max-w-full relative flex overflow-hidden h-[100dvh] bg-slate-800"
    >
        <main
            :class="`relative ${readNavReadMenu.readLayoutWidth}  z-0 top-0 duration-250 transition-all h-full flex flex-col overflow-hidden`"
        >
            <Header
                :menu="{ status: true, height: 'h-6', widht: 'w-10' }"
                :class="`duration-250 transition-all gap-x-3 w-full  relative`"
            />
            <article
                :class="`bg-slate-800  ${readHeader.scrollHeader} z-0  h-full relative  w-full overflow-hidden`"
            >
                <slot />
            </article>
        </main>
        <PageMenu
            v-if="!onMenu"
            v-for="page in pages"
            :display="page.display"
            :page="page.status"
            class="w-[21.1rem] top-13 z-40"
            @slidePage="showPage(page.id)"
            :input="page.input"
        />
        <Login
            @useToDownOrUp="stateShowDown(modalLogin, readStyleModalLogin)"
            :readModalLogin="modalLogin"
            :readStyleLogin="readStyleModalLogin"
        />
        <AdvancesSetting />
        <ModalError />
        <NavReadMenu />
        <InputSearchMobile class="max-[576px]:flex hidden" />
    </div>
    <Comment
        v-showAndClose="readComment.delayEffect"
        @showComment="showOrHidden(comment, readComment)"
        :class="`absolute top-20 right-0 flex-col z-40  h-[80dvh] transition-all duration-500  overflow-y-auto rounded-lg`"
    />
</template>
