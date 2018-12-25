var helper = {
  methods: {
    resolveStringPath (path, obj = window.self, separator = '.') {
      var properties = Array.isArray(path) ? path : path.split(separator)
      return properties.reduce((prev, curr) => prev && prev[curr], obj)
    }
  }
}

export default helper
