import React, { FC } from 'react'
import classnames from 'classnames/bind'
import cl from './User.module.scss'

interface IProps {
    className?: string
}

const User: FC<IProps> = ({ className }) => {
    const userClasses = classnames({
        [cl.User]: true,
        [className || '']: !!className,
    })

    return (
        <div className={userClasses}>
            User
            <div className={cl.Image}>
                <img
                    src={require('../../assets/images/no-avatar.png')}
                    alt="avatar"
                />
            </div>
        </div>
    )
}

export default User
