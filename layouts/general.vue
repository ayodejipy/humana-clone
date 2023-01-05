<template>
    <div>
        <div class="fixed inset-0 h-screen w-full pointer-events-none">
            <div class="flex justify-around flex-wrap h-full">
                <div v-for="n in 12" :key="n" class="flex-1 max-w-['30%'] h-full px-1.5">
                    <div class="border-x border-solid border-gray-100 h-full"></div>
                </div>
            </div>
        </div>

        <nav class="grid grid-cols-12 py-3 px-2 relative z-20">
            <div class="col-auto hidden">Rainbow.</div>
            <div class="col-start-6 col-end-12 px-1">
                <ul class="w-full flex items-center justify-between">
                    <li v-for="link in links" :key="link.name" class="flex-[0_0_17%] max-w-[30%] self-start">
                        <NuxtLink class="text-lg font-light" :to="link.path">{{ link.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>

        <main class="relative z-10 px-2">
            <slot />
        </main>
    </div>
</template>

<script lang="ts" setup>
type NavLinksType = {
    name: string
    path: string
}

const links = ref<NavLinksType[]>([
    { name: 'Purpose', path: '/' },
    { name: 'Work', path: '/' },
    { name: 'About', path: '/' },
    { name: 'Blog', path: '/' },
    { name: 'Store', path: '/' },
    { name: 'Contact', path: '/' },
])
</script>
