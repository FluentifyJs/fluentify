<template>
  <div class="f-switch">
    <div class="f-switch--control">
      <input
        ref="switch"
        v-model="checked"
        role="switch"
        type="checkbox"
        :value="value"
        :disabled="disabled"
        v-bind="$attrs"
        v-on="inputListeners"
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
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    checked: {
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
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            if (Array.isArray(vm.checked)) {
              if(vm.checked.includes(vm.value) && !event.target.checked){
                vm.checked.splice(vm.checked.indexOf(vm.value), 1)
              } else if (!vm.checked.includes(vm.value)) {
                vm.checked.push(vm.value)
              }
            } else {
              vm.$emit('input', !vm.checked)
            }
          }
        }
      )
    }
  },
  watch: {},
  mounted () {
  },
  methods: {
    toggleState () {
      if (this.disabled !== true) {
        this.$refs.switch.click()
      }
    }
  }
}
</script>
