/* eslint-disable no-undef */
import FSlider from './FSlider.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FSlider.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <FSlider v-model="value" min="0" max="550" label="Unit label test" />
`, {
      components: {
        FSlider
      },
      data() {
        return {
          value: 300
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-slider').length).to.be.equal(1)
  })
})