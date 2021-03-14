import FImg from './FImg.vue'

import {
  use,
  registerComponent
} from '../../utils/helper'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, FImg)
  }
}

use(Plugin)

export default Plugin

export {
  FImg
}