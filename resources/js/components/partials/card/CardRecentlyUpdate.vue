<script setup>
import ModalDetailManga from "../modal/ModalDetailManga.vue";
import { useUtils } from "../../../utils/utilsFunctionStore";
import { computed, ref } from "vue";
import { dataManga } from "../../../data/dataManga";

const typeManga = ref([
    {
        id: 1,
        status: true,
        title: "CHAP",
        style: "bg-sky-600",
    },
    {
        id: 2,
        status: false,
        title: "VOL",
        style: "hover:bg-gray-300",
    },
]);

const { selectById, findByStatus } = useUtils();

const selectTypeMangaById = (id, typeManga, idManga, typeActive) => {
    const findManga = dataManga.find((el) => el.id === idManga);
    //Change type data ->chap<-vol->chap-<
    findManga.dataActive.forEach((type) => {
        type.status = !(type.id == typeActive.id);
    });

    selectById(typeManga, id, "bg-sky-600", "hover:bg-gray-300/20");
};

const props = defineProps(["manga", "typeManga"]);

const readType = computed(() => findByStatus(props.manga.dataActive));

const emits = defineEmits(["select-type"]);
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
                class="opacity-0 pointer-events-none absolute flex transition-opacity duration-500 group-hover:opacity-100 group-hover:pointer-events-auto"
            />
            />
        </div>
        <div class="h-full flex flex-col flex-1 px-5">
            <div class="pt-2 flex flex-col">
                <div class="w-full flex justify-between">
                    <h1 class="text-[15px] text-sky-600">
                        {{ props.manga.type }}
                    </h1>
                    <div class="flex gap-x-1">
                        <div
                            @click="selectTypeMangaById(type.id, typeManga , props.manga.idManga , readType)"
                            v-for="type in typeManga"
                            :class="[
                                type.style,
                                'flex justify-center items-center text-[8px] rounded-lg border-1 p-1  h-5  text-white tracking-widest manga-smooth-transition',
                            ]"
                        >
                            {{ type.title }}
                        </div>
                    </div>
                </div>
                <h1 class="text-white max-[554px]:text-[12px] w-full">{{ props.manga.title }}</h1>
            </div>
            <div
                class="flex flex-col gap-y-1 items-center justify-center pt-[2dvh]"
            >
                <div
                    v-for="data in readType.data"
                    class="text-white/40 flex justify-between items-center px-[2dvh] py-1 transition-all duration-250 bg-slate-900/60 hover:bg-slate-900 hover:text-white rounded-xl w-full h-[30%]"
                >
                    <span class="text-[13px]"
                        >{{ `${data.label} ${data.order} ${data.lang}` }}
                    </span>
                    <span class="text-[13px] min-[370px]:inline hidden">{{
                        data.date
                    }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
