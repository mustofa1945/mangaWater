<script setup>
const props = defineProps(["readModalLogin" , "readStyleLogin"])

const emit = defineEmits(["useToDownOrUp"])
</script>
<template>
    <div
        v-if="props.readModalLogin.status"
        class="fixed w-full h-full top-0 flex items-center justify-center bg-black/50 px-6 bg-opacity-10 z-50"
    >
        <div
            :class="[props.readStyleLogin.style , 'bg-slate-800 rounded-lg  w-120 p-6']"
        >
            <div :class="`flex justify-between items-center mb-4`">
                <div>
                    <h2 class="text-xl font-semibold text-white">
                        Welcome back!
                    </h2>
                    <p class="text-gray-500">Sign in to your account</p>
                </div>
                <button
                    class="text-gray-400 hover:text-gray-600"
                    @click="emit('useToDownOrUp')"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
            <form action="#" method="POST">
                <div class="mb-4">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        class="mt-1 p-2 text-sm w-full border border-blue-900/40 text-gray-300 rounded-xl"
                        required
                    />
                </div>
                <div class="mb-4">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        class="mt-1 p-2 w-full text-sm border border-blue-900/40 rounded-xl text-gray-300"
                        required
                    />
                </div>
                <div class="flex justify-center items-center">
                    <Link
                        href="#"
                        class="text-sm text-gray-400 hover:text-[#4169E1]"
                        >Forgot Your Password?</Link
                    >
                </div>
                <button
                    type="submit"
                    class="mt-4 w-full bg-[#4169E1] text-white p-2 rounded-md transition-all duration-100 hover:grayscale-25"
                >
                    Login Now
                </button>
            </form>
            <div class="mt-4 text-center">
                <p class="text-sm text-gray-400">Don't have an account?</p>
                <Link href="#" class="text-[#4169E1] hover:grayscale-25"
                    >Register Now</Link
                >
            </div>
        </div>
    </div>
</template>
