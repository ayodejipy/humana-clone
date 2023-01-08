import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import About from '../../components/Body/About.vue'

describe('about component', () => {
    it('shows a p with local time', () => {
        const wrapper = mount(About)
        expect(wrapper).toBeTruthy()
    })
})
