import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICountry {
    isLoading: boolean
    user: string
    error: string | null
}

const initialState: ICountry = {
    isLoading: false,
    user: '',
    error: null,
}

const AuthSlice = createSlice({
    name: 'allCountries',
    initialState,
    reducers: {
        gettingUser(state) {
            state.isLoading = true
        },
        getUserSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.user = action.payload
        },
        getUserError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default AuthSlice.reducer
export const { gettingUser, getUserSuccess, getUserError } = AuthSlice.actions
