/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

// import * as components from '../components'
import FCheckbox from '../components/FCheckbox/FCheckbox.vue'

storiesOf('FCheckbox', module)
  .add('Standard', () => ({
    components: { FCheckbox },
    template: '<f-checkbox label="Checkbox" />',
    
  }))
  .add('Indeterminate', () => ({
    components: { FCheckbox },
    template: '<f-checkbox label="Checkbox" indeterminate />',
    
  }))
  .add('Disabled', () => ({
    components: { FCheckbox },
    template: '<f-checkbox label="Disabled" disabled />',
    
  }))
