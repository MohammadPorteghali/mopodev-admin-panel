import Vue from 'vue'
import '@/plugins/axios'
import vuetify from '@/plugins/vuetify'
import '@/plugins/global'
import i18n from '@/plugins/i18n'
import App from '@/App.vue'
import router from '@/router'
import { store } from '@/store'
import HighchartsVue from 'highcharts-vue'

Vue.use(HighchartsVue)

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
  created() {
    store.commit('changeState', ['locale', store.state.locale])
  }
}).$mount('#app')

// change other locale
i18n.locale = 'en'

