/* eslint-disable no-undef */
import FVideo from './FVideo.vue'
import {
  createVM
} from 'src/../test/helpers/utils.js'
import {
  expect
} from 'chai'

describe('FVideo.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <FVideo :sources="sources" />
`, {
      components: {
        FVideo
      },
      data() {
        return {
          sources: [
            {
              src: 'https://www.w3schools.com/html/mov_bbb.mp4',
              type: 'video/mp4'
            },
            {
              src: 'https://www.w3schools.com/html/mov_bbb.ogg',
              type: 'video/ogg'
            }
          ]
        }
      }
    })
    expect(vm.$el.querySelectorAll('.f-video').length).to.be.equal(1)
  })
})