// import { computed, reactive, watch, watchEffect } from "vue";
// import { useProvideDataDropDown } from "../stores/data/dataDropDown";
// import { useUtils } from "../utils/utilsFunctionStore";
// export const useCompoDropDown = () => {
//     //AMbil data Dari Provide
//     const { dataDropDown } = useProvideDataDropDown();

//     //Ambil element berdasarkan id yang di select sekaligus kebalikannya
//     const { findByStatus, switchActive, delay } = useUtils();

//     const readAllStyleItem = computed(() => {
//         const getStyle = dataDropDown.value.map((el) =>
//             reactive(findByStatus(el.styleDynamic))
//         );

//         return getStyle;
//     });

//     watch(
//         dataDropDown.value,
//         (dropDown) => {
//             dropDown.forEach((el, index) => {
//                 el.updateStyle = readAllStyleItem.value[index];
//             });
//         },
//         { immediate: true, deep: true }
//     );

//     const splitDataDropDownById = (id) => {
//         return reactive({
//             target: dataDropDown.value.find((el) => el.id == id),
//             reverseTarget: dataDropDown.value.filter((el) => el.id != id),
//         });
//     };

//     //Jalankan Animasi DropDown
//     async function runDropdown(id) {
//         const { target, reverseTarget } = splitDataDropDownById(id);
//         if (target.status) {
//             // reverseTarget.forEach((el) => {
//             //     if (el.updateStyle.id === 2) {
//             //         el.status = !el.status;
//             //         switchActive(el.updateStyle, el.styleDynamic);
//             //     }
//             // });
//             switchActive(target.updateStyle, target.styleDynamic);
//             target.canHover = "cant Hover";
//             await delay(target.updateStyle.delay);
//             target.status = !target.status;
//             // target.canHover = "hidden group-hover:flex";
//         } else {
//             target.status = !target.status;
//             await delay(target.updateStyle.delay);
//             switchActive(target.updateStyle, target.styleDynamic);
//             for (let index = 0; index < reverseTarget.length; index++) {
//                 if (reverseTarget[index].updateStyle.id == 2) {
//                     switchActive(
//                         reverseTarget[index].updateStyle,
//                         reverseTarget[index].styleDynamic
//                     );
//                     await delay(reverseTarget[index].updateStyle.delay);
//                     reverseTarget[index].status = !reverseTarget[index].status;
//                 }
//             }
//         }
//     }
//     // watchEffect(() => {
//     //     const isHaveDropDown = dataDropDown.value.some(
//     //         (el) => el.updateStyle.id == 2
//     //     );
//     //     console.log(isHaveDropDown);
//     //     // canHover.value = !isHaveDropDown ? "hidden group-hover:flex" : "cant Hover"
//     // });
//     //Reset semua jika mouse keluar dari element
//     function reset() {
//     //     const isEveryClose = dataDropDown.value.every(
//     //         (el) => el.updateStyle.id === 1
//     //     );
//     //     if (isEveryClose) {
//     //         dataDropDown.value.forEach((el) => {
//     //             el.status = true;
//     //             el.updateStyle = reactive({
//     //                 id: 2,
//     //                 status: true,
//     //                 height: "h-[80vh] opacity-100 transition-all duration-500",
//     //                 delay: 500,
//     //             });
//     //             el.canHover = "hidden group-hover:flex";
//     //         });
//     //     }
//     }

//     return {
//         reset,
//         runDropdown,
//         dataDropDown,
//     };
// };

// import { reactive, ref } from "vue";
// import { mangaGenres, types } from "../../../data/dataManga";
// import { useThemeGlobal } from "../../theme/globalStyle";

// export const useProvideDataDropDown = () => {
//     const {
//         templateDropDown: [first, second],
//     } = useThemeGlobal();

//     const dataDropDown = ref([
//         {
//             id: 1,
//             title: "types",
//             status: true,
//             canHover: "hidden group-hover:flex",
//             styleDynamic: [
//                 {
//                     ...first,
//                     status: false,
//                 },
//                 {
//                     ...second,
//                     status: true,
//                     height: "h-[40vh] opacity-100 transition-all duration-500",
//                     delay: 500,
//                 },
//             ],
//             styleStatic: {
//                 width: "w-[30vh]",
//                 childWidth: "w-full",
//                 flexType: "flex-col",
//                 size: "text-[16px]",
//             },
//             data: types,
//         },
//         {
//             id: 2,
//             title: "genres",
//             status: true,
//             canHover: "hidden group-hover:flex",
//             styleDynamic: [
//                 {
//                     ...first,
//                     status: false,
//                 },
//                 {
//                     ...second,
//                     status: true,
//                     height: "h-[80vh] opacity-100 transition-all duration-500",
//                     delay: 500,
//                 },
//             ],
//             styleStatic: {
//                 width: "w-[80vh]",
//                 childWidth: "w-[30%]",
//                 flexType: "flex-wrap",
//                 size: "text-[14px]",
//             },
//             data: mangaGenres,
//         },
//     ]);

//     return { dataDropDown };
// };
