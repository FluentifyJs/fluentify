import FBtn from './Fbtn'

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
