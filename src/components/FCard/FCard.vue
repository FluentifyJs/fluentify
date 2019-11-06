<template>
  <RouterLink
    v-if="to"
    ref="card"
    class="f-card"
    :class="[`f-card-layout-${layout}`]"
  >
    <slot />
  </RouterLink>
  <a
    v-else-if="hasClickListener"
    ref="card"
    class="f-card"
    :class="[`f-card-layout-${layout}`]"
    @click="$emit('click')"
  >
    <slot />
  </a>
  <a
    v-else-if="href"
    ref="card"
    class="f-card"
    :class="[`f-card-layout-${layout}`]"
    :href="href"
  >
    <slot />
  </a>
  <div
    v-else
    ref="card"
    class="f-card"
    :class="[`f-card-layout-${layout}`]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FCard',
  props: {
    to: {
      type: [String, Object, Function],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    layout: {
      type: String,
      default: 'default'
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
  mounted () {
  },
  created () {
  },
  beforeDestroy () {
  },
  methods: {
    onRouteChange () {
      if (!this.to || !this.$refs.link) return

      this.active = true
    }
  }
}
</script>
