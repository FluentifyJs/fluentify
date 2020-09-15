/* eslint-disable import/no-extraneous-dependencies */
import { configure, addParameters, addDecorator } from '@storybook/vue'

// import '../src/scss/fluentify.scss'

const req = require.context('../src/stories', true, /.stories.js$/)

addParameters({
  options: {
    theme: theme,
  },
});

addDecorator(() => ({
  template: '<div style="padding:20px;"><story/></div>',
}))

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
