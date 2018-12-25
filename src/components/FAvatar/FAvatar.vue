<template>
  <div
    class="f-avatar"
    :class="{ 'f-avatar--tile': tile }"
    :style="styles"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :style="styles"
    >
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: 'FAvatar',
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: 'avatar'
    },
    size: {
      type: [String, Number],
      default: 48
    },
    tile: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    styles () {
      var styles = {}

      styles.height = `${this.size}px`
      styles.width = `${this.size}px`

      return styles
    }
  },
  watch: {},
  mounted () {},
  methods: {}
}
</script>
