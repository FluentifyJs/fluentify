/* eslint-disable no-undef */
import FAvatar from './FAvatar.vue'
import { createVM } from 'src/../test/helpers/utils.js'
import { expect } from 'chai'

describe('FAvatar.vue', function () {
  it('should render avatar with default settings and image', function () {
    const vm = createVM(this, `
    <FAvatar :src="src" />
  `,
    {
      components: {
        FAvatar
      },
      data () {
        return {
          src: 'https://via.placeholder.com/48'
        }
      }
    }
    )
    expect(vm.$el.querySelectorAll('.f-avatar img').length).to.be.equal(1)
  })
  it('should render avatar with size 150', function () {
    const vm = createVM(this, `
    <FAvatar :src="src" :size="size" />
  `,
    {
      components: {
        FAvatar
      },
      data () {
        return {
          size: 150,
          src: 'https://via.placeholder.com/150'
        }
      }
    }
    )
    expect(vm.$el.querySelectorAll('.f-avatar img').length).to.be.equal(1)
  })
  it('should render avatar with with slot content', function () {
    const vm = createVM(this, `
    <FAvatar>
      <span>AW</span>
    </FAvatar>
  `,
    {
      components: {
        FAvatar
      }
    }
    )
    expect(vm.$el.querySelectorAll('.f-avatar span').length).to.be.equal(1)
  })
})
