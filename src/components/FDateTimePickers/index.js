import FTimePicker from './FTimePicker'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FTimePicker)
  }
}

use(Plugin)

export default Plugin

export {
  FTimePicker
}
