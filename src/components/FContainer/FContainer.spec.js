/* eslint-disable no-undef */
import FContainer from './FContainer'

import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FContainer.vue', function () {
  it('should render container', function () {
    const vm = createVM(this, `
    <FContainer grid-flow="row">
        <h3>Fluentify Container</h3>
    </FContainer>
`, {
      components: {
        FContainer
      },
      data() {
        return {
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-container').length).to.be.equal(1)
  })
})