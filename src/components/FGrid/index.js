import FGrid from './FGrid.vue'
import FGridItem from './FGridItem.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FGrid),
    registerComponent(Vue, FGridItem)
  }
}

use(Plugin)

export default Plugin

export {
  FGrid,
  FGridItem
}
