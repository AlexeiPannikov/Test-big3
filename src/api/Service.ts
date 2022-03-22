import Cookies from 'js-cookie'
import { BASE_URL } from './api'

export class Service {
    private readonly url: string

    constructor() {
        this.url = BASE_URL
    }

    async request(
        resource: string,
        options?: any,
        searchParams?: any
    ): Promise<any> {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            ...options.headers,
        }
        const token = Cookies.get('token')
        if (token) {
            headers.Authorization = `Bearer ${token}`
        }
        const apiURL = new URL(this.url + resource)
        if (searchParams) {
            Object.entries(searchParams).forEach(([key, value]) => {
                apiURL.searchParams.set(key, value.toString())
            })
        }
        try {
            const response = await fetch(apiURL.href, {
                headers,
                // mode: 'no-cors',
                ...options,
            })

            if (!response.ok) {
                const message = await response.json()
                throw new Error(message.title)
            }
            return await response.json()
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
