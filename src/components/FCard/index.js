import FCard from './FCard.vue'
import FCardAction from './FCardAction.vue'
import FCardCaption from './FCardCaption.vue'
import FCardImage from './FCardImage.vue'
import FCardText from './FCardText.vue'
import FCardTitle from './FCardTitle.vue'
import FCardContent from './FCardContent.vue'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FCard)
  }
}

use(Plugin)

export default Plugin

export {
  FCard,
  FCardAction,
  FCardCaption,
  FCardImage,
  FCardText,
  FCardTitle,
  FCardContent
}
