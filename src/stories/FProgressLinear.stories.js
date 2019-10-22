/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

// import * as components from '../components'
import FProgressLinear from '../components/FProgressLinear/FProgressLinear.vue'

storiesOf('FProgressLinear', module)
  .add('50%', () => ({
    components: { FProgressLinear },
    template: '<f-progress-linear value="50" />',
    
  }))
  .add('50% with buffered value at 75%', () => ({
    components: { FProgressLinear },
    template: '<f-progress-linear value="50" bufferValue="75" />',
    
  }))
  .add('custom height', () => ({
    components: { FProgressLinear },
    template: '<f-progress-linear value="50" height="10" />',
    
  }))
  .add('Indeterminate', () => ({
    components: { FProgressLinear },
    template: '<f-progress-linear indeterminate />',
    
  }))