import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetTeamsResponse } from '../../api/services/teams-service/response/GetTeamsResponse'

interface ITeams {
    isLoading: boolean
    response: GetTeamsResponse
    error: string | null
}

const initialState: ITeams = {
    isLoading: false,
    response: { data: [], count: 0, page: 0, size: 0 } as GetTeamsResponse,
    error: null,
}

const TeamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        startGetTeams(state) {
            state.isLoading = true
        },
        getTeamsSuccess(state, action: PayloadAction<GetTeamsResponse>) {
            state.isLoading = false
            state.response = action.payload
            state.error = null
        },
        getTeamsError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default TeamsSlice.reducer
export const { startGetTeams, getTeamsSuccess, getTeamsError } =
    TeamsSlice.actions
