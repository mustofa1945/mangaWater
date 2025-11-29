<script setup>
import { defineAsyncComponent, watchEffect } from "vue";

import AdvancesSetting from "../pages/components/ui/AdvancesSetting.vue";
import Header from "../pages/components/ui/Header.vue";
import NavReadMenu from "../pages/components/ui/NavReadMenu.vue";
import InputSearchMobile from "../pages/mobile/components/InputSearchMobile.vue";
const Comment = defineAsyncComponent(() =>
    import("../pages/components/ui/Comment.vue")
);
const PageMenu = defineAsyncComponent(() =>
    import("../pages/components/ui/PageMenu.vue")
);

const Login = defineAsyncComponent(() => import("../pages/components/ui/Login.vue"))
//store
import { useSlidePage } from "../pages/stores/useSlidePage";
import { useShowClose } from "../pages/stores/useShowClose";
import ModalError from "../pages/components/ui/ModalError.vue";
import { useStoreToDownOrUp } from "../pages/stores/storeToDownOrUp";

const { pages, showPage } = useSlidePage();
const { createShowCloseComputedGroup, showOrHidden, comment , dataReact } = useShowClose();
const { readNavReadMenu, readComment, readHeader } =
    createShowCloseComputedGroup();
const { stateShowDown, compuPiniaToDownOrUp } = useStoreToDownOrUp();

</script>
<template>
    <div
        class="max-w-full relative flex overflow-hidden h-[100dvh] bg-slate-800 
        "
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
        <PageMenu  v-if="!(dataReact.onMenu)"
            v-for="page in pages"
            :display="page.display"
            :page="page.status"
            class="w-[21.1rem] top-13 z-40"
            @slidePage="showPage(page.id)"
            :input="page.input"
        />
        <Login
            @useToDownOrUp="
                stateShowDown(
                    compuPiniaToDownOrUp.modalLogin,
                    compuPiniaToDownOrUp.readStyleModalLogin
                )
            "
            :readModalLogin="compuPiniaToDownOrUp.modalLogin"
            :readStyleLogin="compuPiniaToDownOrUp.readStyleModalLogin"
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
