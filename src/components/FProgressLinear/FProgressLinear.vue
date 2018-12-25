<template>
  <div
    class="f-progress-linear"
    :class="{'f-progress-linear--indeterminate': indeterminate}"
    role="progressbar"
    :aria-valuemin="0"
    :aria-valuemax="normalizedBuffer"
    :aria-valuenow="indeterminate ? undefined : normalizedValue"
    :style="[{
      height: `${height}px`
    }]"
  >
    <div
      class="f-progress-linear--track"
      :style="[styles]"
    >
      <span
        v-for="n in 5"
        v-if="indeterminate"
        :key="n"
        :style="dotStyles"
      />
    </div>
    <div
      class="f-progress-linear--progress"
      :style="[{
        width: `${effectiveWidth}%`
      }]"
    />
  </div>
</template>

<script>
export default {
  name: 'FProgressLinear',
  props: {
    bufferValue: {
      type: [Number, String],
      default: 100
    },
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data () {
    return {}
  },
  computed: {
    styles () {
      const styles = {}

      styles.height = this.height + 'px'

      if (!this.indeterminate && parseFloat(this.normalizedBufer) !== 100) {
        styles.width = `${this.normalizedBuffer}%`
      }

      return styles
    },
    dotStyles () {
      const styles = {}

      styles.height = this.height + 'px'
      styles.width = this.height + 'px'

      return styles
    },
    effectiveWidth () {
      if (!this.normalizedValue) {
        return 0
      }

      return +this.normalizedValue
    },
    normalizedBuffer () {
      if (this.bufferValue < 0) {
        return 0
      }

      if (this.bufferValue > 100) {
        return 100
      }

      return parseFloat(this.bufferValue)
    },
    normalizedValue () {
      if (this.value < 0) {
        return 0
      }

      if (this.value > 100) {
        return 100
      }

      return parseFloat(this.value)
    }
  },
  watch: {},
  mounted () {},
  methods: {}
}
</script>
