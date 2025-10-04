<script setup>
import { useProgressButton } from '../../stores/useButtonProgress';

const { computedProgressBar, instanceProxy, pickPage } = useProgressButton()

</script>
<template>
    <div
        :class="[computedProgressBar.readTypePosition.style.property , 'Progress-bar bg-slate-800 z-20  justify-between  items-center absolute gap-1  duration-400']">
        <span v-if="computedProgressBar.readTypePosition.style.positionStatus" @click="pickPage(el.id)"
            v-for="el in instanceProxy" :style="{ width: 100 / instanceProxy.length + '%' }"
            :class="[el.color , 'relative duration-400 transition-all group h-full cursor-pointer ']">
            <span
                class="absolute bottom-[-6dvh] right-0 w-full h-[2rem] hidden group-hover:flex bg-[#4169E1] rounded-md text-white justify-center items-center">{{
                    el.id }}</span>
        </span>
        <span v-if="!(computedProgressBar.readTypePosition.style.positionStatus)" @click="pickPage(el.id)"
            v-for="el in instanceProxy" :style="{ height: 100 / instanceProxy.length + '%' }"
            :class="[el.color , 'duration-400 relative group transition-all  h-1/15 w-full cursor-pointer']">
            <span
                :class="[computedProgressBar.readTypePosition.style?.absolute , 'absolute px-5  w-full h-[1.5rem] rounded-md hidden group-hover:flex bg-[#4169E1] text-white justify-center items-center']">{{
                    el.id }}</span>
        </span>


    </div>
</template>
