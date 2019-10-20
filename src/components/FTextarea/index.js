import FTextarea from './FTextarea'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FTextarea)
  }
}

use(Plugin)

export default Plugin

export {
  FTextarea
}
