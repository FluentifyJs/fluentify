/* eslint-disable no-undef */
import FTimePicker from './FTimePicker.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FTimePicker.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    Empty
    <FTimePicker />
    <br />
    <br />
    Has value
    <FTimePicker v-model="value" />
    <br />
    <br />
    Has label
    <FTimePicker label="Unit label test" />
`, {
      components: {
        FTimePicker
      },
      data() {
        return {
          value: 'Yes it have'
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-input input')[0].value.length).to.be.equal(0)
    expect(vm.$el.querySelectorAll('.f-input input')[1].value.length).to.be.equal(11)
  })
})