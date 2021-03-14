<template>
  <label
    class="f-input" 
    :class="{ 'f-input--block': block }"
  >
    <span v-if="label">
      {{ label }}
    </span>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :required="required"
      :name="name"
      :disabled="disabled"
      v-bind="$attrs"
    >
  </label>
</template>

<script>
export default {
  name: 'FInput',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [String, Number],
      default: null
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
    name: {
      type: String,
      default: null
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  watch: {},
  mounted () {},
  methods: {}
}
</script>
