<template>
    <div ref="lineElement" class="lines h-px w-full mb-6 md:mb-10 bg-gray-200"></div>
</template>

<script lang="ts" setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const { $gsap } = useNuxtApp()
const lineElement = ref<HTMLDivElement | null>(null)

onMounted(() => {
    ScrollTrigger.batch('.lines', {
        onEnter: (element) => {
            $gsap.set(element, { scaleX: 0, transformOrigin: 'left center' })
            $gsap.to(element, { scaleX: 1, stagger: 0.2, duration: 1.5, ease: 'power3.out' })
        },
    })
})
</script>
