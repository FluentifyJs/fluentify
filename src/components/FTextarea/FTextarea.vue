<template>
  <label class="f-textarea" :class="{ 'f-textarea--block': block }">
    <span v-if="label">
      {{ label }}
    </span>
    <textarea
      ref="text"
      :value="value"
      :type="type"
      :required="required"
      :name="name"
      :disabled="disabled"
      v-bind="$attrs"
      v-on="inputListeners"
    />
  </label>
</template>

<script>
export default {
  name: 'FTextarea',
  props: {
    value: {
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
    return {
    }
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
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  watch: {},
  mounted () {
    console.log(this)
  },
  methods: {
  }
}
</script>
