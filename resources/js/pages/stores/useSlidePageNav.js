import { defineStore } from "pinia";
import { useUtils } from "../utils/utilsFunctionStore";
import { useProvidePagNav } from "../../dataStore/dataPagNav.";
import { useProvideOneUtilsNav } from "../utils/oneUtils/oneUtilsNav";

export const useSlidePageNav = defineStore("slide", () => {
    // Ambil data proxy dan computed yang dibutuhkan dari data store
    const {
        listComputed,
        eachItemProxy: { nav, comment, header, main },
    } = useProvidePagNav();
    // Gunakan fungsi utilitas umum untuk manipulasi status dan transisi elemen
    const { switchActive, transitionEnd , wait } = useUtils();
    //Fungsi khusus yang hanya digunakan satu kali pemanggilan (one-time actions)
    const { runMenu, runComment, runHeaderUp } = useProvideOneUtilsNav();
    // Komputasi proxy elemen untuk setiap bagian dari navigasi halaman
    const { getComment, getNav, getHeader, getMain } = listComputed;
    // Tampilkan menu navigasi dan atur ulang status halaman yang lain
    const showNav = (pageSlide) => {
        //Reset status semua halaman slide menjadi tidak aktif
        pageSlide.forEach((elSlide) => {
            elSlide.status = false;
        });
        
        // const isShow = pageSlide.find(el => el.display === "show")
        // wait(() => isShow.display = "hidden" , 250)

        //Lebar dari Main ditentukan berdasarkan status
        switchActive(getMain.value, main);

        //Setelah Transition selesai Hidden Kan NavReadMenu
        runMenu(nav);
    };
    //Jalankan fungsi transisi akhir untuk menyembunyikan elemen setelah animasi selesai
    const runTransitionEnd = (proxy) => transitionEnd(proxy);
    // Tampilkan atau sembunyikan komentar dengan transisi yang telah diatur
    const showComment = () => runComment(comment);
    // Sembunyikan header dengan animasi naik menggunakan utilitas yang telah disiapkan
    const headerUp = () => runHeaderUp(header);

    return {
        showNav,
        getMain,
        getNav,
        getComment,
        showComment,
        headerUp,
        getHeader,
        runTransitionEnd,
    };
});
