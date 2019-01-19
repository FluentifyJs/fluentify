const gridItemMixin = {
  props: {
    columnStart: {
      type: [String, Number]
    },
    columnEnd: {
      type: [String, Number]
    },
    rowStart: {
      type: [String, Number]
    },
    rowEnd: {
      type: [String, Number]
    },
  },
  data() {
    return {}
  },
  created () {},
  methods: {},
  computed: {}
}

const gridUtilsMixin = {
  props: {
    gridFlow: {
      type: [String]
    }
  },
  data() {
    return {}
  },
  created () {},
  methods: {}
}

export { gridItemMixin, gridUtilsMixin }
