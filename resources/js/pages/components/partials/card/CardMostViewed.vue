<script setup>

const props = defineProps(["manga", "icon"]);

const title = props.manga.title;

const limitText = title.length > 12 ? `${title.slice(0, 8)}...` : title;

</script>
<template>
    <div 
        :class="`group relative hover:contrast-130 flex-shrink-0  flex flex-col gap-x-1 bg-slate-800 rounded-lg overflow-hidden`"
    >
        <div class="relative w-full overflow-hidden">
            <div
                
                class="duration-200 group-hover:scale-110"
            >
                <img
                    :src="props.manga.url"
                    alt=""
                    class="top-0 w-full   aspect-3/5 object-cover"
                />
            </div>
        </div>
        <div class="w-full h-[2.5rem] flex justify-center items-center">
            <h1 class="text-white/40 min-[500px]:text-[17px] text-[14px]">{{ limitText }}</h1>
        </div>

        <!-- number -->
        <div
            v-if="icon"
            class="text-white/80 bg-slate-900 w-[3dvh] group-hover:h-[7dvh] h-[4dvh] rounded-b-full rounded-t-full absolute top-1 right-2 flex justify-center group-hover:items-end items-center duration-200"
        >
            {{ props.manga.index + 1 }}
        </div>
    </div>
</template>
