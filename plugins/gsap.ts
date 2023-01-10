import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
    gsap.registerPlugin(ScrollTrigger)
    nuxtApp.vueApp.use(gsap)

    return {
        provide: {
            gsap,
        },
    }
})
