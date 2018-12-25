/* eslint-disable no-undef */
import FRadio from './FRadio.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FRadio.vue', function () {
  it('should render normal unchecked', function () {
    const vm = createVM(this, `
      <FRadio label="Normal checked" name="specs" v-model="value" :value="1" />
      <FRadio label="Normal unchecked" name="specs" v-model="value" :value="2" />
      <FRadio label="Normal unchecked" name="specs" v-model="value" :value="3" :disabled="true" />
    `, {
      components: {
        FRadio
      },
      data() {
        return {
          value: 1
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-radio input')[0].checked).to.be.equal(true)
  })
})
