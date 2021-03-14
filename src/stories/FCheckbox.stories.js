import { storiesOf } from '@storybook/vue3'

// import * as components from '../components'
import FCheckbox from '../components/FCheckbox/FCheckbox.vue'

storiesOf('FCheckbox', module)
  .add('Standard', () => ({
    components: { FCheckbox },
    data() {
      return {
        value: true
      }
    },
    template: '<f-checkbox label="Checkbox" v-model="value" />',
  }))
  .add('Indeterminate', () => ({
    components: { FCheckbox },
    data() {
      return {
        value: false,
        indeterminate: true
      }
    },
    template: '<f-checkbox label="Checkbox" v-model="value" v-model:indeterminate="indeterminate" />',
  }))
  .add('Disabled', () => ({
    components: { FCheckbox },
    template: '<f-checkbox label="Disabled" disabled />',
  }))
