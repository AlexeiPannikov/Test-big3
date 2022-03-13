import { $api } from '../../api'
import { GetTeamsResponse } from './response/GetTeamsResponse'
import { GetTeamsRequest } from './request/GetTeamsRequest'

export class TeamsService {
    static async getTeams(
        params: GetTeamsRequest
    ): Promise<GetTeamsResponse> | null {
        const res = await $api.get('Team/GetTeams', { params })
        if (res) return res.data
        return null
    }
}
