/* eslint-disable no-undef */
import FListItemContent from './FListItemContent.vue'
import { createVM } from 'src/../test/helpers/utils.js'
import { expect } from 'chai'

describe('FListItemContent.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <FListItemContent>
      Hello
    </FListItemContent>
`, { components: { FListItemContent }})
    expect(vm.$el.querySelectorAll('.f-list-item-content').length).to.be.equal(1)
  })
})
