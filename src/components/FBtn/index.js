import FBtn from './FBtn.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FBtn)
  }
}

use(Plugin)

export default Plugin

export {
  FBtn
}
