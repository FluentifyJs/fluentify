<template>
  <div
    class="f-grid"
  >
    <slot />
  </div>
</template>

<script>
import { gridUtilsMixin } from '../../mixins/grid'

export default {
  name: 'FGrid',
  mixins: [
    gridUtilsMixin
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
