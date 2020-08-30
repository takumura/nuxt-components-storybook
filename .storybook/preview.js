import { addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuex from 'vuex'

import Vuetify from 'vuetify'
import { VApp, VContent } from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuex)
const vuetifyOptions = {}

Vue.use(Vuetify, {
  iconfont: 'mdi',
  customVariables: ['~/assets/variables.scss'],
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
})

addDecorator(() => ({
  vuetify: new Vuetify(vuetifyOptions),
  components: { VApp, VContent },
  template: `<v-app><v-content><story/></v-content></v-app>`,
}))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
