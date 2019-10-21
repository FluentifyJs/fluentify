import FSwitch from './FSwitch'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FSwitch)
  }
}

use(Plugin)

export default Plugin

export {
  FSwitch
}
