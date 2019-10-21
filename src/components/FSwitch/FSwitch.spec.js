/* eslint-disable no-undef */
import FSwitch from './FSwitch.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FSwitch.vue', function () {
  it('should render normal unchecked', function () {
    const vm = createVM(this, `
      <FSwitch label="Normal unchecked" />
    `, {
      components: {
        FSwitch
      },
      data() {
        return {
          value: true
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-switch input')[0].checked).to.be.equal(false)
  })
  it('should render normal checked', function () {
    const vm = createVM(this, `
        <FSwitch label="Normal checked" v-model="value" />
      `, {
      components: {
        FSwitch
      },
      data() {
        return {
          value: true
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-switch input')[0].checked).to.be.equal(true)
  })
  it('should render normal indeterminate', function () {
    const vm = createVM(this, `
        <FSwitch label="Normal indeterminate" indeterminate />
      `, {
      components: {
        FSwitch
      },
      data() {
        return {
          value: true
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-switch input')[0].indeterminate).to.be.equal(true)
  })
})