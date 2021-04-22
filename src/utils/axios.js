import axios from 'axios'
import router from '@/router/index'
import {localGet} from '../utils/index'

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers['token'] = localGet('token')

axios.interceptors.response.use(res => {
    if (res.data.code == 401) {
        router.push({ path: '/login' })
    }
    return res
  })
export default axios