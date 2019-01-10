import FList from './FList'
import FListItem from './FListItem'
import FListItemAvatar from './FListItemAvatar'
import FListItemContent from './FListItemContent'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FList),
    registerComponent(Vue, FListItem),
    registerComponent(Vue, FListItemAvatar),
    registerComponent(Vue, FListItemContent)
  }
}

use(Plugin)

export default Plugin

export {
  FList,
  FListItem,
  FListItemAvatar,
  FListItemContent
}
