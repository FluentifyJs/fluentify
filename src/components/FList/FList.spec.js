/* eslint-disable no-undef */
import FList from './FList.vue'
import FListItem from './FListItem.vue'
import { createVM } from 'src/../test/helpers/utils.js'
import { expect } from 'chai'

describe('FList.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <FList>Nice</FList>
`, { components: { FList, FListItem }})
    expect(vm.$el.querySelectorAll('.f-list').length).to.be.equal(1)
  })
})
