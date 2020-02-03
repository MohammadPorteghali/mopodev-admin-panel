import axios from 'axios'

export default {
  userLogin(payload) {
    return axios.post('http://5.39.27.33:82/api/login', payload)
  },
  refreshToken() {
    return axios.get('/token')
  }
}
