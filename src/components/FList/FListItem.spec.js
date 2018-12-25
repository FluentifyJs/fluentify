/* eslint-disable no-undef */
import FListItem from './FListItem.vue'
import FListItemContent from './FListItemContent.vue'
import FListItemAvatar from './FListItemAvatar.vue'
import { createVM } from 'src/../test/helpers/utils.js'
import { expect } from 'chai'

describe('FListItem.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <FListItem>
      <FListItemAvatar>
        H
      </FListItemAvatar>
      <FListItemContent>
        Hello
      </FListItemContent>
    </FListItem>
`, { components: { FListItem, FListItemContent, FListItemAvatar }})
    expect(vm.$el.querySelectorAll('.f-list-item').length).to.be.equal(1)
  })
})
