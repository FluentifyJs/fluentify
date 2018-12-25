<template>
  <div
    ref="dropdownMenu"
    class="f-menu"
  >
    <div
      ref="activator"
      class="f-menu-activator"
      :aria-expanded="!!(!disabled && isActive) ? 'true': 'false'"
      @click="openMenu"
    >
      <slot name="activator" />
    </div>
    <div
      v-show="!disabled && isActive"
      class="f-menu-content"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FMenu',
  props: {
    disabled: Boolean
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  mounted () {
  },
  created () {
  },

  beforeDestroy () {
  },
  methods: {
  }
}
</script>
