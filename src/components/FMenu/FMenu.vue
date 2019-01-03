<template>
  <div
    ref="dropdownMenu"
    class="f-menu"
    :class="{ 'f-menu-top': top }"
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
      @click="openMenu"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FMenu',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: false,
      hoverable: false,
    }
  },
  computed: {},
  watch: {},
  mounted () {
  },
  created () {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', this.clickedOutside)
    }
  },

  beforeDestroy () {
    if (typeof window !== 'undefined') {
      document.removeEventListener('click', this.clickedOutside)
    }
  },
  methods: {
    openMenu () {
      this.$set(this, 'isActive', !this.isActive)
    },
    isInWhiteList (el) {
      if (el === this.$refs.dropdownMenu) return true

      if (el === this.$refs.trigger) return true

      // All chidren from dropdown
      if (this.$refs.dropdownMenu !== undefined) {
        const children = this.$refs.dropdownMenu.querySelectorAll('*')

        for (const child of children) {
          if (el === child) {
            return true
          }
        }
      }

      // All children from trigger
      if (this.$refs.trigger !== undefined) {
        const children = this.$refs.trigger.querySelectorAll('*')

        for (const child of children) {
          if (el === child) {
            return true
          }
        }
      }

      return false
    },
    clickedOutside (event) {
      if (this.inline) return

      if (!this.isInWhiteList(event.target)) this.isActive = false
    }
  }
}
</script>
