<template>
  <div class="f-checkbox">
    <div class="f-checkbox--selection">
      <input
        v-model="value"
        type="checkbox"
        :disabled="disabled ? true: false"
        :indeterminate.prop="indeterminate ? true: false"
      >
      <span @click="toggleState" />
    </div>
    <label
      v-if="label"
      @click="toggleState"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'FCheckbox',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    toggleState () {
      if (this.disabled !== true) {
        this.$set(this, 'indeterminate', false)
        this.$set(this, 'value', !this.value)
      }
    }
  }
}
</script>
