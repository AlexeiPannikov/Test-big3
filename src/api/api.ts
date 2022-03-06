import axios from 'axios'

const BASE_URL = 'http://dev.trainee.dex-it.ru/api/'

export const $api = axios.create({
    baseURL: BASE_URL,
})
