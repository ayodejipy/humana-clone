<template>
    <div class="vision pb-24 sm:pb-52">
        <Line ref="lineElem" class="md:mb-20" />

        <div class="mt-12 mb-6 md:mt-6 md:mb-6 overflow-hidden">
            <button
                ref="visionBtn"
                type="button"
                class="border border-gray-200 px-4 py-1 text-lg font-light tracking-wide rounded-full"
            >
                Our Vision ↗
            </button>
        </div>

        <div class="w-full sm:mb-10 overflow-hidden">
            <h3
                ref="title"
                class="font-light text-3xl md:text-[3.2rem] text-gray-800 md:leading-tight"
            >
                We’ve worked extensively in terms of geography and sector, developing a variety of
                work — products, services, and experiences — that has taught us that a well-defined
                visual strategy is key to bring visibility, credibility, and funds to any
                organization. Starting in 2021, we decided to plant a tree for each client that we
                work with.
            </h3>
        </div>

        <div class="w-full flex flex-wrap md:flex-nowrap pt-12 sm:pt-16">
            <div class="flex-[1_1_50%] md:flex-[0_0_25%] md:max-w-[25%] relative pt-6 md:pt-0">
                <h2
                    class="anim_statsCount font-medium text-[4.95rem] md:text-[6.5rem] leading-none"
                >
                    5
                </h2>
                <h4
                    class="absolute top-7 md:top-1.5 left-12 text-[2rem] md:left-16 md:text-[2.5rem] font-normal"
                >
                    Years
                </h4>
                <p class="capitalize text-xl mt-2 text-gray-800 font-light">Doing our best</p>
            </div>
            <div
                class="flex-[1_1_50%] md:flex-[0_0_25%] md:max-w-[25%] relative pt-6 md:pt-0 md:pl-1"
            >
                <h2
                    class="anim_statsCount font-medium text-[4.95rem] md:text-[6.5rem] leading-none"
                >
                    100
                </h2>
                <p class="capitalize text-xl mt-2 text-gray-800 font-light">Completed Projects</p>
            </div>
            <div
                class="flex-[1_1_50%] md:flex-[0_0_25%] md:max-w-[25%] relative pt-6 md:pt-0 md:pl-1.5"
            >
                <h2
                    class="anim_statsCount font-medium text-[4.95rem] md:text-[6.5rem] leading-none"
                >
                    4
                </h2>
                <p class="capitalize text-xl mt-2 text-gray-800 font-light">Countries Worldwide</p>
            </div>
            <div
                class="flex-[1_1_50%] md:flex-[0_0_25%] md:max-w-[25%] relative pt-6 md:pt-0 md:pl-2"
            >
                <h2
                    class="anim_statsCount font-medium text-[4.95rem] md:text-[6.5rem] leading-none"
                >
                    34
                </h2>
                <p class="capitalize text-xl mt-2 text-gray-800 font-light">Trees Planted</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Line from '@/components/Common/Line.vue'
const { $gsap } = useNuxtApp()
const lineElem = ref<HTMLDivElement | null>(null)
const title = ref<HTMLHeadingElement | null>(null)
const visionBtn = ref<HTMLButtonElement | null>(null)

onMounted(() => {
    const tl = $gsap.timeline({
        defaults: {
            duration: 2,
            ease: 'power2.out',
        },
        scrollTrigger: {
            trigger: '.vision',
            // start: '70%',
            // end: '+=350',
            // markers: true,
        },
    })
    // $gsap.set(lineElem.value, { scaleX: 0, transformOrigin: 'left center' })
    // tl.to(lineElem.value, {
    //     scaleX: 1,
    //     scrollTrigger: {
    //         trigger: '.selected-projects',
    //         start: '50%',
    //         markers: true,
    //     },
    // })
    tl.fromTo(visionBtn.value, { y: '100%' }, { y: 0 })
    tl.fromTo(title.value, { y: '100%' }, { y: 0 }, '<20%')

    // statistics count up
    $gsap.from('.anim_statsCount', {
        textContent: 0,
        duration: 0.75,
        ease: 'power1.in',
        snap: { textContent: 1 },
        stagger: {
            each: 0.1,
            onUpdate: function () {
                // @ts-ignore
                this.targets()[0].innerHTML = Math.floor(this.targets()[0].textContent)
            },
        },
    })
})
</script>
