<template>
  <div
    class="f-grid-item"
  >
    <slot />
  </div>
</template>

<script>
import { gridItemMixin } from '../../mixins/grid'

export default {
  name: 'FGrid',
  mixins: [
    gridItemMixin
  ],
  props: {
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
