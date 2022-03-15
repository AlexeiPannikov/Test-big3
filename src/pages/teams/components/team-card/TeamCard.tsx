import React, { FC, useEffect, useRef } from 'react'
import cl from './TeamCard.module.scss'
import { TeamModel } from '../../../../api/services/teams-service/models/TeamModel'

interface IProps {
    team: TeamModel
}

const TeamCard: FC<IProps> = ({ team }) => {
    const img = useRef(null)

    useEffect(() => {
        img.current.style.backgroundImage = `url('${team.imageUrl}')`
    }, [team.imageUrl])

    return (
        <article className={cl.TeamCard}>
            <div className={cl.ImageBlock}>
                <div ref={img} className={cl.Img} />
            </div>
            <div className={cl.Info}>
                <div className={cl.Name}>{team.name}</div>
                <div className={cl.Foundation}>
                    Year of foundation: <span>{team.foundationYear}</span>
                </div>
            </div>
        </article>
    )
}

export default TeamCard
