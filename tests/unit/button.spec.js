import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import FBtn from '../../src/components/FBtn/FBtn.vue'

describe('FBtn.vue', () => {
  it('renders label in default slot when passed', () => {
    const label = 'new message'
    const wrapper = shallowMount(FBtn, {
      // propsData: { label }
      slots: {
        default: label
      }
    })
    expect(wrapper.text()).to.include(label)
  })
})
