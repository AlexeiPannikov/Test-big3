import { GetTeamsResponse } from './response/GetTeamsResponse'
import { GetTeamsRequest } from './request/GetTeamsRequest'
import { Service } from '../../Service'

class TeamsService extends Service {
    async getTeams(params: GetTeamsRequest): Promise<GetTeamsResponse> {
        try {
            return await this.request(`Team/GetTeams`, {}, { ...params })
        } catch (e) {
            throw new Error(e)
        }
    }
}

export default new TeamsService()
