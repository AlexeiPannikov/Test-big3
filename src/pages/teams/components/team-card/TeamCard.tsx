import React, { FC } from 'react'
import cl from './TeamCard.module.scss'
import { TeamModel } from '../../../../api/services/teams-service/models/TeamModel'

interface IProps {
    team: TeamModel
}

const TeamCard: FC<IProps> = ({ team }) => {
    return <div className={cl.TeamCard}>{team.name}</div>
}

export default TeamCard
