<template>
    <div>
        <div class="fixed inset-0 h-screen w-full pointer-events-none">
            <div class="flex justify-around flex-wrap h-full">
                <div v-for="n in lineCount" :key="n" class="flex-1 max-w-['30%'] h-full px-1.5">
                    <div class="border-x border-dashed border-gray-100 h-full"></div>
                </div>
            </div>
        </div>

        <nav class="grid grid-cols-2 md:grid-cols-12 md:py-3 px-2 relative z-20 w-full h-full">
            <div class="col-auto hidden">Rainbow.</div>
            <div class="hidden md:block col-start-6 col-end-12 px-1">
                <ul class="w-full flex items-center justify-between">
                    <li
                        v-for="link in links"
                        :key="link.name"
                        class="flex-[0_0_17%] max-w-[30%] self-start"
                    >
                        <NuxtLink class="text-lg font-light" :to="link.path">
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <CommonMobileNavBar :links="links" />
        </nav>

        <main class="relative z-10 px-1.5">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script lang="ts" setup>
export type NavLinksType = {
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

const isMobile = ref<boolean>(false)

const lineCount = computed<number>(() => (isMobile.value ? 6 : 12))

onMounted(() => {
    if (process.client) {
        isMobile.value = !window.matchMedia('only screen and (min-width: 768px)').matches
    }
})
</script>
