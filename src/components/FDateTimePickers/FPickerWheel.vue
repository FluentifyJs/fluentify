<template>
  <div class="f-picker-wheel">
    <FList
      v-model="selected"
      scroll-arrows
      scroll-item-selected
    >
      <FListItem
        v-for="(item, index) in 9"
        :key="index"
      >
        <FListContent>
          {{ item }}
        </FListContent>
      </FListItem>
    </FList>
  </div>
</template>

<script>
export default {
  name: 'FPickerWheel',
  props: {
  },
  data () {
    return {
      selected: null
    }
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {}
}
</script>
