<template>
  <div
    class="f-slider"
    @click="barClick"
  >
    <label v-if="label">
      {{ label }}
    </label>
    <div
      ref="slider"
      class="f-slider-wrap"
    >
      <div class="f-slider-bar">
        <div
          class="f-slider-bar__handle"
          :style="computedOffset"
          @mousedown="dragStart($event, 0)"
        />
        <div
          class="f-slider-bar__process"
          :style="computedProcessWidth"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FSlider',
  props: {
    value: {
      type: [String, Number, Object],
      default: 0
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 100
    }
  },
  data () {
    return {
      percentage: 0,
      tempValue: 0
    }
  },
  computed: {
    computedOffset () {
      return { left: this.percentage + '%' }
    },
    computedProcessWidth () {
      return { width: this.percentage + '%' }
    }
  },
  watch: {},
  mounted () {
    this.$nextTick(function() {
      this.bindListener()
      this.findSelectedValue()
      this.findPercentageOfValue()
    })
  },
  methods: {
    bindListener: function() {
      document.addEventListener('mousemove', this.drag)
      document.addEventListener('mouseup', this.dragEnd)
    },
    getPercentage: function(event) {
      var PositionXOfElement = event.pageX - this.$refs.slider.offsetLeft
      var percent = (PositionXOfElement / this.$refs.slider.clientWidth) * 100
      if (percent > 100) {
        return 100
      } else if (percent < 0) {
        return 0
      } else {
        return percent
      }
    },
    setPercentage: function(pos) {
      this.percentage = pos
    },
    findSelectedValue () {
      this.tempValue = Math.round(this.max * (this.percentage / 100))
    },
    findPercentageOfValue () {
      this.setPercentage(Math.round((this.value / this.max) * 100))
    },
    barClick: function(event) {
      var pos = this.getPercentage(event)
      this.setPercentage(pos)
      this.findSelectedValue()
    },
    dragStart: function() {
      this.dragging = true
    },
    drag: function(event) {
      if (!this.dragging) {
        return
      }
      var pos = this.getPercentage(event)
      this.setPercentage(pos)
      this.findSelectedValue()
    },
    dragEnd: function() {
      if (!this.dragging) {
        return
      }
      this.dragging = false
    }
  }
}
</script>
