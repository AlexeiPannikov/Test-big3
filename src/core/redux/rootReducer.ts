import { combineReducers } from '@reduxjs/toolkit'
import AuthSlice from '../../modules/authorization/authorizationSlice'
import TeamsSlice from '../../modules/teams-module/TeamsSlice'

export const rootReducer = combineReducers({
    authorization: AuthSlice,
    teams: TeamsSlice,
})
