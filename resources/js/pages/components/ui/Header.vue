<script setup>
import { defineAsyncComponent } from 'vue';
//Component
import BoxIcon from '../partials/box/BoxIcon.vue';
//Store
import { useSlidePage } from '../../stores/useSlidePage.js';
import { useDropStore } from '../../stores/useDropdown.js';
import { useShowClose } from '../../stores/useShowClose.js';
import { useProgressButton } from '../../stores/useButtonProgress.js';
const ListItemHeader = defineAsyncComponent(() =>
    import('../partials/dropdowns/ListItemHeader.vue')
)
const Login = defineAsyncComponent(() =>
    import('./Login.vue')
)
const { computedProgressBar , instanceProxy } = useProgressButton()
const { createShowCloseComputedGroup, navReadMenu, showOrHidden, showOrClose, modalLogin } = useShowClose()
const { readHeader, readNavReadMenu } = createShowCloseComputedGroup()
const { pages, showPage } = useSlidePage()
const { elements } = useDropStore()


defineProps(['menu'])
defineOptions({ inheritAttrs: false })
</script>
<template>
    <nav v-bind="$attrs" v-showAndClose="readHeader.delayEffect"
        :class="`flex bg-slate-900  items-center justify-between p-2 z-30 `">
        <div :class="`flex items-center space-x-${menu.space}`">
            <Link href="/home">
            <img alt="MangaFire.io logo" :class="`h-${menu.height} w-${menu.widht} bg-cover`"
                :src="`https://mangafire.to/assets/sites/mangafire/logo${menu.status ? '-sm' : ''}.png?v3`" />
            </Link>
            <ListItemHeader v-for="el in elements" :key="el.id" :animation="el.animation" :display="el.display"
                :id="el.id" :item="el.data" :title="el.title" :property="el.style" />
            <Link v-if="!menu.status" class="text-white px-2 py-1 rounded text-x lg" href="#">
            Newest
            </Link>
            <Link v-if="!menu.status" class="text-white  px-2 py-1 rounded text-xlg" href="#">
            Updated
            </Link>
            <Link v-if="!menu.status" class="text-white text-lg" href="#">
            Added
            </Link>
            <Link v-if="!menu.status" class="text-white text-lg" href="#">
            <i class="fas fa-random">
            </i>
            Random
            </Link>
        </div>
        <div class="relative flex items-center flex-1 mx-2">
            <input class="px-4 py-2 w-full rounded-full bg-gray-800 text-white text-sm focus:outline-none"
                placeholder="Search manga..." type="text" />
            <button class="bg-blue-600 text-white px-4 py-1 rounded-full text-sm absolute top-[0.7vh] right-[2vh]">
                Filter
            </button>
        </div>
        <!-- Chapter -->
        <div v-if="menu.status" class="flex gap-x-3 text-white">
            <span @click="showPage(pages[0].id)">Chapter 1 / 20</span>
            <span @click="showPage(pages[1].id)">{{ `Page ${computedProgressBar.readPage} /
                ${instanceProxy.length}` }}</span>
        </div>
        <BoxIcon @click="showOrClose(modalLogin)"
            :options="{ title: 'Login', icon: ' fas fa-chevron-right', reverse: false }"
            class="w-[12vh] rounded-full bg-sky-600 text-white h-[5vh] flex justify-center item-center gap-x-1  " />
        <BoxIcon @slide="showOrHidden(navReadMenu, readNavReadMenu, pages)" v-if="menu.status"
            :options="{ title: 'Menu', icon: 'fa-solid fa-ellipsis-vertical', reverse: true }"
            class="w-[12vh] bg-sky-700 h-[5vh] text-white px-3 rounded-lg" />
    </nav>
    <Login  />
</template>