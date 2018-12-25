/* eslint-disable no-undef */
import FAutocomplete from './FAutocomplete.vue'
import { createVM } from 'src/../test/helpers/utils.js'
import { expect } from 'chai'

describe('FAutocomplete.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, '<FAutocomplete v-model="value" :items="items" />',
      {
        components: {
          FAutocomplete
        },
        data () {
          return {
            value: 'Yes it have',
            items: [
              { id: 1, title: 'This is a title', text: 'This is a small text paragraph', avatar: 'https://via.placeholder.com/150', disabled: false },
              { id: 2, title: 'This is a title', text: 'This is a small text paragraph', avatar: 'https://via.placeholder.com/150', disabled: false },
              { id: 3, title: 'This is a title', text: 'This is a small text paragraph', avatar: 'https://via.placeholder.com/150', disabled: false }
            ]
          }
        }
      }
    )
    expect(vm.$el.querySelectorAll('.f-input input')[0].value.length).to.be.equal(0)
  })
})
