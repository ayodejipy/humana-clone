<template>
    <div class="block md:hidden col-start-2 py-2.5 w-full h-full">
        <div class="flex justify-end">
            <button ref="hamburgerBtn" data-type="hamburger-menu" role="button" @click="toggleMenu">
                <!-- <svg
                    ref="hamburgerIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-14 h-28"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg> -->

                <svg
                    ref="hamburgerIcon"
                    viewBox="0 0 12 10"
                    stroke-width="1.5"
                    class="hamburger"
                    :class="[open ? 'text-gray-600' : 'text-gray-900']"
                    height="30px"
                    width="35px"
                >
                    <path
                        d="M10,2 L2,2"
                        class="upper"
                        style="fill: none; stroke: currentColor; stroke-linecap: round"
                    />
                    <path
                        d="M2,5 L10,5"
                        class="middle"
                        style="fill: none; stroke: currentColor; stroke-linecap: round"
                    />
                    <path
                        d="M10,8 L2,8"
                        class="lower"
                        style="fill: none; stroke: currentColor; stroke-linecap: round"
                    />
                </svg>
            </button>
        </div>
    </div>
    <div ref="offsetMenu" class="menu__items w-full h-full">
        <ul
            class="text-white w-full h-full flex flex-col items-center justify-center gap-6 md:gap-0"
        >
            <li
                v-for="(link, index) in links"
                ref="linkList"
                :key="link.name"
                class="w-full md:flex-[0_0_17%] md:max-w-[30%] text-center md:self-start"
            >
                <NuxtLink
                    class="inline-block text-2xl md:text-lg font-light text-gray-600 relative transform transition-all duration-150 ease-out group hover:translate-x-5 hover:scale-125"
                    :to="link.path"
                >
                    <span class="font-light text-sm text-gray-300 absolute top-1 -left-6">
                        {{ index <= 9 ? `0${index + 1}` : `${index + 1}` }}
                    </span>
                    {{ link.name }}
                    <span
                        class="inline-block text-xs text-gray-600 origin-bottom scale-0 group-hover:scale-110"
                    >
                        ↗
                    </span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import type { NavLinksType } from '~~/utils/types/page'
const { $gsap } = useNuxtApp()
const open = ref<boolean>(false)
const offsetMenu = ref<HTMLDivElement | null>(null)
const hamburgerBtn = ref<HTMLButtonElement | null>(null)
const hamburgerIcon = ref<HTMLOrSVGElement | null>(null)
const linkList = ref<HTMLUListElement | null>(null)

defineProps<{
    links: NavLinksType[]
}>()

const toggleMenu = () => {
    open.value = !open.value
    const tl = $gsap.timeline({
        defaults: {
            duration: 1.15,
            ease: 'power3.out',
        },
    })
    const tlMenu = $gsap.timeline({
        defaults: {
            duration: 0.4,
            ease: 'power3.out',
        },
    })

    // if menu is open, trigger this
    if (open.value) {
        tlMenu.to('.upper', { attr: { d: 'M8,2 L2,8' }, x: 1 })
        tlMenu.to('.middle', { opacity: 0 }, '<')
        tlMenu.to('.lower', { attr: { d: 'M8,8 L2,2' }, x: 1 }, '<')

        tl.fromTo(
            offsetMenu.value,
            { y: '-100%', opacity: 0 },
            {
                y: 0,
                opacity: 1,
            }
        )
        $gsap.fromTo(
            linkList.value,
            { y: '-100%', opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.3,
            }
        )
    } else {
        tl.to(offsetMenu.value, {
            opacity: 0,
            // y: '-100%',
            duration: 0.75,
        })
        tlMenu.to('.upper', { attr: { d: 'M10,2 L2,2' }, x: 1 })
        tlMenu.to('.middle', { opacity: 1, x: 1 }, '<')
        tlMenu.to('.lower', { attr: { d: 'M10,8 L2,8' }, x: 1 }, '<')
    }
}
</script>

<style scoped>
.menu__items {
    @apply z-[-1] w-full h-full fixed inset-x-0 bg-white transform -translate-y-full;
}
</style>
