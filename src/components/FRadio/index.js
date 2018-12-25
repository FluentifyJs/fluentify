import FRadio from './FRadio'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FRadio)
  }
}

use(Plugin)

export default Plugin

export {
  FRadio
}
