import FProgressLinear from './FProgressLinear.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FProgressLinear)
  }
}

use(Plugin)

export default Plugin

export {
  FProgressLinear
}
