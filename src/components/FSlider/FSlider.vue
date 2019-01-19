<template>
  <div
    class="f-slider"
    :class="{ 'f-slider--vertical': vertical }"
    :style="{ 'height': height }"
    @click="barClick"
  >
    <label v-if="label">
      {{ label }}
    </label>
    <div
      ref="slider"
      class="f-slider-wrap"
      @mousedown="barClick($event); dragStart($event, 0)"
      @mouseup="dragEnd($event, 0)"
    >
      <div class="f-slider-bar">
        <div
          class="f-slider-bar__handle"
          :style="computedOffset"
          @mousedown="dragStart($event, 0)"
        />
        <div
          class="f-slider-bar__process"
          :style="computedProcessWidthOrHeight"
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
    height: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    vertical: {
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
      if (this.vertical) {
        return { bottom: this.percentage + '%' }
      } else {
        return { left: this.percentage + '%' }
      }
    },
    computedProcessWidthOrHeight () {
      if (this.vertical) {
        return { height: this.percentage + '%' }
      } else {
        return { width: this.percentage + '%' }
      }
    }
  },
  watch: {
    tempValue (value) {
      this.$emit('input', value)
    },
    value (value) {
      this.$set(this, 'tempValue', value)
      if (value !== null) {
        this.findSelectedValue()
        this.findPercentageOfValue()
      }
    },
  },
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
      var percent = 0
      if (this.vertical) {
        var PositionYOfElement = this.$refs.slider.clientHeight - (event.clientY - this.$refs.slider.getBoundingClientRect().top)
        percent = (PositionYOfElement / this.$refs.slider.clientHeight) * 100
      } else {
        var PositionXOfElement = event.pageX - this.$refs.slider.offsetLeft
        percent = (PositionXOfElement / this.$refs.slider.clientWidth) * 100
      }
      if (percent > 100) {
        return 100
      } else if (percent < 0) {
        return 0
      } else {
        return percent
      }
    },
    setPercentage: function(value) {
      this.percentage = value
    },
    findSelectedValue () {
      this.tempValue = Math.round(this.max * (this.percentage / 100))
    },
    findPercentageOfValue () {
      this.setPercentage(Math.round((this.value / this.max) * 100))
    },
    barClick: function(event) {
      var percentage = this.getPercentage(event)
      this.setPercentage(percentage)
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
