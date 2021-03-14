<template>
  <component
    :is="computedTag"
    :type="nativeType"
    class="f-btn"
    :class="{
      'f-btn--flat': flat,
      'f-btn--block': block,
      'f-btn--primary': primary,
      'f-btn--secondary': secondary
    }"
  >
    <span class="hide-focus">
      <slot />
    </span>
  </component>
</template>

<script>
export default {
  name: 'FBtn',
  props: {
    type: {
      type: String,
      default: 'button',
      validator: (value) => {
        return [
          'a',
          'button',
          'input',
          'router-link',
          'nuxt-link',
          'n-link',
          'RouterLink',
          'NuxtLink',
          'NLink'
        ].indexOf(value) >= 0
      }
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: (value) => {
        return [
          'button',
          'submit',
          'reset'
        ].indexOf(value) >= 0
      }
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    computedTag() {
      if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
        return 'button'
      }
      return this.type
    },
  },
  watch: {},
  mounted () {},
  methods: {}
}
</script>
