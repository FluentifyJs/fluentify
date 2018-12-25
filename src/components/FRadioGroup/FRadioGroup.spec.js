/* eslint-disable no-undef */
import FRadioGroup from './FRadioGroup.vue'
import FRadio from '../FRadio/FRadio.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FRadioGroup.vue', function () {
  it('should render second as selected', function () {
    const vm = createVM(this, `
      <div style="width:300px;">
        <FRadioGroup label="RadioButton group label" v-model="value">
          <FRadio
            v-for="n in 3"
            :key="n"
            :label="'Radio' + n"
            :value="n"
          />
          <FRadio
            label="Action text 4 that displays how this text wraps to two lines"
            :value="4"
          />
        </FRadioGroup>
      </div>
    `, {
      components: {
        FRadioGroup,
        FRadio
      },
      data() {
        return {
          value: 2
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-radio input')[1].checked).to.be.equal(true)
  })
})