/* eslint-disable no-undef */
import FBtn from './FBtn.vue'
import { createVM } from 'src/../test/helpers/utils.js'

describe('FBtn.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <FBtn>Nice Button</FBtn>
    <FBtn class="f-btn-primary">Nice Button</FBtn>
    <FBtn class="f-btn-secondary">Nice Button</FBtn>
`, { components: { FBtn }})
    vm.$el.querySelector('.f-btn span').textContent.should.eql('Nice Button')
  })
})
