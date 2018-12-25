import FProgressLinear from './FProgressLinear'

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
