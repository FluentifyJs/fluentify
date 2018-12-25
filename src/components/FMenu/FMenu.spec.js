/* eslint-disable no-undef */
import FMenu from './FMenu.vue'
import FBtn from '../FBtn/FBtn.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'

describe('FMenu.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <FMenu>
      <FBtn class="f-btn-primary" slot="activator">Dropdown</FBtn>
      <ul>
        <li
          v-for="(item, index) in 9"
          :key="index"
          @click="testMethod(item)"
        >
          <span>
          {{ item }}
          </span>
        </li>
      </ul>
    </FMenu>
`, {
      components: {
        FMenu,
        FBtn
      },
      methods: {
        testMethod (index) {
          alert(`item: ${index}`)
        }
      }
    })
    vm.$el.querySelector('.f-menu .f-btn span').textContent.should.eql('Dropdown')
  })
})
