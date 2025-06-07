<script setup>
import MainLayout from '../layout/MainLayout.vue';
import SosiaLinks from './components/partials/button/SosiaLinks.vue';
import BoxLight from './components/ui/BoxLight.vue';

defineOptions({ layout: MainLayout })
</script>
<template>
    <div class="absolute top-0  h-full w-full z-10 opacity-30 saturate-80 "> 
        <img alt="Background image with various manga characters" class="  w-full h-1/2  object-cover" height="1080"
            src="https://mangafire.to/assets/t2/s1/images/index.jpg" width="1920" />
    </div>
    <BoxLight>

        <div class="text-white pt-[15vh] flex flex-col items-left relative justify-center pl-[3vh] z-20">
            <h1 class="text-5xl font-bold">
                Read Manga Online For Free
            </h1>
            <p class="text-3xl tracking-wider mt-2">
                Unveil Your Love for Manga Online.
            </p>
            <Link class="mt-4 pl-4 py-2 text-sm w-[26vh]  bg-[#3c8bc6] text-white rounded-lg hover:bg-secondary duration-150" href="/home">
                GO TO HOME PAGE
                <i class="fa-solid fa-arrow-right"></i>
            </Link>
        </div>

        <div class=" text-slate-300 container mx-auto pr-4 relative py-8 mt-[15vh] z-20">

            <div class=" bg-primary saturate-70  p-6 rounded-lg">
                <SosiaLinks />
                <h2 class="text-2xl font-bold mb-4">
                    MangaFire - Read Manga Online Free
                </h2>
                <p class="mb-4 text-sm">
                    Are you looking for a platform to read manga online? Look no further than our website! With over
                    30,000
                    titles, we offer an extensive collection of manga comics for all readers. Our platform provides a
                    user-friendly interface that is easy to navigate and explore, so you can quickly find your desired
                    title.
                </p>
                <p class="mb-4 text-sm">
                    We have a vast range of genres and sub-genres, ensuring there is something for everyone. From
                    romance to
                    action, we have got it all covered. We are always updating our platform with new and exciting manga
                    titles, and all our comics are of high-quality scans. You'll never be disappointed with the quality
                    of
                    the images.
                </p>
                <h3 class="text-xl font-semibold mb-2">
                    Safe to use
                </h3>
                <p class="mb-4 text-sm">
                    Our website is designed to be easy to deal with pop-up ads and unwanted distractions while reading,
                    which is why we have zero pop-up ads. Our platform is completely safe to use, and your reading
                    experience will not be disrupted by unwanted advertisements.
                </p>
                <h3 class="text-xl font-semibold mb-2">
                    Smart features
                </h3>
                <p class="mb-4 text-sm">
                    We also offer a smart and convenient sync feature that allows you to access your content on both
                    your PC
                    and mobile devices. No matter where you are, you can pick up where you left off, making reading
                    manga
                    more convenient and enjoyable.
                </p>
                <h3 class="text-xl font-semibold mb-2">
                    Completely free
                </h3>
                <p class="mb-4 text-sm">
                    Our website is entirely free to use. You don't need to register or pay for anything to access our
                    vast
                    collection of manga comics. We also provide you with the flexibility to switch between dark and
                    light
                    modes, depending on your reading preferences.
                </p>
                <p class="mb-4 text-sm">
                    In addition to our extensive manga collection, we are dedicated to user experience. That's why we
                    have a
                    well-organized structure, breaking down our content into different categories to help you find what
                    you're looking for easily. We are always available to help you with any questions or concerns you
                    might
                    have about your account.
                </p>
                <p class="text-sm">
                    Join our community of manga enthusiasts and explore our high-quality manga comics with a
                    user-friendly
                    interface, smart features, and zero pop-up ads. We aim to make your manga reading experience
                    enjoyable
                    and hassle-free. Check us out and start exploring our collection today!
                </p>
            </div>
        </div>
    </BoxLight>
</template>
