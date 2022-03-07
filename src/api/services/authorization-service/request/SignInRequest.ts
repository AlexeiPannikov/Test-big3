export class SignInRequest {
    login = ''

    password = ''

    constructor(obj?: Partial<SignInRequest>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}
