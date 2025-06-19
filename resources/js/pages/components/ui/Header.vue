<script setup>
import { defineAsyncComponent } from "vue";
//Component
import BoxIcon from "../partials/box/BoxIcon.vue";
//Store
import { useSlidePage } from "../../stores/useSlidePage.js";
import { useShowClose } from "../../stores/useShowClose.js";
import { useProgressButton } from "../../stores/useButtonProgress.js";
import { useCompoDropDown } from "../../composable/compoDropDown.js";
import { useCompoToDownOrUp } from "../../composable/compoUpDownAnim.js";
const ListItemHeader = defineAsyncComponent(() =>
    import("../partials/dropdowns/ListItemHeader.vue")
);
const Login = defineAsyncComponent(() => import("./Login.vue"));

const { computedProgressBar, instanceProxy } = useProgressButton();
const { compuToDownOrUp, showDown } = useCompoToDownOrUp();
const { pages, showPage } = useSlidePage();
const { createShowCloseComputedGroup, navReadMenu, showOrHidden } =
    useShowClose();
const { readHeader, readNavReadMenu } = createShowCloseComputedGroup();
const { elements , reset , dropdownAnimationEnd , runDropdown , compuDropDown} = useCompoDropDown()

defineProps(["menu"]);

defineOptions({ inheritAttrs: false });
</script>
<template>
    <nav
        v-bind="$attrs"
        v-showAndClose="readHeader.delayEffect"
        :class="`flex bg-primary saturate-60  items-center justify-between p-2 z-30 `"
    >
        <div :class="`flex items-center gap-x-5`">
            <Link href="/home">
                <img
                    alt="MangaFire.io logo"
                    :class="`${menu.height} ${menu.widht} bg-cover`"
                    :src="`https://mangafire.to/assets/sites/mangafire/logo${
                        menu.status ? '-sm' : ''
                    }.png?v3`"
                />
            </Link>
            >
            <ListItemHeader
                v-for="el in elements"
                :key="el.id"
                :animation="el.animation"
                :display="el.display"
                :item="el.data"
                :title="el.title"
                :property="el.style"
                :canHover=" compuDropDown.canHover.value"
                @reset="reset(el.id)"
                @dropdownAnimationEnd="dropdownAnimationEnd(el.id)"
                @runDropdown="runDropdown(el.id)"
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
        <div class="relative flex items-center flex-1 mx-2">
            <i
                class="fa-sharp fa-solid fa-magnifying-glass absolute top-2.5 left-3 text-md text-gray-400"
            ></i>
            <input
                class="px-4 py-2 pl-9 w-full rounded-full bg-gray-800 text-white text-sm focus:outline-none"
                placeholder="Search manga..."
                type="text"
            />
            <button
                class="bg-secondary text-white px-4 py-1 rounded-full text-sm absolute top-[0.6dvh] right-[1dvh]"
            >
                <i class="fa-solid fa-link"></i>
                Filter
            </button>
        </div>
        <!-- Chapter -->
        <div v-if="menu.status" class="flex gap-x-3 text-white cursor-pointer">
            <span @click="showPage(pages[0].id)">Chapter 1 / 20</span>
            <span @click="showPage(pages[1].id)">{{
                `Page ${computedProgressBar.readPage} /
            ${instanceProxy.length}`
            }}</span>
        </div>
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
            class="w-[12dvh] rounded-full bg-sky-600 text-white h-[5dvh] flex justify-center item-center gap-x-1"
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
