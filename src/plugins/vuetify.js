import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
import fa from 'vuetify/es5/locale/fa'
import en from 'vuetify/es5/locale/en'
import tr from 'vuetify/es5/locale/tr'
import es from 'vuetify/es5/locale/es'
Vue.use(Vuetify)

export default new Vuetify({
  rtl: false,
  lang: {
    locales: { en, fa, tr, es },
    current: 'en'
  },
  theme: {
    options: {
      customProperties: true,
    },
    dark: false,
    themes: {
      light: {
        primary: '#2962ff',
        secondary: '#4fc3f7',
        danger: '#FF4081',
        info: '#ffbc34',
        success: '#36bea6',
        anchor: '#8c9eff',
        bg: '#F2F5F8',
        navbar: '#FFFFFF'
      },
      dark: {
        primary: '#2962ff',
        secondary: '#4fc3f7',
        danger: '#f62d51',
        info: '#ffbc34',
        success: '#36bea6',
        anchor: '#8c9eff',
        bg: '#3A4156',
        navbar: "#252B3E"
      },
    },
  },
  customVariables: ['~/assets/global.scss'],
  iconfont: 'mdi'
})
