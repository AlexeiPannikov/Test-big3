import React, { FC } from 'react'
import cl from './Empty.module.scss'

interface IProps {
    img: string
    subtitle: string
}

const Empty: FC<IProps> = ({ img, subtitle }) => {
    return (
        <div className={cl.EmptyTeams}>
            <div className={cl.Box}>
                <div className={cl.Image}>
                    <img src={img} alt="empty" />
                </div>
                <h1 className={cl.Title}>Empty here</h1>
                <h2 className={cl.Subtitle}>{subtitle}</h2>
            </div>
        </div>
    )
}

export default Empty
