import FContainer from './FContainer.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FContainer)
  }
}

use(Plugin)

export default Plugin

export {
  FContainer
}
