import FVideo from './FVideo'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FVideo)
  }
}

use(Plugin)

export default Plugin

export {
  FVideo
}
