import FAutocomplete from './FAutocomplete'

import { use, registerComponent } from '../../utils/helper'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, FAutocomplete)
  }
}

use(Plugin)

export default Plugin

export {
  FAutocomplete
}
