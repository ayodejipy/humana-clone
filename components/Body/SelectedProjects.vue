<template>
    <div class="relative w-full flex flex-row gap-3 md:gap-6 overflow-x-hidden pb-24 md:pb-52">
        <div
            v-for="project in sampleProjects"
            :key="project.title"
            class="flex-[0_0_88%] max-w-[88%] md:flex-[0_0_33%] md:max-w-[33%]"
        >
            <div class="space-y-4">
                <p class="text-lg font-light text-gray-800">
                    <span class="">{{ project.title }}</span>
                    <span class="hidden">{{ project.sub }}</span>
                </p>
                <div
                    class="w-full h-[23.5rem] md:h-[25rem] object-cover rounded-xl overflow-hidden"
                >
                    <img
                        :src="project.photo"
                        :alt="project.title + 'project'"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface ProjectsTypes {
    title: string
    sub: string
    photo: string
}

const sampleProjects = ref<ProjectsTypes[]>([
    {
        title: 'James Flower ↗',
        sub: 'An identity for warm textured sounds ↗',
        photo: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        title: 'James Flower ↗',
        sub: 'An identity for warm textured sounds ↗',
        photo: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80',
    },
    {
        title: 'James Flower ↗',
        sub: 'An identity for warm textured sounds ↗',
        photo: 'https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        title: 'James Flower ↗',
        sub: 'An identity for warm textured sounds ↗',
        photo: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        title: 'James Flower ↗',
        sub: 'An identity for warm textured sounds ↗',
        photo: 'https://images.unsplash.com/photo-1504204267155-aaad8e81290d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
        title: 'James Flower ↗',
        sub: 'An identity for warm textured sounds ↗',
        photo: 'https://images.unsplash.com/photo-1634169685828-235cd18fae28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
])
</script>
