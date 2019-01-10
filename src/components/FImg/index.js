import FImg from './FImg'

import {
  use,
  registerComponent
} from '../../utils/helper'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, FImg)
  }
}

use(Plugin)

export default Plugin

export {
  FImg
}