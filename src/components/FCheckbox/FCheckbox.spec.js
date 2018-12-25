/* eslint-disable no-undef */
import FCheckbox from './FCheckbox.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FCheckbox.vue', function () {
  it('should render normal unchecked', function () {
    const vm = createVM(this, `
      <FCheckbox label="Normal unchecked" />
    `, {
      components: {
        FCheckbox
      },
      data() {
        return {
          value: true
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-checkbox input')[0].checked).to.be.equal(false)
  })
  it('should render normal checked', function () {
    const vm = createVM(this, `
        <FCheckbox label="Normal checked" v-model="value" />
      `, {
      components: {
        FCheckbox
      },
      data() {
        return {
          value: true
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-checkbox input')[0].checked).to.be.equal(true)
  })
  it('should render normal indeterminate', function () {
    const vm = createVM(this, `
        <FCheckbox label="Normal indeterminate" indeterminate />
      `, {
      components: {
        FCheckbox
      },
      data() {
        return {
          value: true
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-checkbox input')[0].indeterminate).to.be.equal(true)
  })
})