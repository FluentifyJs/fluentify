<template>
  <RouterLink
    v-if="to"
    ref="link"
    class="f-list-item"
    :class="{ 'f-list-item__active': active }"
  >
    <slot />
  </RouterLink>
  <a
    v-else-if="hasClickListener"
    ref="link"
    class="f-list-item"
    :class="{ 'f-list-item__active': active }"
    @click="$emit('click')"
  >
    <slot />
  </a>
  <div
    v-else
    class="f-list-item"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FListItem',
  props: {
    to: {
      type: [String, Object, Function],
      default: null
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    hasClickListener(){
      return this.$listeners && this.$listeners.click
    }
  },
  watch: {
    '$route': 'onRouteChange'
  },
  mounted () {},
  methods: {
    onRouteChange () {
      if (!this.to || !this.$refs.link) return

      this.active = true
    }
  }
}
</script>
