<template>
  <div class="f-select">
    <select
      v-model="value"
    >
      <option
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FSelect',
  props: {
    value: {
      type: [Object, String, Number, Boolean],
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    block: {
      type: Boolean,
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
