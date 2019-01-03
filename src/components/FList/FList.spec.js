/* eslint-disable no-undef */
import FList from './FList.vue'
import FListItem from './FListItem.vue'
import FListItemAvatar from './FListItemAvatar.vue'
import FListItemContent from './FListItemContent.vue'
import FAvatar from '../FAvatar/FAvatar.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FList.vue', function () {
  it('should render single line list', function () {
    const vm = createVM(this, `
    <FList>
      <FListItem>
        <FListItemContent>
          Single line list item
        </FListItemContent>
      </FListItem>
    </FList>
`, {
      components: {
        FList,
        FListItem,
        FListItemContent,
      },
      data() {
        return {
          src: 'https://via.placeholder.com/48',
          size: 32
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-list').length).to.be.equal(1)
  })
  it('should render single line with avatar', function () {
    const vm = createVM(this, `
    <FList>
      <FListItem>
        <FListItemAvatar>
          <FAvatar :src="src" />
        </FListItemAvatar>
        <FListItemContent>
          List item
        </FListItemContent>
      </FListItem>
    </FList>
`, {
      components: {
        FList,
        FListItem,
        FListItemAvatar,
        FListItemContent,
        FAvatar
      },
      data() {
        return {
          src: 'https://via.placeholder.com/48',
          size: 32
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-list').length).to.be.equal(1)
  })
  it('should render two lines list item', function () {
    const vm = createVM(this, `
    <FList>
      <FListItem>
        <FListItemContent>
          Line one<br />
          Line two
        </FListItemContent>
      </FListItem>
    </FList>
`, {
      components: {
        FList,
        FListItem,
        FListItemAvatar,
        FListItemContent,
        FAvatar
      },
      data() {
        return {
          src: 'https://via.placeholder.com/48',
          size: 32
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-list').length).to.be.equal(1)
  })
  it('should render two lines list item with avatar', function () {
    const vm = createVM(this, `
    <FList>
      <FListItem>
        <FListItemAvatar>
          <FAvatar :src="src" />
        </FListItemAvatar>
        <FListItemContent>
          Line one<br />
          Line two
        </FListItemContent>
      </FListItem>
    </FList>
`, {
      components: {
        FList,
        FListItem,
        FListItemAvatar,
        FListItemContent,
        FAvatar
      },
      data() {
        return {
          src: 'https://via.placeholder.com/48',
          size: 32
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-list').length).to.be.equal(1)
  })
  it('should render three lines list item', function () {
    const vm = createVM(this, `
    <FList>
      <FListItem>
        <FListItemContent>
          Line one<br />
          Line two<br />
          Line three
        </FListItemContent>
      </FListItem>
    </FList>
`, {
      components: {
        FList,
        FListItem,
        FListItemAvatar,
        FListItemContent,
        FAvatar
      },
      data() {
        return {
          src: 'https://via.placeholder.com/48',
          size: 32
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-list').length).to.be.equal(1)
  })
  it('should render three lines list item with avatar', function () {
    const vm = createVM(this, `
    <FList>
      <FListItem>
        <FListItemAvatar>
          <FAvatar :src="src" :size="size" />
        </FListItemAvatar>
        <FListItemContent>
          Line one<br />
          Line two<br />
          Line three
        </FListItemContent>
      </FListItem>
    </FList>
`, {
      components: {
        FList,
        FListItem,
        FListItemAvatar,
        FListItemContent,
        FAvatar
      },
      data() {
        return {
          src: 'https://via.placeholder.com/48',
          size: 32
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-list').length).to.be.equal(1)
  })
})