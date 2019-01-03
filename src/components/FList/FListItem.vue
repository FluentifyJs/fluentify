<template>
  <router-link
    class="f-list-item"
    :class="{ 'f-list-item__active': active }"
    ref="link"
    v-if="to"
  >
    <slot />
  </router-link>
  <a
    class="f-list-item"
    :class="{ 'f-list-item__active': active }"
    ref="link"
    v-else-if="hasClickListener"
    @click="$emit('click')"
  >
    <slot />
  </a>
  <div
    class="f-list-item"
    v-else
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
