import fetch from 'auth/FetchInterceptor'
import { API_BASE_URL } from 'configs/AppConfig'

const fetchSevice = {}

fetchSevice.getClients = function () {
  return fetch({
    url: `${API_BASE_URL}/users`,
    method: 'get',
  })
}

fetchSevice.setPost = function (data) {
  return fetch({
    url: '/posts',
    method: 'post',
    data: data
  })
}

export default fetchSevice
