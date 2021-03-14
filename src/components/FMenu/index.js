import FMenu from './FMenu.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FMenu)
  }
}

use(Plugin)

export default Plugin

export {
  FMenu
}
