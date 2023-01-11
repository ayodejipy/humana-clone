<template>
    <div class="w-full pb-24 md:pb-60">
        <Line ref="lineElement" class="line" />
        <div class="niche-body flex flex-col md:flex-row">
            <div class="flex-shrink-0 w-full sm:w-[34rem]">
                <p
                    ref="nicheTitle"
                    aria-label="Title parage for niche"
                    class="text-lg font-light text-gray-800 cursor-text mb-6 md:mb-0"
                >
                    Working worlwide for
                    <span class="inline-block md:hidden">↗</span>
                </p>
            </div>
            <div class="flex-1">
                <div
                    aria-colspan="2"
                    class="grid grid-cols-2 gap-x-5 md:gap-x-0 md:grid-cols-4 gap-y-2 sm:gap-y-6"
                >
                    <p
                        v-for="niche in niches"
                        ref="nicheItem"
                        :key="niche"
                        :aria-label="`Each niche item in a paragraph: ${niche}`"
                        class="text-lg font-light text-gray-800 cursor-pointer"
                    >
                        {{ niche }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Line from '@/components/Common/Line.vue'
const { $gsap } = useNuxtApp()

const lineElement = ref<HTMLDivElement | null>(null)
const nicheTitle = ref<HTMLParagraphElement | null>(null)
const nicheItem = ref<HTMLParagraphElement[]>([])

const niches = ref<string[]>([
    'Arts & Culture',
    'Civic & Public',
    'Design & Architecture',
    'Fashion & Beauty',
    'Industrial & Agriculture',
    'Non Profit',
    'Professional Services',
])

onMounted(() => {
    const tl = $gsap.timeline({
        scrollTrigger: {
            trigger: '.niche-body',
            start: '-450%',
            end: '60%',
        },
    })
    $gsap.set('.line', { scaleX: 0, transformOrigin: 'left center' })
    tl.to('.line', { scaleX: 1, duration: 1.75, ease: 'power3.out' })
    tl.fromTo(nicheTitle.value, { opacity: 0 }, { opacity: 1 }, '<')
    tl.fromTo(nicheItem.value, { y: 25, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 }, '<30%')
})
</script>
