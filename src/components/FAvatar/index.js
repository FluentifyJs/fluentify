import FAvatar from './FAvatar.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FAvatar)
  }
}

use(Plugin)

export default Plugin

export {
  FAvatar
}
