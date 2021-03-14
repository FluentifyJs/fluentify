import FSlider from './FSlider.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FSlider)
  }
}

use(Plugin)

export default Plugin

export {
  FSlider
}
