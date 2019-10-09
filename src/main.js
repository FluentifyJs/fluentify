import './scss/fluentify.scss'

import * as components from './components'

import config, {
  setOptions
} from './utils/config'
import {
  use,
  registerComponentProgrammatic
} from './utils/helper'

const Fluentify = {
  install (Vue, options = {}) {
    // Options
    setOptions(Object.assign(config, options))
    // Components
    for (const componentKey in components) {
      Vue.use(components[componentKey])
    }
    // Config component
    const FluentifyProgrammatic = {
      setOptions (options) {
        setOptions(Object.assign(config, options))
      }
    }
    registerComponentProgrammatic(Vue, '$fluentify', FluentifyProgrammatic)
  }
}

use(Fluentify)

export default Fluentify
