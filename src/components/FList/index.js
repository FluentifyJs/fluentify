import FList from './FList.vue'
import FListItem from './FListItem.vue'
import FListItemAvatar from './FListItemAvatar.vue'
import FListItemContent from './FListItemContent.vue'

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
