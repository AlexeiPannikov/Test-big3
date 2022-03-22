import { SignInRequest } from './request/SignInRequest'
import { SignInResponse } from './response/SignInResponse'
import { SignUpResponse } from './response/SignUpResponse'
import { SignUpRequest } from './request/SignUpRequest'
import { Service } from '../../Service'

class AuthorizationService extends Service {
    async signIn(data: SignInRequest): Promise<SignInResponse> {
        try {
            return await this.request('Auth/SignIn', {
                method: 'POST',
                body: JSON.stringify(data),
            })
        } catch (e) {
            throw new Error(e)
        }
    }

    async signUp(data: SignUpRequest): Promise<SignUpResponse> {
        try {
            return await this.request('Auth/SignUp', {
                method: 'POST',
                body: JSON.stringify(data),
            })
        } catch (e) {
            throw new Error(e)
        }
    }
}

export default new AuthorizationService()
