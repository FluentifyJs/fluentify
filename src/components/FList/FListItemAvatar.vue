<template>
  <div
    class="f-list-item-avatar"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FListItemAvatar',
  props: {
    label: {
      type: String,
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
