<script setup>
import ModalDetailManga from "../modal/ModalDetailManga.vue";

const props = defineProps(["manga"]);

</script>
<template>
    <div
        class="min-[768px]:w-[49.2%] w-[100%] flex h-[11rem] bg-slate-800/70 hover:bg-slate-800/100 duration-100 rounded-lg border-1 border-slate-100/10"
    >
        <div class="w-fit h-full rounded-lg relative group">
            <img
                :src="props.manga.url"
                class="w-[8rem] max-[600px]:aspect-3/2 rounded-lg h-full object-cover"
                alt=""
            />
            <ModalDetailManga
                :manga="manga"
                class="opacity-0 pointer-events-none absolute  flex transition-opacity duration-500 group-hover:opacity-100 group-hover:pointer-events-auto"
  />
            />
        </div>
        <div class="h-full flex flex-col flex-1 px-5">
            <div class="pt-2">
                <h1 class="text-[15px] text-sky-600">{{ props.manga.type }}</h1>
                <h1 class="text-white">{{ props.manga.title }}</h1>
            </div>
            <div
                class="flex flex-col gap-y-1 items-center justify-center pt-[2dvh]"
            >
                <div
                    v-for="chap in props.manga.chapter"
                    class="text-white/40 flex justify-between items-center px-[2dvh] py-1 transition-all duration-250 bg-slate-900/60 hover:bg-slate-900 hover:text-white rounded-xl w-full h-[30%]"
                >
                    <span class="text-[13px]"
                        >{{ `chap ${chap} ${props.manga.lang}` }}
                    </span>
                    <span class="text-[13px] min-[370px]:inline hidden">{{
                        props.manga.date
                    }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

