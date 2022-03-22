import { signUpError, signUpSuccess, startSignUp } from './authorizationSlice'
import AuthorizationService from '../../api/services/authorization-service/AuthorizationService'
import { AppDispatch } from '../../core/redux/store'
import { SignUpRequest } from '../../api/services/authorization-service/request/SignUpRequest'

export const signUpThunk = (data: SignUpRequest) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startSignUp())
        try {
            const res = await AuthorizationService.signUp(data)
            if (res) {
                dispatch(signUpSuccess(res))
            }
        } catch (e) {
            dispatch(signUpError(e.message))
            console.log(e)
        }
    }
}
