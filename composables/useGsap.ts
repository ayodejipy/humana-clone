export default function () {
    const { $gsap } = useNuxtApp()

    // trying to create composable for each animations
    function AnimateLine(el: HTMLElement | null) {
        const tl = $gsap.timeline({ defaults: { duration: 0.75 } })
        tl.to(el, { scaleX: '100%' })
    }

    return { AnimateLine }
}
