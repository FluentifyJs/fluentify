<template>
  <div class="f-video-controls">
    <div>
      <!--<f-btn flat>Back 10</f-btn>-->
      <FBtn flat>
        play
      </FBtn>
      <!--<f-btn flat>Forward 30</f-btn>-->
    </div>
    <div class="f-video-controls-slider">
      <input type="range">
    </div>
    <div>
      <FBtn flat>
        Mute
      </FBtn>
      <FBtn flat>
        Caption
      </FBtn>
    </div>
    <div>
      <!--<f-btn flat>Stretch</f-btn>
      <f-btn flat>Cast</f-btn>-->
      <FBtn flat>
        Fullscreen
      </FBtn>
    </div>
  </div>
</template>

<script>
import FBtn from '../FBtn/FBtn.vue'
export default {
  name: 'FVideoControls',
  components: {
    FBtn
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
          sources.concat(this.sources)
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
