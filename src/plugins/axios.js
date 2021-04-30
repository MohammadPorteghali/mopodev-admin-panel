import Vue from 'vue'
import axios from 'axios'

// setting token in headers
let token = window.localStorage.getItem('token');
axios.defaults.baseURL = process.env.VUE_APP_API_URL || '';
if (token) axios.defaults.headers['token'] = token;

// eslint-disable-next-line no-shadow
Plugin.install = Vue => {
  Vue.axios = axios
  window.axios = axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        axios
      }
    },
    $axios: {
      get() {
        axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
