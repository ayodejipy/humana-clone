<template>
    <div class="w-full sm:pb-32">
        <div class="w-full flex items-start">
            <div class="relative flex-[0_0_25%] max-w-[25%]">
                <h4 class="font-light text-3xl sm:mb-5">Office</h4>
                <p class="font-light text-xl text-gray-800 sm:mb-3">Lagos, Nigeria</p>
                <p class="font-light text-xl text-gray-800">
                    Monday, Thursday 9am to 6am
                    <span class="text-cyan-600">(GMT+1)</span>
                </p>
            </div>
            <div class="relative flex-[0_0_22%] max-w-[22%] sm:px-1.5">
                <h4 class="font-light text-3xl sm:mb-5">Connect with us</h4>
                <p class="font-light text-xl text-gray-800 sm:mb-3">
                    <a href="mailto:hello@rainbow.netlify.com">hello@rainbow.netlify.com</a>
                </p>
                <p class="font-light text-xl text-cyan-500">Creative? Share your work.</p>
            </div>
            <div class="relative flex-[0_0_28%] max-w-[28%] sm:pl-16">
                <h4 class="font-light text-3xl sm:mb-5">Join our newsletter</h4>
                <div class="flex flex-col gap-8">
                    <div class="w-full relative">
                        <label for="fullname" class="absolute top-0 text-gray-700">Your name</label>
                        <input
                            type="text"
                            name="fullname"
                            tabindex="-1"
                            aria-label="User fullname"
                            class="relative z-10 bg-transparent w-full block py-1 px-3 border-b border-gray-200 focus:ouline-none outline-none focus:border-b focus:border-yellow-400"
                        />
                        <div class="bg-red-600 h-px w-full absolute bottom-0 z-10 transform scale-x-0 transition-all duration-150"></div>
                    </div>
                    <div class="flex justify-between gap-2">
                        <div class="w-5/6 relative">
                            <label for="email" class="absolute top-0 text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                tabindex="-1"
                                aria-label="User email"
                                class="relative z-10 bg-transparent w-full block py-1 px-3 border-b border-gray-200 focus:ouline-none outline-none focus:border-b focus:border-yellow-400"
                            />
                            <div class="bg-red-600 h-px w-full absolute bottom-0 z-10 transform scale-x-0 transition-all duration-150"></div>
                        </div>
                        <button
                            type="button"
                            arial-label="Join newsletter button"
                            class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200"
                        >
                            <span class="text-gray-500">↗</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="relative flex-[0_0_23%] max-w-[23%] sm:pl-[9.12rem]">
                <h4 class="font-light text-3xl sm:mb-5">Follow us</h4>
                <div class="grid grid-cols-2 gap-y-2.5">
                    <a v-for="social in socials" :key="social.name" :href="social.link" class="font-light text-lg leading-none">
                        {{ `${social.name} ↗` }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const socials = ref<{ name: string; link: string }[]>([
    { name: 'Instagram', link: 'https://instagram.com' },
    { name: 'LinkedIn', link: 'https://linkedin.com' },
    { name: 'Github', link: 'https://linkedin.com' },
    { name: 'Medium', link: 'https://medium.com' },
    { name: 'Spotify', link: 'https://spotify.com' },
])
</script>
