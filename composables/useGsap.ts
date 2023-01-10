type ElementType = string | HTMLElement 

export default function () {
    const { $gsap } = useNuxtApp()

    // trying to create composable for each animations
    function AnimateLine(el: ElementType) {
        $gsap.set('.line', { scaleX: 0, transformOrigin: 'left center' })
        // tl.to(el, { scaleX: 1, duration: 1.75, ease: 'power3.out' })
    }

    return { AnimateLine }
}
