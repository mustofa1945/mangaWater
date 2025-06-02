<script setup>
import { useProgressButton } from '../../stores/useButtonProgress';

const { computedProgressBar, instanceProxy , pickPage } = useProgressButton()

</script>
<template>
    <div
        :class="` ${computedProgressBar.readTypePosition.style.property} bg-slate-800  justify-between  items-center absolute gap-1  duration-400`">
        <!-- <span class="text-white">1</span> -->
        <span v-if="computedProgressBar.readTypePosition.style.positionStatus" @click="pickPage(el.id)"
            v-for="el in instanceProxy"
            :class="` ${el.color} relative  duration-400 transition-all group h-full w-1/${instanceProxy.length}`"><span
                class="absolute bottom-[-6vh] right-0 w-full h-[2rem] hidden group-hover:flex bg-[#4169E1] rounded-md text-white justify-center items-center">{{
                    el.id }}</span></span>
        <span v-if="!(computedProgressBar.readTypePosition.style.positionStatus)" @click="pickPage(el.id)"
            v-for="el in instanceProxy"
            :class="` ${el.color} relative  duration-400 group transition-all h-1/${instanceProxy.length} w-full`"><span
                :class="`absolute px-5 ${computedProgressBar.readTypePosition.style?.absolute}  w-full h-[1rem] hidden group-hover:flex bg-[#4169E1] text-white justify-center items-center`">{{
                    el.id }}</span></span>
        <!-- <span class="text-white">{{ instanceProxy.length }}</span> -->
    </div>
</template>
