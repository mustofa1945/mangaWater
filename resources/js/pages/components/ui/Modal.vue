<script setup>

const appeared = defineProps(['modal'])

</script>
<template>
    <div v-if="appeared.modal" class="fixed  inset-0 flex items-center justify-center bg-black/50 bg-opacity-10 z-50">
        <div class="bg-white rounded-lg w-96 p-6">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold text-gray-800">Welcome back!</h2>
                <slot />
            </div>
            <form action="#" method="POST">
                <div class="mb-4">
                    <label for="username" class="block text-sm font-medium text-gray-700">Username or Email</label>
                    <input type="text" id="username" name="username"
                        class="mt-1 p-2 w-full border border-gray-300 rounded-md" required>
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700">Your Password</label>
                    <input type="password" id="password" name="password"
                        class="mt-1 p-2 w-full border border-gray-300 rounded-md" required>
                </div>
                <div class="flex justify-between items-center">
                    <Link href="#" class="text-sm text-blue-600 hover:text-blue-800">Forgot Your Password?</Link>
                    <div class="flex items-center space-x-2">
                        <div class="text-sm text-gray-500">Verifying...</div>
                        <div class="w-6 h-6 border-t-2 border-blue-500 rounded-full animate-spin"></div>
                    </div>
                </div>
                <button type="submit"
                    class="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none">Login
                    Now</button>
            </form>
            <div class="mt-4 text-center">
                <p class="text-sm">Don't have an account?
                    <link href="#" class="text-blue-600 hover:text-blue-800">Register
                    Now</link>
                </p>
            </div>
        </div>
    </div>

</template>