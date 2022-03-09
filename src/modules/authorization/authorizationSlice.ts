import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import cookies from 'js-cookie'

interface IUser {
    name: string
    avatarUrl: string
    token: string
}

interface IAuthorization {
    isLoading: boolean
    isSuccess: boolean
    user: IUser
    error: string | null
}

const initialState: IAuthorization = {
    isLoading: false,
    isSuccess: false,
    user: { name: '', avatarUrl: '', token: '' } as IUser,
    error: null,
}

const AuthSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        startSignIn(state) {
            state.isLoading = true
            state.isSuccess = false
        },
        signInSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false
            state.user = action.payload
            state.isSuccess = true
            state.error = ''
            cookies.set('token', state.user.token)
        },
        signInError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.isSuccess = false
            state.error = action.payload
        },
        startSignUp(state) {
            state.isLoading = true
            state.isSuccess = false
        },
        signUpSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false
            state.user = action.payload
            state.isSuccess = true
            state.error = ''
            cookies.set('token', state.user.token)
        },
        signUpError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.isSuccess = false
            state.error = action.payload
        },
        resetIsSuccess(state) {
            state.isSuccess = false
        },
        resetUser(state) {
            state = initialState
        },
    },
})

export default AuthSlice.reducer
export const {
    startSignIn,
    signInSuccess,
    signInError,
    startSignUp,
    signUpSuccess,
    signUpError,
    resetIsSuccess,
    resetUser,
} = AuthSlice.actions
