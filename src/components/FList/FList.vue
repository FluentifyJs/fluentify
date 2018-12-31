<template>
  <div
    class="f-list"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FList',
  props: {
    value: {
      type: [String, Number, Object],
      default: null
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
