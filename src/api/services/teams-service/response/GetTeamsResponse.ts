import { TeamModel } from '../models/TeamModel'

export class GetTeamsResponse {
    data = [new TeamModel()]

    count = 0

    page = 0

    size = 0
}
