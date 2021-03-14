import { storiesOf } from '@storybook/vue3'

// import * as components from '../components'
import FInput from '../components/FInput/FInput.vue'

storiesOf('FInput', module)
  .add('text', () => ({
    components: { FInput },
    template: '<div><f-input v-model="text" type="text" /> {{text}}</div>',
    data: () => {
      return {
        text: 'text',
      }
    }
  }))
  .add('text with label', () => ({
    components: { FInput },
    template: '<f-input label="Text with label" value="text" type="text" />',
    
  }))
  .add('text disabled', () => ({
    components: { FInput },
    template: '<f-input label="Disabled" disabled value="text" type="text" />',
    
  }))
  .add('text required', () => ({
    components: { FInput },
    template: '<f-input label="Required" required value="" type="text" />',
    
  }))
  .add('text block', () => ({
    components: { FInput },
    template: '<f-input label="Block" block value="" type="text" />',
    
  }))
  .add('password', () => ({
    components: { FInput },
    template: '<f-input label="Password" value="password" type="password" />',
    
  }))
  .add('email', () => ({
    components: { FInput },
    template: '<f-input label="Email" value="email@outlook.com" type="email" />',
    
  }))
  .add('number', () => ({
    components: { FInput },
    template: '<f-input label="Number" value="1234" type="number" />',
    
  }))
