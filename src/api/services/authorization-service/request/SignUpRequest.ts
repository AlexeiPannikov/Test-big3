export class SignUpRequest {
    userName = ''

    login = ''

    password = ''

    constructor(obj?: Partial<SignUpRequest>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}
