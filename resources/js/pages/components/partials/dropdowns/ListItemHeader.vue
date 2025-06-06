<script setup>
import { toRef } from 'vue';
import { useDropStore } from '../../../stores/useDropdown';

const data = defineProps({
    on: Boolean,
    display: String,
    id: Number,
    animation: String,
    item: Object,
    title: String,
    property: Object
})

const { runDropdown, dropdownAnimationEnd, reset } = useDropStore()
const canHover = toRef(useDropStore(), 'canHover')

</script>
<template>
    <div :class="` ${canHover ? 'trigger' : 'no-trigger'} text-lg relative `" @click="runDropdown(data.id)"
        @mouseout="reset(id)" @animationend="dropdownAnimationEnd(data.id)">
        <span class="text-gray-400 hover:text-gray-100 duration-200 transition-all">{{ data.title }}</span>
        <div
            :class="`absolute show ${data.animation}-${data.title} transition-all ${data.display}  duration-300  left-0 overflow-hidden z-100  ${data.property.width}  ${data.property.flexType} p-5 gap-y-2 bg-slate-900 border-1 border-slate-800`">
            <Link
                :class="`pl-3 text-gray-300 box-border ${data.property.childWidth} text-[${data.property.size}px] hover:border-sky-600 hover:bg-sky-300/10 hover:text-sky-700 duration-200 rounded-xl`"
                href="#" v-for="type in data.item">{{ type }}</Link>
        </div>
    </div>
</template>

<style>
.trigger:hover>.show {
    display: flex;
}

.appeard-types {
    animation: appeard-types 0.3s ease-in-out;
}

.dissapeard-types {
    animation: dissapeard-types 0.3s ease-in-out;
}

.appeard-genres {
    animation: appeard-genres 0.3s ease-in-out;
}

.dissapeard-genres {
    animation: dissapeard-genres 0.3s ease-in-out;
}




@keyframes dissapeard-genres {
    0% {
        height: 80vh;
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    70% {
        opacity: 0;
        height: 0px;
    }

    100% {
        opacity: 0;
    }
}

@keyframes appeard-genres {
    0% {
        height: 0px;
        opacity: 0;
    }

    30% {
        opacity: 0.3;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
        height: 80vh;
    }
}

@keyframes dissapeard-types {
    0% {
        height: 40vh;
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    70% {
        opacity: 0;
        height: 0px;
    }

    100% {
        opacity: 0;
    }
}

@keyframes appeard-types {
    0% {
        height: 0px;
        opacity: 0;
    }

    30% {
        opacity: 0.3;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
        height: 40vh;
    }
}
</style>
