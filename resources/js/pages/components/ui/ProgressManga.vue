<script setup>
import { useProgressButton } from '../../stores/useButtonProgress';

const storeProgress = useProgressButton()

</script>
<template>
    <div
        :class="` ${storeProgress.getType.style.property} bg-slate-800  justify-between  items-center absolute gap-1  duration-400`">
        <!-- <span class="text-white">1</span> -->
        <span v-if="storeProgress.getType.style.positionStatus" @click="storeProgress.pickPage(el.id)" v-for="el in storeProgress.instanceProxy"
            :class="` ${el.color} relative  duration-400 transition-all group h-full w-1/${storeProgress.instanceProxy.length}`"><span
                class="absolute bottom-[-6vh] right-0 w-full h-[2rem] hidden group-hover:flex bg-[#4169E1] rounded-md text-white justify-center items-center">{{
                el.id}}</span></span>
        <span v-if="!(storeProgress.getType.style.positionStatus)" @click="storeProgress.pickPage(el.id)" v-for="el in storeProgress.instanceProxy"
            :class="` ${el.color} relative  duration-400 group transition-all h-1/${storeProgress.instanceProxy.length} w-full`"><span
                :class="`absolute px-5 ${storeProgress.getType.style?.absolute}  w-full h-[1rem] hidden group-hover:flex bg-[#4169E1] text-white justify-center items-center`">{{
                el.id }}</span></span>
        <!-- <span class="text-white">{{ storeProgress.instanceProxy.length }}</span> -->
    </div>
</template>
