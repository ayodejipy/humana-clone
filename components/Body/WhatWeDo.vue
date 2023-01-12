<template>
    <div class="w-full pb-24 sm:pb-60 overflow-hidden">
        <div
            class="w-full flex flex-col items-start gap-3 md:gap-0 md:flex-row md:items-center overflow-hidden"
        >
            <div class="tabs relative md:flex-[0_0_16.67%] md:max-w-[18%]">
                <p class="font-light text-xl text-gray-700 mb-8 md:mb-0">How?</p>
            </div>
            <div class="tabs relative md:flex-[0_0_16.67%] md:max-w-[18%]">
                <p class="capitalize text-xl text-gray-800 font-light">Brand Strategy</p>
            </div>
            <div class="tabs relative md:flex-[0_0_16.67%] md:max-w-[18%] sm:pl-1">
                <p class="capitalize text-xl text-gray-800 font-light">Brand Identity</p>
            </div>
            <div class="tabs relative md:flex-[0_0_16.67%] md:max-w-[18%] sm:pl-1">
                <p class="capitalize text-xl text-gray-800 font-light">Brand Communication</p>
            </div>
            <div class="tabs relative flex-1 flex justify-start sm:pl-[9.12rem]">
                <button
                    type="button"
                    class="border border-gray-200 px-4 py-1 text-lg font-light tracking-wide rounded-full"
                >
                    Learn more ↗
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const { $gsap } = useNuxtApp()

onMounted(() => {
    ScrollTrigger.batch('.tabs', {
        onEnter: (element) => {
            $gsap.fromTo(
                element,
                { y: '100%' },
                { y: 0, stagger: 0.2, duration: 1.2, ease: 'power3.out' }
            )
        },
        once: true,
    })
})
</script>
