<template>
    <div class="pb-24 sm:pb-52">
        <div class="w-full flex flex-col gap-6 md:gap-x-10 md:flex-row sm:pb-8">
            <div class="w-full md:flex-[0_0_16.66%] md:max-w-[16.66%] flex items-start">
                <p
                    class="border border-gray-200 px-6 py-1 text-lg font-light tracking-wide rounded-full"
                >
                    Our Impact
                </p>
            </div>

            <div class="w-full md:flex-[0_0_32%] md:max-w-[32%] sm:px-1.5">
                <p
                    class="font-light text-3xl md:text-5xl text-gray-800 leading-tight md:leading-snug"
                >
                    You don’t have to take our word for it.
                </p>
            </div>
            <div class="w-full md:flex-1 sm:px-7">
                <p class="font-light text-3xl md:text-5xl text-gray-800">
                    Here’s what some of our clients have to say about the power of a well-defined
                    visual strategy.
                </p>
            </div>
        </div>

        <div class="mt-16 sm:mt-12">
            <div
                v-for="testimony in testimonials"
                :key="testimony.brand"
                class="w-full h-[7.75rem] md:h-auto relative overflow-hidden md:overflow-auto flex flex-col md:flex-row pt-4 md:pb-10 mb-1 md:mb-0 border-t border-gray-200 last:border-b last:border-b-gray-200"
            >
                <div class="relative w-full md:flex-[0_0_16.67%] md:max-w-[18%]">
                    <p class="font-light text-xl text-gray-800 mb-6 md:mb-0">
                        {{ testimony.brand }}
                    </p>
                </div>
                <div class="relative w-full md:flex-[0_0_16.67%] md:max-w-[18%]">
                    <p class="capitalize text-xl text-gray-800 font-light">{{ testimony.name }}</p>
                </div>
                <div class="relative w-full md:flex-[0_0_16.67%] md:max-w-[18%] sm:pl-1">
                    <p class="capitalize text-xl text-gray-800 font-light">{{ testimony.role }}</p>
                </div>
                <div class="relative w-full flex-1 sm:pl-2">
                    <p class="capitalize text-xl text-gray-800 font-light">{{ testimony.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
type TestimonialsType = {
    brand: string
    name: string
    role: string
    text: string
}
const testimonials = ref<TestimonialsType[]>([
    {
        brand: 'Run Skin',
        name: 'John Doe',
        role: 'Founder & CEO',
        text: 'Publications on Vogue, Vanity Fair and Condé Nast - “(...) I have been contacted by major publications such as Vogue and Vanity Fair because of my aesthetic, brand presentation, imagery, and brand story. I could have not done it alone.”',
    },
    {
        brand: 'Creation Hub',
        name: 'John Doe',
        role: 'Managing Director',
        text: '150% growth in applications for Bora Mulheres by Coca Cola - "A disruptive digital presence is key to make your story remarkable, Humana is the key partner to make this happen."',
    },
    {
        brand: "Lock'N Load",
        name: 'Jane Doe',
        role: 'Co-Founder',
        text: '150% growth in applications for Bora Mulheres by Coca Cola - "A disruptive digital presence is key to make your story remarkable, Humana is the key partner to make this happen."',
    },
    {
        brand: 'Helen Dynasty',
        name: 'Helen Foster',
        role: 'Co-Founder',
        text: '150% growth in applications for Bora Mulheres by Coca Cola - "A disruptive digital presence is key to make your story remarkable, Humana is the key partner to make this happen."',
    },
])
</script>