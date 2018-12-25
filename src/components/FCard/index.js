import FCard from './FCard'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FCard)
  }
}

use(Plugin)

export default Plugin

export {
  FCard
}
