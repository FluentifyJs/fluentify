/* eslint-disable no-undef */
import FImg from './FImg'

import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FImg.vue', function () {
  it('should render default use case of component', function () {
    const vm = createVM(this, `
    <FImg :src="src" />
`, {
      components: {
        FImg
      },
      data() {
        return {
          src: 'https://via.placeholder.com/148'
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-img').length).to.be.equal(1)
  })
  it('should render component with aspect ratio 3/4', function () {
    const vm = createVM(this, `
    <FImg :src="src" ratio="3/4" />
`, {
      components: {
        FImg
      },
      data() {
        return {
          src: 'https://via.placeholder.com/148'
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-img').length).to.be.equal(1)
  })
  it('should render component with aspect ratio 3/4 and full width', function () {
    const vm = createVM(this, `
    <FImg :src="src" ratio="3/4" full-width />
`, {
      components: {
        FImg
      },
      data() {
        return {
          src: 'https://via.placeholder.com/148'
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-img').length).to.be.equal(1)
  })
})