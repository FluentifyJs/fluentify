import FCard from './FCard'
import FCardAction from './FCardAction'
import FCardCaption from './FCardCaption'
import FCardImage from './FCardImage'
import FCardText from './FCardText'
import FCardTitle from './FCardTitle'
import FCardContent from './FCardContent'

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
