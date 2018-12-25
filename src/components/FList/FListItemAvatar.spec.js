/* eslint-disable no-undef */
import FListItemAvatar from './FListItemAvatar.vue'
import { FAvatar } from '../FAvatar'
import { createVM } from 'src/../test/helpers/utils.js'
import { expect } from 'chai'

describe('FListItemAvatar.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <FListItemAvatar>
      <FAvatar src="https://via.placeholder.com/48" />
    </FListItemAvatar>
`, { components: { FListItemAvatar, FAvatar }})
    expect(vm.$el.querySelectorAll('.f-list-item-avatar').length).to.be.equal(1)
  })
})
