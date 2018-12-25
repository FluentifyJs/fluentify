import FCheckbox from './FCheckbox'

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
