import { AppDispatch } from '../../core/redux/store'
import { GetTeamsRequest } from '../../api/services/teams-service/request/GetTeamsRequest'
import { getTeamsError, getTeamsSuccess, startGetTeams } from './TeamsSlice'
import { TeamsService } from '../../api/services/teams-service/TeamsService'

export const getTeamsThunk = (data: GetTeamsRequest) => {
    return async (dispatch: AppDispatch) => {
        dispatch(startGetTeams())
        try {
            const res = await TeamsService.getTeams(data)
            if (res) {
                dispatch(getTeamsSuccess(res))
            }
        } catch (e) {
            dispatch(getTeamsError(e.message))
            console.log(e)
        }
    }
}
