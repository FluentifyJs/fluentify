import FCheckbox from './FCheckbox.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FCheckbox)
  }
}

use(Plugin)

export default Plugin

export {
  FCheckbox
}
