<template>
  <div class="f-video">
    <video
      :height="height"
      :width="width"
      :autoplay="autoplay"
    >
      <source
        v-for="(source, index) in sourcesComputed"
        :key="index"
        :src="source.src"
        :type="source.type"
      >
    </video>
    <FVideoControls />
  </div>
</template>

<script>
import FVideoControls from './FVideoControls.vue'

export default {
  name: 'FVideo',
  components: {
    FVideoControls
  },
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    sources: {
      type: [Array, Object],
      default: null
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    height: {
      type: [String, Number],
      default: null
    },
    width: {
      type: [String, Number],
      default: '100%'
    }
  },
  data () {
    return {}
  },
  computed: {
    sourcesComputed () {
      var sources = []
      if (this.sources !== null && typeof this.sources === 'object') {
        if (Array.isArray(this.sources)) {
          sources = sources.concat(this.sources)
        } else {
          sources.push(this.sources)
        }
      }
      return sources
    }
  },
  watch: {},
  mounted () {},
  methods: {}
}
</script>
