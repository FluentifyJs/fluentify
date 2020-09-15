/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'

import '!style-loader!css-loader!sass-loader!../src/scss/fluentify.scss'

const req = require.context('../src/stories', true, /.stories.js$/)

addDecorator(() => ({
  template: '<div style="padding:20px;"><story/></div>',
}))

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
