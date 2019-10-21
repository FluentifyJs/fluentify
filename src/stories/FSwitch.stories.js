/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

// import * as components from '../components'
import FSwitch from '../components/FSwitch/FSwitch.vue'

storiesOf('FSwitch', module)
  .add('Boolean', () => ({
    components: { FSwitch },
    template: `<div>
      <f-switch label="Checkbox" v-model="switch1" /> {{switch1}}<br/>
      <f-switch label="Checkbox" v-model="switch2" /> {{switch2}}
    </div>`,
    data: () => {
      return {
        switch1: false,
        switch2: true
      }
    }
  }))
  .add('Array', () => ({
    components: { FSwitch },
    template: `<div>
      <f-switch label="Checkbox" v-model="fSwitch" value="1" />
      <f-switch label="Checkbox" v-model="fSwitch" value="2" />
      <br />
      {{fSwitch}}
    </div>`,
    data: () => {
      return {
        fSwitch: ['1']
      }
    }
  }))
  .add('Disabled', () => ({
    components: { FSwitch },
    template: `<div>
        <f-switch label="Disabled" disabled />
        <br />
        <f-switch v-model="fSwitch" label="Disabled" disabled />
    </div>`,
    data: () => {
      return {
        fSwitch: true
      }
    }
  }))
