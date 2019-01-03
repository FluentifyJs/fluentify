/* eslint-disable no-undef */
import FMenu from './FMenu.vue'
import FBtn from '../FBtn/FBtn.vue'
import FList from '../FList/FList.vue'
import FListItem from '../FList/FListItem.vue'
import FListItemContent from '../FList/FListItemContent.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'

describe('FMenu.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <FMenu>
      <FBtn class="f-btn-primary" slot="activator">Dropdown</FBtn>
      <FList>
        <FListItem
          v-for="(item, index) in 9"
          :key="index"
          @click="testMethod(item)"
        >
          <FListItemContent>
          {{ item }}
          </FListItemContent>
        </FListItem>
      </FList>
    </FMenu>
`, {
      components: {
        FMenu,
        FBtn,
        FList,
        FListItem,
        FListItemContent
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
