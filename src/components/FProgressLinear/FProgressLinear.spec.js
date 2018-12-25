/* eslint-disable no-undef */
import FProgressLinear from './FProgressLinear.vue'
import { createVM } from 'src/../test/helpers/utils.js'
import { expect } from 'chai'

describe('FProgressLinear.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
      <FProgressLinear v-model="value" />
    `,
    {
      components: {
        FProgressLinear
      },
      data () {
        return {
          value: 20
        }
      }
    }
    )
    expect(vm.$el.querySelectorAll('.f-progress-linear').length).to.be.equal(1)
  })
  it('should render progress linear with buffered at 50%', function () {
    const vm = createVM(this, `
      <FProgressLinear v-model="value" :buffer-value="buffered" />
    `,
    {
      components: {
        FProgressLinear
      },
      data () {
        return {
          value: 20,
          buffered: 50
        }
      }
    }
    )
    expect(vm.$el.querySelectorAll('.f-progress-linear').length).to.be.equal(1)
  })
  it('should render progress linear as indeterminated with altered height', function () {
    const vm = createVM(this, `
      <FProgressLinear v-model="value" :indeterminate="true" height="7" />
    `,
    {
      components: {
        FProgressLinear
      },
      data () {
        return {
          value: 0
        }
      }
    }
    )
    expect(vm.$el.querySelectorAll('.f-progress-linear').length).to.be.equal(1)
  })
})
