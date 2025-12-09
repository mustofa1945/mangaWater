<script setup>
import { defineAsyncComponent } from "vue";
import Header from "../components/ui/Header.vue";
import Footer from "../components/ui/Footer.vue";
import InputSearchMobile from "../mobile/components/InputSearchMobile.vue";
import GenreModal from "../mobile/components/GenreModal.vue";
import YearModal from "../mobile/components/YearModal.vue";
import { useStoreToDownOrUp } from "../stores/storeToDownOrUp";
import { storeToRefs } from "pinia";
const Login = defineAsyncComponent(() =>
    import("../components/ui/Login.vue")
);

const { stateShowDown } = useStoreToDownOrUp();
const { modalLogin, readStyleModalLogin } = storeToRefs(useStoreToDownOrUp());

</script>

<template>
    <main :class="`max-w-full relative`">
        <Header
            :menu="{ status: false, height: 'h-8', widht: 'w-full' }"
            class="relative gap-x-1 p-3 max-w-screen"
        />
        <article :class="`bg-slate-900  z-0 relative w-full saturate-100`">
            <slot />
        </article>
        <Login
            @useToDownOrUp="
                stateShowDown(
                    modalLogin,
                    readStyleModalLogin
                )
            "
            :readModalLogin="modalLogin"
            :readStyleLogin="readStyleModalLogin"
        />
        <InputSearchMobile class="max-[576px]:flex hidden" />
        <GenreModal />
        <YearModal />
        <Footer />
    </main>
</template>
