import FList from './FList'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FList)
  }
}

use(Plugin)

export default Plugin

export {
  FList
}
