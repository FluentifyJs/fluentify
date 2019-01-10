/* eslint-disable no-undef */
import FCard from './FCard.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FCard.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <FCard>
      <p class="caption">PROFILE</p>
    </FCard>
`, {
      components: {
        FCard
      },
      data() {
        return {
          value: 'Yes it have'
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-card').length).to.be.equal(1)
  })
})