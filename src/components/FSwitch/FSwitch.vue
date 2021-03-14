<template>
  <div class="f-switch">
    <div class="f-switch--control">
      <input
        ref="switch"
        role="switch"
        type="checkbox"
        :disabled="disabled"
        v-model="modelValue"
        :value="value"
        @input="input"
        v-bind="$attrs"
      >
      <div class="f-switch--input">
        <span class="f-switch--thumb" />
      </div>
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
  name: 'FSwitch',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: null
    },
    value: {
      type: [String, Number, Boolean, Array],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {
    toggleState () {
      if (this.disabled !== true) {
        this.$refs.switch.click()
      }
    },
    input (event) {
      if (Array.isArray(this.modelValue)) {
        if(this.modelValue.includes(this.value) && !event.target.checked){
          this.modelValue.splice(this.modelValue.indexOf(this.value), 1)
        } else if (!this.modelValue.includes(this.value)) {
          this.modelValue.push(this.value)
        }
      } else {
        this.$emit('update:modelValue', !this.checked)
      }
    }
  }
}
</script>
