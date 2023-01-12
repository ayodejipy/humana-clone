<template>
    <div class="w-full pb-24 sm:pb-60">
        <div class="w-full flex flex-col gap-6 md:gap-0 md:flex-row items-start overflow-hidden">
            <div
                class="overflow-hidden anim_workWithUs relative w-full md:flex-[0_0_25%] md:max-w-[25%]"
            >
                <p class="font-light text-3xl md:text-5xl text-gray-800">Work with us</p>
            </div>
            <div
                class="overflow-hidden anim_workWithUs relative w-full md:flex-[0_0_25%] md:max-w-[25%] sm:px-1.5"
            >
                <p class="text-xl md:text-2xl text-gray-800 font-light">
                    We are eager to learn about your organization and to help you achieve a
                    well-defined out-of-the-box visual strategy.
                </p>
            </div>
            <div
                class="overflow-hidden anim_workWithUs relative w-full md:flex-[0_0_25%] md:max-w-[25%] sm:pl-36"
            >
                <p class="text-xl text-gray-800 font-light">
                    You can contact us at:
                    <a href="mailto:hello@rainbow.netlify.com">hello@rainbow.netlify.com</a>
                </p>
            </div>
            <div
                class="overflow-hidden anim_workWithUs relative w-full md:flex-1 flex justify-start sm:pl-[9.12rem]"
            >
                <button
                    type="button"
                    class="capitalize border border-gray-200 px-4 py-1 text-lg font-light tracking-wide rounded-full"
                >
                    Get in touch ↗
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const { $gsap } = useNuxtApp()

onMounted(() => {
    ScrollTrigger.batch('.anim_workWithUs', {
        onEnter: (element) => {
            $gsap.fromTo(
                element,
                { y: '100%', opacity: 0 },
                { opacity: 1, y: 0, stagger: 0.3, duration: 2, ease: 'power3.out' }
            )
        },
        once: true,
    })
})
</script>
