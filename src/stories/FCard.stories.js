import { storiesOf } from '@storybook/vue'

// import * as components from '../components'
import { FCard, FCardAction, FCardCaption, FCardImage, FCardText, FCardTitle, FCardContent } from '../components/FCard'
import { FBtn } from '../components/FBtn'

storiesOf('FCard', module)
  .add('Default', () => ({
    components: {
      FCard,
      FCardAction,
      FCardCaption,
      FCardImage,
      FCardText,
      FCardTitle,
      FCardContent,
      FBtn
    },
    template: `<f-card>
      <f-card-caption>Fluent</f-card-caption>
      <f-card-content>
        <f-card-title>Test title</f-card-title>
        <f-card-text>Test text</f-card-text>
        <f-card-action>
          <f-btn class="f-btn-primary">button</f-btn>
        </f-card-action>
      </f-card-content>
      <f-card-image src="https://repository-images.githubusercontent.com/163006800/80467000-80d5-11e9-84d4-b06be916b62e" />
    </f-card>`,
  }))
  .add('Click', () => ({
    components: {
      FCard,
      FCardAction,
      FCardCaption,
      FCardImage,
      FCardText,
      FCardTitle,
      FCardContent,
      FBtn
    },
    template: `<f-card href="#">
      <f-card-caption>Fluent</f-card-caption>
      <f-card-content>
        <f-card-title>Test title</f-card-title>
        <f-card-text>Test text</f-card-text>
        <f-card-action>
          <f-btn class="f-btn-primary">button</f-btn>
        </f-card-action>
      </f-card-content>
      <f-card-image src="https://repository-images.githubusercontent.com/163006800/80467000-80d5-11e9-84d4-b06be916b62e" />
    </f-card>`,
  }))
  .add('Featured', () => ({
    components: {
      FCard,
      FCardAction,
      FCardCaption,
      FCardImage,
      FCardText,
      FCardTitle,
      FCardContent,
      FBtn
    },
    template: `<f-card layout="featured">
      <f-card-caption>Fluent</f-card-caption>
      <f-card-content>
        <f-card-title>Test title</f-card-title>
        <f-card-text>Test text</f-card-text>
      </f-card-content>
      <f-card-image src="https://user-images.githubusercontent.com/4184558/67981054-169c3600-fc20-11e9-83e1-52f695776774.png" />
      <f-card-action>
        <f-btn class="f-btn-primary">button</f-btn>
      </f-card-action>
    </f-card>`,
  }))
  .add('Fluid', () => ({
    components: {
      FCard,
      FCardAction,
      FCardCaption,
      FCardImage,
      FCardText,
      FCardTitle,
      FCardContent,
      FBtn
    },
    template: `<f-card layout="fluid">
      <f-card-caption>Fluent</f-card-caption>
      <f-card-content>
        <f-card-title>Test title</f-card-title>
        <f-card-text>Test text</f-card-text>
      </f-card-content>
      <f-card-image src="https://user-images.githubusercontent.com/4184558/67981054-169c3600-fc20-11e9-83e1-52f695776774.png" />
      <f-card-action>
        <f-btn href="https://github.com/FluentifyJs/fluentify">Github</f-btn>
        <f-btn class="f-btn-primary" href="https://www.npmjs.com/package/@fluentify/fluentify">NPM</f-btn>
      </f-card-action>
    </f-card>`,
  }))