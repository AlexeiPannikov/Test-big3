import React from 'react'
import cl from './User.module.scss'

const User = () => {
    const getAvatar = () => {
        return require('../../assets/images/no-avatar.png')
    }

    return (
        <div className={cl.User}>
            User
            <div className={cl.Image}>
                <img src={getAvatar()} alt="avatar" />
            </div>
        </div>
    )
}

export default User
