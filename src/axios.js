import axios from 'axios'

axios.defaults.baseURL = 'https://reqres.in/api/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')