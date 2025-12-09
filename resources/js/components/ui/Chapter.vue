<template>
    <div
        class="border-1 border-slate-500/20 rounded-b-xl saturate-80  h-[20rem] text-white"
    >
        <ul
            class="divide-y divide-slate-100/10 h-full overflow-x-hidden overflow-y-auto"
        >
            <li v-for="item in 25">
                <div class="flex text-gray-300 hover:text-sky-600">
                    <div
                        class="flex-1 flex w-1/2 items-center hover:translate-x-4 -translate-x-5 gap-x-3 transition-all duration-400"
                    >
                        <i class="fa-solid text-xl fa-square-caret-right"></i>
                        <span class="m-2 text-sm"
                            >Chapter {{ 25 + 1 - item }}: Plan</span
                        >
                    </div>
                    <div class="flex justify-end  w-1/2">
                        <span class="m-2 text-sm">Dec 26, 2024</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
