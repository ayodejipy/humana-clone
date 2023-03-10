<template>
    <div ref="container" class="selected-projects w-full pb-24 md:pb-52">
        <Line ref="lineElem" />
        <div class="relative w-full flex flex-row gap-3 md:gap-6 overflow-x-hidden">
            <div
                v-for="project in sampleProjects"
                :key="project.title"
                ref="projectContainer"
                aria-label="Single selected project container"
                class="project flex-[0_0_88%] max-w-[88%] md:flex-[0_0_40%] md:max-w-[40%]"
            >
                <div class="space-y-6">
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
    </div>
</template>

<script lang="ts" setup>
import Line from '@/components/Common/Line.vue'
const { $gsap } = useNuxtApp()

interface ProjectsTypes {
    title: string
    sub: string
    photo: string
}

const container = ref<HTMLDivElement | null>(null)
const lineElem = ref<HTMLDivElement | null>(null)
const projectContainer = ref<HTMLDivElement[]>([])

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

onMounted(() => {

    // $gsap.set(projectContainer.value, { transformOrigin: 'right' })
    $gsap.fromTo(
        projectContainer.value,
        { x: '1627px' },
        {
            x: 0,
            stagger: 0.5,
            duration: 1.35,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.selected-projects',
                start: '25% bottom',
                // markers: true,
            },
        }
    )
    // horizontal scrolling animation for projects feed
    $gsap.to(projectContainer.value, {
        xPercent: -100 * (projectContainer.value.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: container.value,
            pin: true,
            scrub: 1,
            // end: () => '+=' + container.value?.offsetWidth,
        },
    })
})
</script>
