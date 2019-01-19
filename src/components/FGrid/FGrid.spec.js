/* eslint-disable no-undef */
import FGrid from './FGrid'
import FGridItem from './FGridItem'

import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FGrid.vue', function () {
  it('should render single line list', function () {
    const vm = createVM(this, `
    <FGrid grid-flow="row">
      <FGridItem column-start="xs-1 sm-2 md-4 lg-5 xl-5" column-end="xs-12 sm-11 md-9 lg-8 xl-8">
      Hello
      </FGridItem>
    </FGrid>
`, {
      components: {
        FGrid,
        FGridItem
      },
      data() {
        return {
          src: 'https://via.placeholder.com/48',
          size: 32
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-grid').length).to.be.equal(1)
  })
})