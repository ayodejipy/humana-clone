<template>
    <div class="w-full pb-14 sm:pb-32">
        <div class="w-full overflow-hidden flex flex-col gap-6 md:gap-0 md:flex-row">
            <div
                class="contactBlock relative w-full md:flex-[0_0_25%] md:max-w-[25%] space-y-3 md:space-y-0"
            >
                <h4 class="font-light text-2xl md:text-3xl sm:mb-5">Office</h4>
                <p class="font-light text-xl text-gray-800 sm:mb-3">Lagos, Nigeria</p>
                <p class="font-light text-xl text-gray-800">
                    Monday, Thursday 9am to 6am
                    <span class="text-cyan-600">(GMT+1)</span>
                </p>
            </div>
            <div
                class="contactBlock relative w-full md:flex-[0_0_22%] md:max-w-[22%] sm:px-1.5 space-y-3 md:space-y-0"
            >
                <h4 class="font-light text-3xl sm:mb-5">Connect with us</h4>
                <p class="anim_connectWithUs font-light text-xl text-gray-800 sm:mb-3">
                    <a href="mailto:hello@rainbow.netlify.com">
                        hello@rainbow.netlify.com
                        <span class="text-gray-500 inline-block md:hidden">↗</span>
                    </a>
                </p>
                <p class="anim_connectWithUs font-light text-xl text-cyan-500">
                    Creative? Share your work.
                </p>
            </div>
            <div class="contactBlock relative w-full md:flex-[0_0_28%] md:max-w-[28%] sm:pl-16">
                <h4 class="font-light text-2xl md:text-3xl mb-4 sm:mb-5">Join our newsletter</h4>
                <div class="flex flex-col gap-8">
                    <div class="w-full relative">
                        <label for="fullname" class="absolute top-0 font-light text-gray-400">
                            Your name
                        </label>
                        <input
                            ref="inputElem"
                            type="text"
                            name="fullname"
                            tabindex="-1"
                            aria-label="User fullname"
                            class="relative z-10 bg-transparent rounded-none w-full block py-1 px-3 border-b border-gray-200 focus:ouline-none outline-none focus:border-b focus:border-yellow-400"
                        />
                        <div
                            class="bg-red-600 h-px w-full absolute bottom-0 z-10 transform scale-x-0 transition-all duration-150"
                        />
                    </div>
                    <div class="flex justify-between gap-2">
                        <div class="w-5/6 relative">
                            <label for="email" class="absolute top-0 font-light text-gray-400">
                                Email
                            </label>
                            <input
                                ref="inputElem"
                                type="email"
                                name="email"
                                tabindex="-1"
                                aria-label="User email"
                                class="relative z-10 bg-transparent rounded-none w-full block py-1 px-3 border-b border-gray-200 focus:ouline-none outline-none focus:border-b focus:border-yellow-400"
                            />
                            <div
                                class="bg-red-600 h-px w-full absolute bottom-0 z-10 transform scale-x-0 transition-all duration-150"
                            ></div>
                        </div>
                        <button
                            type="button"
                            arial-label="Join newsletter button"
                            class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:text-white hover:bg-teal-400"
                        >
                            <span class="text-gray-500">↗</span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="contactBlock relative w-full md:flex-[0_0_23%] md:max-w-[23%] sm:pl-[9.12rem] space-y-3 md:space-y-0"
            >
                <h4 class="font-light text-2xl md:text-3xl sm:mb-5">Follow us</h4>
                <div class="grid grid-cols-2 gap-y-2.5">
                    <a
                        v-for="social in socials"
                        :key="social.name"
                        :href="social.link"
                        class="font-light text-lg leading-none"
                    >
                        {{ `${social.name} ↗` }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const { $gsap } = useNuxtApp()

const contactBlock = ref<HTMLDivElement | null>(null)
const inputElem = ref<HTMLInputElement | null>(null)

const socials = ref<{ name: string; link: string }[]>([
    { name: 'Instagram', link: 'https://instagram.com' },
    { name: 'LinkedIn', link: 'https://linkedin.com' },
    { name: 'Github', link: 'https://linkedin.com' },
    { name: 'Medium', link: 'https://medium.com' },
    { name: 'Spotify', link: 'https://spotify.com' },
])
onMounted(() => {
    ScrollTrigger.batch('.contactBlock', {
        onEnter: (element) => {
            $gsap.fromTo(
                element,
                { y: '100%' },
                { y: 0, stagger: 0.3, duration: 1.2, ease: 'power3.out' }
            )
        },
        once: true,
    })

    ScrollTrigger.batch('.anim_connectWithUs', {
        onEnter: (element) => {
            $gsap.fromTo(
                element,
                { opacity: 0, y: '100%' },
                { opacity: 1, y: 0, stagger: 0.4, duration: 1.2, ease: 'power3.out' }
            )
        },
        once: true,
    })

    // add event listener
    inputElem.value?.addEventListener('click', (event) => {
        console.log('e: ', event)
    })
})
</script>
