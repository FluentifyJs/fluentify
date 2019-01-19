import FGrid from './FGrid'
import FGridItem from './FGridItem'

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
