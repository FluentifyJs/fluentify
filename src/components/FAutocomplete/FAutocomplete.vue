<template>
  <div class="f-autocomplete">
    <FInput
      v-model="inputValue"
      :type="type"
      :required="required"
      :disabled="disabled"
      :name="name"
    />
    <div class="f-autocomplete--results">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="f-autocomplete--result__item"
      >
        Title: {{ resolveStringPath(itemTitle, item) }}<br>
        Text: {{ resolveStringPath(itemText, item) }}<br>
        value: {{ resolveStringPath(itemValue, item) }}<br>
        Avatar: {{ resolveStringPath(itemAvatar, item) }}<br>
        Disabled: {{ resolveStringPath(itemDisabled, item) }}
      </div>
    </div>
  </div>
</template>

<script>
import helper from '../../mixins/helper'
import { FInput } from '../FInput'

export default {
  name: 'FAutocomplete',
  components: {
    FInput
  },
  mixins: [helper],
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    itemTitle: {
      type: [String, Function],
      default: 'title'
    },
    itemText: {
      type: [String, Function],
      default: 'text'
    },
    itemValue: {
      type: [String, Function],
      default: 'id'
    },
    itemDisabled: {
      type: [String, Function],
      default: 'disabled'
    },
    itemAvatar: {
      type: [String, Function],
      default: 'avatar'
    },
    items: {
      type: Array,
      default: null
    },
    returnObject: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
  },
  watch: {},
  mounted () {},
  methods: {}
}
</script>
