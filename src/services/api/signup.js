import axios from 'axios'

export default {
  userSignUp(payload) {
    return axios.post('http://5.39.27.33:82/api/user/request/register', payload)
  }
}
