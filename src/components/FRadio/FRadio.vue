<template>
  <div
    class="f-radio"
    :class="{ 'f-radio--disabled': disabled ? true: false }"
  >
    <div class="f-radio--selection">
      <input
        :ref="_uid"
        v-model="computedRadioValue"
        :value="value"
        type="radio"
        :disabled="disabled ? true: false"
        :tabindex="disabled ? false : 0"
        :required="required"
        :name="name"
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
  name: 'FRadio',
  inject: {
    obj: {
      default: null
    }
  },
  model: {
    prop: 'radioValue',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    radioValue: {
      type: [String, Number],
      default () {
        return this.obj ? this.obj.selected : null
      }
    },
    label: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      default () {
        return this.obj ? this.obj.groupName : null
      }
    }
  },
  data () {
    return { }
  },
  computed: {
    computedRadioValue: {
      get () {
        return this.radioValue
      },
      set (value) {
        this.$emit('change', value)
        if (this.obj !== null) {
          this.$set(this.obj, 'selected', value)
        }
      }
    }
  },
  watch: {
    value (value) {
      this.radioValue = value
    },
    'obj.selected' (value) {
      this.$emit('change', value)
    }
  },
  created () {
    if (this.obj !== null) {
      this.$emit('change', this.obj.selected)
    }
  },
  mounted () {},
  methods: {
    toggleState () {
      if (this.disabled !== true) {
        this.$refs[this._uid].click()
      }
    }
  }
}
</script>
