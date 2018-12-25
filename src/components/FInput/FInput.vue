<template>
  <label class="f-input">
    <span v-if="label">
      {{ label }}
    </span>
    <input
      v-model="value"
      :type="type"
      :required="required"
      :name="name"
    >
  </label>
</template>

<script>
export default {
  name: 'FInput',
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
    return {}
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {}
}
</script>
