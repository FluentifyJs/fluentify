import './scss/fluentify.scss'

const components = import.meta.globEager('./components/**/*.vue')
let componentsRemapped = {}
Object.keys(components).map(function(key, index) {
  const obj = components[key].default
  return componentsRemapped[obj.name] = obj;
});

import config, {
  setOptions
} from './utils/config'

const plugin = {
  install (app, options) {
    // Options
    setOptions(Object.assign(config, options))

    // Directives
    /* Object.keys(directiveModules).forEach((directiveName) => {
      // Get directive config
      const directiveConfig = directiveModules[directiveName]
      if (directiveConfig.default) {
        app.use(directiveConfig.default)
      } else {
        for (const directiveChildName in directiveConfig) {
          if (directiveChildName !== 'default') {
            app.directive(
              directiveChildName,
              // Look for the component options on `.default`, which will
              // exist if the component was exported with `export default`,
              // otherwise fall back to module's root.
              directiveConfig[directiveChildName]
            )
          }
        }
      }
    }) */

    // Components
    Object.keys(componentsRemapped).forEach((componentName) => {
      // Get component config
      const componentConfig = componentsRemapped[componentName]
    
      // Register component globally
      app.component(componentConfig.name, componentConfig)
    })

    // Config component
    const FluentifyProgrammatic = {
      setOptions (options) {
        setOptions(Object.assign(config, options))
      }
    }
    registerComponentProgrammatic(Vue, '$fluentify', FluentifyProgrammatic)
  }
}

// export default plugin
export default {
  ...plugin,
  ...componentsRemapped
}
