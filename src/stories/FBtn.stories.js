import { storiesOf } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
// import '../scss/fluentify.scss'

// import * as components from '../components'
import FBtn from '../components/FBtn/FBtn.vue'

storiesOf('FBtn', module)
  .add('Default', () => ({
    components: { FBtn },
    template: '<f-btn @click="action">Hello Button</f-btn>',
    methods: { action: action('clicked') }
  }))
  .add('Primary', () => ({
    components: { FBtn },
    template: '<f-btn @click="action" primary>Hello Button</f-btn>',
    methods: { action: action('clicked') }
  }))
  .add('Secondary', () => ({
    components: { FBtn },
    template: '<f-btn @click="action" secondary>Hello Button</f-btn>',
    methods: { action: action('clicked') }
  }))
  .add('Flat', () => ({
    components: { FBtn },
    template: '<f-btn @click="action" flat>Hello Button</f-btn>',
    methods: { action: action('clicked') }
  }))
  .add('A tag', () => ({
    components: { FBtn },
    template: '<f-btn @click="action" type="a">Hello Button</f-btn>',
    methods: { action: action('clicked') }
  }))
  .add('Input', () => ({
    components: { FBtn },
    template: '<f-btn @click="action" type="input" value="Hello Button" />',
    methods: { action: action('clicked') }
  }))
  .add('Input block', () => ({
    components: { FBtn },
    template: '<f-btn @click="action" type="input" value="Hello Button" block />',
    methods: { action: action('clicked') }
  }))
  .add('Block', () => ({
    components: { FBtn },
    template: '<f-btn @click="action" block>Hello Button</f-btn>',
    methods: { action: action('clicked') }
  }))
  .add('Emojis', () => ({
    components: { FBtn },
    template: '<f-btn @click="action">😀 😎 👍 💯</f-btn>',
    methods: { action: action('clicked') }
  }))
  .add('disabled', () => ({
    components: { FBtn },
    template: '<f-btn disabled @click="action">😀 😎 👍 💯</f-btn>',
    methods: { action: action('clicked') }
  }))
