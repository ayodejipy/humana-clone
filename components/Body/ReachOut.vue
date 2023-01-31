<template>
    <div ref="ctaBlock" class="w-full pb-14 sm:pb-32">
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
                <div>
                    <form ref="formWrapper" class="flex flex-col gap-8">
                        <div ref="inputContainer" class="input-container w-full relative">
                            <label
                                ref="fieldLabel"
                                for="fullname"
                                class="field-label absolute top-0 font-light text-gray-400"
                            >
                                Your name
                            </label>
                            <input
                                ref="inputElem"
                                type="text"
                                name="fullname"
                                tabindex="-1"
                                aria-label="User fullname"
                                class="input-elem relative z-10 bg-transparent rounded-none w-full block py-1 text-gray-500 border-b border-gray-200 focus:ouline-none outline-none"
                            />
                            <div
                                class="line bg-teal-500 h-px w-full absolute bottom-0 z-10 opacity-0"
                            />
                        </div>
                        <div class="flex items-start justify-between gap-2">
                            <div ref="inputContainer" class="input-container w-5/6 relative">
                                <label
                                    ref="fieldLabel"
                                    for="email"
                                    class="field-label absolute top-0 font-light text-gray-400"
                                >
                                    Email
                                </label>
                                <input
                                    ref="inputElem"
                                    type="email"
                                    name="email"
                                    tabindex="-1"
                                    aria-label="User email"
                                    class="input-elem relative z-10 bg-transparent rounded-none w-full block py-1 text-gray-500 border-b border-gray-200 focus:ouline-none outline-none"
                                />
                                <div
                                    class="line bg-teal-500 h-px w-full absolute bottom-0 z-10 opacity-0"
                                />
                            </div>
                            <button
                                type="button"
                                arial-label="Join newsletter button"
                                class="w-10 h-10 flex items-center justify-center rounded-full border group border-gray-200 hover:border-teal-500 hover:text-white hover:bg-teal-500"
                            >
                                <span class="text-gray-500 group-hover:text-white"> ↗ </span>
                            </button>
                        </div>
                    </form>
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
import useFooterAnim from '@/composables/useFooterAnim'
const { $gsap } = useNuxtApp()

const { animateNewsletter } = useFooterAnim()

const ctaBlock = ref<HTMLFormElement | null>(null)
const formWrapper = ref<HTMLFormElement | null>(null)
const inputContainer = ref<HTMLDivElement | null>(null)
const inputElem = ref<HTMLInputElement | null>(null)
const fieldLabel = ref<HTMLLabelElement | null>(null)

const socials = ref<{ name: string; link: string }[]>([
    { name: 'Instagram', link: 'https://instagram.com' },
    { name: 'LinkedIn', link: 'https://linkedin.com' },
    { name: 'Github', link: 'https://linkedin.com' },
    { name: 'Medium', link: 'https://medium.com' },
    { name: 'Spotify', link: 'https://spotify.com' },
])

// SIDE EFFECTS
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

    // NEWSLETTER ANIMATION
    const targets: HTMLElement[] = $gsap.utils.toArray('.input-container')
    animateNewsletter(targets)
})
</script>
