/* eslint-disable no-undef */
import FTextarea from './FTextarea.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FTextarea.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    Empty
    <FTextarea />
    <br />
    <br />
    Has value
    <FTextarea v-model="value" />
    <br />
    <br />
    Has label
    <FTextarea label="Unit label test" />
`, {
      components: {
        FTextarea
      },
      data() {
        return {
          value: 'Yes it have'
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-textarea textarea')[0].value.length).to.be.equal(0)
    expect(vm.$el.querySelectorAll('.f-textarea textarea')[1].value.length).to.be.equal(11)
  })
})