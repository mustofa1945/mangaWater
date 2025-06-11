<script setup>
import { useAdvanceSetting } from "../../../stores/useAdvanceSetting";
import { useProgressButton } from "../../../stores/useButtonProgress";
import { useMangaViewer } from "../../../stores/useMangaViewer";
import { useReadingDirec } from "../../../stores/useReadingDirec";
import StatusButton from "../button/StatusButton.vue";

const { typeMangaViewers, selectViewerById, computedViewer } = useMangaViewer();
const { readingDirec, selectReadingDirecById } = useReadingDirec();
const { selectProgressBarById , typePositionScrollBar, instanceProxy } =
    useProgressButton();
const { changeStatusButtonType, swip } = useAdvanceSetting();
</script>
<template>
    <div class="mb-4">
        <p class="text-sm text-gray-400 mb-2">Page Display Style</p>
        <div class="flex gap-2">
            <button
                v-for="el in typeMangaViewers"
                :key="el.id"
                @click="selectViewerById(el.id)"
                :class="`flex-1 py-2 rounded border ${el.border}`"
            >
                {{ el.title }}
            </button>
        </div>
    </div>

    <!-- Strip Margin -->
    <div class="mb-4 flex">
        <template v-if="computedViewer.readMangaViewer.id === 3">
            <label
                class="text-sm text-gray-400 flex items-center mb-1 w-1/6 justify-center"
                >Strip Margin</label
            >
            <div class="flex flex-1 items-center gap-2">
                <input
                    type="number"
                    class="flex-1 px-2 py-1 rounded bg-gray-700 text-white border border-gray-600"
                    value="5"
                />
                <button
                    class="px-3 h-full bg-gray-600 rounded hover:bg-gray-500 text-sm w-1/5"
                >
                    Reset
                </button>
            </div>
        </template>
        <template v-if="computedViewer.readMangaViewer.id === 1">
            <StatusButton
                @runChangeStatus="
                    changeStatusButtonType(item.id, swip, instanceProxy)
                "
                v-for="item in swip"
                :text="item.title"
                :isActive="item.status"
            />
        </template>
    </div>

    <!-- Reading Direction -->
    <div class="mb-4">
        <p class="text-sm text-gray-400 mb-2">Reading Direction</p>
        <div class="flex gap-2">
            <button
                v-for="readDirec in readingDirec"
                :key="readDirec.id"
                @click="selectReadingDirecById(readDirec.id)"
                :class="`flex-1 py-2 border rounded text-gray-300 ${readDirec.border} `"
            >
                {{ readDirec.title }}
            </button>
        </div>
    </div>

    <!-- Progress Bar Position -->
    <div class="mb-4">
        <p class="text-sm text-gray-400 mb-2">Progress Bar Position</p>
        <div class="gap-2 flex">
            <button
                @click="selectProgressBarById (typeButton.id)"
                v-for="typeButton in typePositionScrollBar"
                :key="typeButton.id"
                :class="`py-2 border rounded text-gray-300 ${typeButton.border} w-1/4`"
            >
                {{ typeButton.position }}
            </button>
        </div>
    </div>

    <!-- Tips Toggle -->
    <div class="flex items-center gap-2 mt-4">
        <input
            type="checkbox"
            checked
            class="toggle-checkbox h-5 w-5 text-blue-600"
        />
        <label class="text-sm text-gray-400"
            >Show tips when header and sidebar are hidden.</label
        >
    </div>
</template>
