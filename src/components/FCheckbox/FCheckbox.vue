<template>
  <div class="f-checkbox">
    <div class="f-checkbox--selection">
      <input
        v-model="computedValue"
        type="checkbox"
        :disabled="disabled ? true: false"
        :indeterminate.prop="computedIndeterminate ? true: false"
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
  emits: ['update:modelValue', 'update:indeterminate'],
  props: {
    modelValue: {
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
  computed: {
    computedValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    computedIndeterminate() {
      return this.indeterminate
    }
  },
  watch: {},
  mounted () {},
  methods: {
    toggleState () {
      if (this.disabled !== true) {
        this.$emit('update:indeterminate', false)
        this.$emit('update:modelValue', !this.modelValue)
      }
    }
  }
}
</script>
