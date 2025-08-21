<script setup>
import { dataManga } from '../../../data/dataManga';
import CardMostViewed from '../partials/card/CardMostViewed.vue';

</script>
<template>
      <div class="flex flex-wrap gap-3  w-full h-[19rem] pb-3 overflow-y-scroll justify-center border-1 border-slate-500/20 rounded-b-xl">
                <CardMostViewed class="w-[11rem] aspect-4/6 mt-4" 
                    v-for="(manga, index) in dataManga"
                    :icon="false"
                    :key="manga.id"
                    :manga="{
                        title: manga.title,
                        url: manga.url,
                        index: index,
                    }"
                />
            </div>
</template>