/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

// import * as components from '../components'
import FTextarea from '../components/FTextarea/FTextarea.vue'

storiesOf('FTextarea', module)
  .add('text', () => ({
    components: { FTextarea },
    template: '<f-textarea v-model="text" type="text" @keyup="alert(\'Trigger\')" />',
    data: () => {
      return {
        text: 'text'
      }
    }
  }))
  .add('text with label', () => ({
    components: { FTextarea },
    template: '<f-textarea label="Text with label" value="text" type="text" />',
  }))
  .add('text disabled', () => ({
    components: { FTextarea },
    template: '<f-textarea label="Disabled" disabled value="text" type="text" />',
  }))
  .add('text required', () => ({
    components: { FTextarea },
    template: '<f-textarea label="Required" required value="" type="text" />',
  }))
  .add('text block', () => ({
    components: { FTextarea },
    template: '<f-textarea label="Block" block value="" type="text" />',
  }))