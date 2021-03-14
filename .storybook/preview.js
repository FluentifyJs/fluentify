
import { app } from "@storybook/vue3";

// import '!style-loader!css-loader!sass-loader!../src/scss/fluentify.scss'
import '../src/scss/fluentify.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}