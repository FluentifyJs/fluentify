<template>
  <button
    class="f-btn"
  >
    <span class="hide-focus">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'FBtn',
  props: {
    type: {
      type: [String],
      default: 'button'
    },
    label: {
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
