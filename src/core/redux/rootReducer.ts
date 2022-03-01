import { combineReducers } from '@reduxjs/toolkit'
import AuthSlice from '../../modules/authorization/authorizationSlice'

export const rootReducer = combineReducers({
    authorization: AuthSlice,
})
