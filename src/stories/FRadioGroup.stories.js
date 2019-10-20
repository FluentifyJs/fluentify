/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

// import * as components from '../components'
import FRadio from '../components/FRadio/FRadio.vue'
import FRadioGroup from '../components/FRadioGroup/FRadioGroup.vue'

storiesOf('FRadioGroup', module)
  .add('Standard', () => ({
    components: { FRadio, FRadioGroup },
    template: `<div>
      <FRadioGroup label="RadioButton group label" v-model="radio">
        <FRadio
          v-for="n in 3"
          :key="n"
          :label="'Radio' + n"
          :value="n"
        />
      </FRadioGroup>
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
    components: { FRadioGroup },
    template: '<f-radio label="Disabled" disabled />',
    
  }))
