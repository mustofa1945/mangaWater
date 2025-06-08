<script setup>

const props = defineProps(["manga", "icon" , "width"]);

const title = props.manga.title;

const limitText = title.length > 12 ? `${title.slice(0, 8)}...` : title;

</script>
<template>
    <div
        :class="`group relative  ${props.width} flex-shrink-0 h-[50vh] flex flex-col gap-x-1 bg-slate-800 rounded-xl overflow-hidden`"
    >
        <div class="relative w-full overflow-hidden  flex-1">
            <div
                
                class="duration-200 scale-100 group-hover:scale-125"
            >
                <img
                    :src="props.manga.url"
                    alt=""
                    class="top-0 w-full h-full object-cover"
                />
            </div>
        </div>
        <div class="w-full h-[15%] flex justify-center items-center">
            <h1 class="text-white/40 text-[12px]">{{ limitText }}</h1>
        </div>

        <!-- number -->
        <div
            v-if="icon"
            class="text-white/80 bg-slate-900 w-[3vh] group-hover:h-[7vh] h-[4vh] rounded-b-full rounded-t-full absolute top-1 right-2 flex justify-center items-end duration-200"
        >
            {{ props.manga.index + 1 }}
        </div>
    </div>
</template>
