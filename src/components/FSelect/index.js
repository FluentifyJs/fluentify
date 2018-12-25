import FSelect from './FSelect'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FSelect)
  }
}

use(Plugin)

export default Plugin

export {
  FSelect
}
