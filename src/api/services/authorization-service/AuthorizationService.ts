import { $api } from '../../api'
import { SignInRequest } from './request/SignInRequest'
import { SignInResponse } from './response/SignInResponse'
import { SignUpResponse } from './response/SignUpResponse'
import { SignUpRequest } from './request/SignUpRequest'

export class AuthorizationService {
    static async signIn(data: SignInRequest): Promise<SignInResponse | null> {
        const res = await $api.post('Auth/SignIn', data)
        if (res) return res.data
        return null
    }

    static async signUp(data: SignUpRequest): Promise<SignUpResponse | null> {
        const res = await $api.post('Auth/SignUp', data)
        if (res) return res.data
        return null
    }
}
