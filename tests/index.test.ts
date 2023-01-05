import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import {} from '#components'

describe('index.vue', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(index)
        expect(wrapper.vm).toBeTruthy()
    })
})
