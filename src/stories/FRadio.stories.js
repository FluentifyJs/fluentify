import { storiesOf } from '@storybook/vue'

// import * as components from '../components'
import FRadio from '../components/FRadio/FRadio.vue'

storiesOf('FRadio', module)
  .add('Standard', () => ({
    components: { FRadio },
    template: `<div>
      <f-radio label="Checkbox" v-model="radio" name="radio" value="1" /><f-radio label="Checkbox" v-model="radio" name="radio" value="2" />
      <br />
      {{ radio }}
    </div>`,
    data: () => {
      return {
        radio: null
      }
    }
  }))
  .add('Disabled', () => ({
    components: { FRadio },
    template: '<f-radio label="Disabled" disabled />',
    
  }))
