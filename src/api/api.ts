import axios, { AxiosRequestConfig } from 'axios'
import cookies from 'js-cookie'

const BASE_URL = 'http://dev.trainee.dex-it.ru/api/'

export const $api = axios.create({
    // withCredentials: true,
    baseURL: BASE_URL,
})

$api.interceptors.request.use((config): AxiosRequestConfig<any> => {
    if (config.url === 'Auth/SignIn' || config.url === 'Auth/SignUp')
        return config
    if (config.headers) {
        config.headers.Authorization = `Bearer ${cookies.get('token')}`
        return config
    }
    return config
})
