import FInput from './FInput.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FInput)
  }
}

use(Plugin)

export default Plugin

export {
  FInput
}
