<script setup>
import { defineAsyncComponent, ref } from "vue";
//Component
import BoxIcon from "../partials/box/BoxIcon.vue";
import HeaderMiddle from "../responsif/header/HeaderMiddle.vue";
import IconHeaderMobile from "../../mobile/components/IconHeaderMobile.vue";
import InputSearch from "../partials/button/InputSearch.vue";
//Store
import { useSlidePage } from "../../stores/useSlidePage.js";
import { useShowClose } from "../../stores/useShowClose.js";
import { useProgressButton } from "../../stores/useButtonProgress.js";
import { useCompoToDownOrUp } from "../../composable/compoUpDownAnim.js";
import DropdownHeader from "../partials/dropdowns/DropdownHeader.vue";
import { useCompoDropdownHeaderLarge } from "../../composable/compoDropDown.js";

const Login = defineAsyncComponent(() => import("./Login.vue"));

defineProps(["menu"]);

const { computedProgressBar, instanceProxy } = useProgressButton();

const { compuToDownOrUp, showDown } = useCompoToDownOrUp();

const { pages, showPage } = useSlidePage();

const { createShowCloseComputedGroup, navReadMenu, showOrHidden } =
    useShowClose();

const { readHeader, readNavReadMenu } = createShowCloseComputedGroup();

const { compuDropdownHeader , runDropdown} = useCompoDropdownHeaderLarge();

let close = ref(false);
defineOptions({ inheritAttrs: false });
</script>
<template>
    <nav
        v-bind="$attrs"
        v-showAndClose="readHeader.delayEffect"
        :class="`flex bg-primary saturate-60  items-center justify-between p-2 z-30  `"
    >
        <div
            class="w-[5%] max-[1200px]:w-[100px] flex gap-x-1 justify-center items-center"
        >
            <div class="max-[1200px]:inline hidden flex-1 relative">
                <i
                    @click="() => (close = !close)"
                    class="fa-solid fa-bars text-lg min-[1200px]:hidden text-gray-300 mr-1"
                ></i>
                <!-- HeaderMobile -->
                <HeaderMiddle v-if="close" />
            </div>
            <Link href="/home" class="w-full max-[1200px]:w-[80%]">
                <img
                    alt="MangaFire.io logo"
                    :class="`${menu.height} ${menu.widht} bg-cover `"
                    :src="`https://mangafire.to/assets/sites/mangafire/logo${
                        menu.status ? '-sm' : ''
                    }.png?v3`"
                />
            </Link>
        </div>

        <!-- HeaderLarge -->
        <div :class="`items-center gap-x-5 max-[1200px]:hidden flex`">
            >
            <DropdownHeader
                v-for="dataDrop in compuDropdownHeader.readDropDownHeader.value"
                :key="dataDrop.id"
                :dataDrop="dataDrop.dataDrop"
                :title="dataDrop.title"
                :property="dataDrop.property"
                :childWidth="dataDrop.childWidth"
                :height="dataDrop.height"
                :animProper="dataDrop.animProper"
                :status="dataDrop.status"
                @click="() => runDropdown(dataDrop.id)"
            />

            <Link
                v-if="!menu.status"
                class="text-gray-400 hover:text-gray-100 transition-all duration-200 px-2 py-1 rounded text-x lg"
                href="#"
            >
                Newest
            </Link>
            <Link
                v-if="!menu.status"
                class="text-gray-400 hover:text-gray-100 transition-all duration-200 px-2 py-1 rounded text-xlg"
                href="#"
            >
                Updated
            </Link>
            <Link
                v-if="!menu.status"
                class="text-gray-400 hover:text-gray-100 transition-all duration-200 text-lg"
                href="#"
            >
                Added
            </Link>
            <Link
                v-if="!menu.status"
                class="text-gray-400 hover:text-gray-100 transition-all duration-200 text-lg"
                href="#"
            >
                <i class="fas fa-random"> </i>
                Random
            </Link>
        </div>

        <InputSearch class="max-[576px]:hidden flex-1" />

        <!-- Chapter -->
        <div v-if="menu.status" class="flex gap-x-3 text-white cursor-pointer">
            <span @click="showPage(pages[0].id)">Chapter 1 / 20</span>
            <span @click="showPage(pages[1].id)">{{
                `Page ${computedProgressBar.readPage} /
            ${instanceProxy.length}`
            }}</span>
        </div>
        <!-- Dekstop Icon Login -->
        <BoxIcon
            @click="
                showDown(
                    compuToDownOrUp.readModalLogin.value,
                    compuToDownOrUp.readStyleLogin.value
                )
            "
            :options="{
                title: 'Login',
                icon: ' fas fa-chevron-right',
                reverse: false,
            }"
            class="w-[80px] min-[576px]:flex hidden rounded-full bg-sky-600 text-white h-[2rem] justify-center item-center gap-x-1"
        />
        <!-- Icon Mobile -->
        <IconHeaderMobile
            @showLogin="
                showDown(
                    compuToDownOrUp.readModalLogin.value,
                    compuToDownOrUp.readStyleLogin.value
                )
            "
            class="max-[576px]:flex hidden w-[65px] h-[2rem]"
        />
        <BoxIcon
            @slide="showOrHidden(navReadMenu, readNavReadMenu, pages)"
            v-if="menu.status"
            :options="{
                title: 'Menu',
                icon: 'fa-solid fa-ellipsis-vertical',
                reverse: true,
            }"
            class="w-[12dvh] bg-sky-700 h-[5dvh] text-white px-3 rounded-lg"
        />
    </nav>

    <Login
        @useToDownOrUp="
            showDown(
                compuToDownOrUp.readModalLogin.value,
                compuToDownOrUp.readStyleLogin.value
            )
        "
        :readModalLogin="compuToDownOrUp.readModalLogin.value"
        :readStyleLogin="compuToDownOrUp.readStyleLogin.value"
    />
</template>
