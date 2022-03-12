import { $api } from '../../api'

export class TeamsService {
    static async getTeams(): Promise<any> | null {
        const res = await $api.get('Team/GetTeams')
        if (res) return res.data
        return null
    }
}
