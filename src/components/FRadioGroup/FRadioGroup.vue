<template>
  <div class="f-radio-group">
    <label v-if="label">
      {{ label }} - Selected: {{ value }}
    </label>
    <div
      class="f-radio-group--wrap"
      :class="{'f-radio-group--wrap__vertical': vertical}"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FRadioGroup',
  provide () {
    var _this = this
    const obj = { }
    Object.defineProperty(obj, 'selected', {
      enumerable: true,
      get: () => this.value,
      set (value) {
        _this.$emit('input', value)
      }
    })
    Object.defineProperty(obj, 'groupName', {
      enumerable: true,
      get: () => this._uid
    })
    return { obj }
  },
  props: {
    value: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      default: ''
    },
    label: {
      type: String,
      default: null
    },
    block: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {
    'selected' (newValue) {
      this.value = newValue
    }
  },
  mounted () {},
  methods: {}
}
</script>
