export default function () {
    const { $gsap } = useNuxtApp()

    function animateNewsletter(targets: HTMLElement[]) {
        targets.forEach((element) => {
            const label = element.querySelector('.field-label') as HTMLInputElement | null
            const input = element.querySelector('.input-elem') as HTMLInputElement | null
            const line = element.querySelector('.line') as HTMLDivElement | null

            // check if field is not empty
            if (!input?.value) {
                input?.addEventListener('focus', (event) => {
                    $gsap.to(label, {
                        top: -16,
                        left: 0,
                        transformOrigin: 'left',
                        scale: 0.7,
                        duration: 0.5,
                        ease: 'power2.out',
                    })

                    $gsap.fromTo(
                        line,
                        {
                            scaleX: 0,
                            opacity: 0,
                            width: 0,
                            transformOrigin: 'left',
                        },
                        {
                            scaleX: 1,
                            opacity: 1,
                            width: '100%',
                            duration: 1.5,
                            ease: 'power3.out',
                        }
                    )
                })
            }
        })

        // add event listener to document obj to handle on click outside of the form
        document.addEventListener('click', () => {
            targets.forEach((element: any) => {
                const label = element.querySelector('.field-label') as HTMLInputElement | null
                const input = element.querySelector('.input-elem') as HTMLInputElement | null
                const line = element.querySelector('.line') as HTMLDivElement | null

                if (document.activeElement !== input) {
                    if (!input?.value) {
                        $gsap.to(label, {
                            top: 0,
                            left: 0,
                            scale: 1,
                            duration: 0.5,
                            ease: 'power2.out',
                        })

                        $gsap.to(line, {
                            scaleX: 0,
                            opacity: 0,
                            width: 0,
                            duration: 1.5,
                            ease: 'power3.out',
                        })
                    }
                }
            })
        })
    }

    // expose functions
    return {
        animateNewsletter,
    }
}
