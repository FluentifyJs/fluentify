/* eslint-disable no-undef */
import FInput from './FInput.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FInput.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    Empty
    <FInput />
    <br />
    <br />
    Has value
    <FInput v-model="value" />
    <br />
    <br />
    Has label
    <FInput label="Unit label test" />
`, {
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
    expect(vm.$el.querySelectorAll('.f-input input')[1].value.length).to.be.equal(11)
  })
})