import FInput from '../../src/components/FInput/FInput.vue'
/* eslint-disable no-undef */

import { shallowMount } from '@vue/test-utils'
import {
  expect
} from 'chai'

describe('FInput.vue', function () {
  it('should render correct contents', function () {
    const label = 'new message'
    const wrapper = shallowMount(FInput, {
      // propsData: { label }
      slots: {
        default: label
      },
      data() {
        return {
          value: 'Yes it have'
        }
      }
    })
    expect(wrapper.text()).to.include(label)
    expect(vm.$el.querySelectorAll('.f-input input')[0].value.length).to.be.equal(0)
    expect(vm.$el.querySelectorAll('.f-input input')[1].value.length).to.be.equal(11)
  })
})

/* `, {
      components: {
        FInput
      },
      data() {
        return {
          value: 'Yes it have'
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-input input')[0].value.length).to.be.equal(0)
    expect(vm.$el.querySelectorAll('.f-input input')[1].value.length).to.be.equal(11) */