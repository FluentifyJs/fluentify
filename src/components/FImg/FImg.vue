<template>
  <div
    class="f-img"
    :style="aspectRatio"
  >
    <img
      ref="image"
      :src="src"
    >
  </div>
</template>

<script>
export default {
  name: 'FList',
  props: {
    src: {
      type: [String],
      default: null
    },
    ratio: {
      type: [String, Number, Boolean],
      default: false
    },
    fullWidth: {
      type: [Boolean],
      default: false
    }
  },
  data () {
    return {
      isMounted: false
    }
  },
  computed: {
    aspectRatio () {
      var ratio = ''
      if(!this.isMounted)
        return

      if (this.fullWidth) {
        ratio += 'width:100%;'
      } else {
        ratio += `width: ${this.$refs.image.naturalWidth}px;`
      }
      if (this.ratio) {
        ratio += `--aspect-ratio: ${this.ratio};`
      }
      return ratio
    }
  },
  watch: {},
  mounted () {
    this.isMounted = true
  },
  methods: {}
}
</script>
