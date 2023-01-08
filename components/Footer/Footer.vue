<template>
    <footer class="w-full px-2.5 before:absolute before:inset-x-0 before:w-full before:h-px before:bg-gray-200">
        <div class="w-full flex items-start py-4">
            <div class="relative flex-[0_0_25%] max-w-[25%]">
                <p class="font-light text-md text-gray-700">&copy; {{ currentYear }} We're Rainbow. All Right Reserved.</p>
            </div>
            <!-- <div class="relative flex-[0_0_25%] max-w-[25%] sm:px-1.5">
                <p class="font-light text-xl text-cyan-500">This website is running on netlify</p>
            </div> -->
        </div>
    </footer>
</template>

<script lang="ts" setup>
const { $dayjs } = useNuxtApp()
const currentYear = ref<string>($dayjs().format('YYYY'))
</script>
