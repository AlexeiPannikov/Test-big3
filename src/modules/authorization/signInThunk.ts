import { AppDispatch } from '../../core/redux/store'
import { SignInRequest } from '../../api/services/authorization-service/request/SignInRequest'
import { signInError, signInSuccess, startSignIn } from './authorizationSlice'
import { AuthorizationService } from '../../api/services/authorization-service/AuthorizationService'

export const signInThunk = (data: SignInRequest) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startSignIn())
        try {
            const res = await AuthorizationService.signIn(data)
            if (res) {
                dispatch(signInSuccess(res))
            }
        } catch (e) {
            dispatch(signInError(e.message))
            console.log(e.message)
        }
    }
}
