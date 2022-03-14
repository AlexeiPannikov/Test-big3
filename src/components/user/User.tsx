import React, { FC, useEffect, useState } from 'react'
import classnames from 'classnames/bind'
import cl from './User.module.scss'
import { useAppSelector } from '../../hooks/hooks'

interface IProps {
    className?: string
}

const User: FC<IProps> = ({ className }) => {
    const userClasses = classnames({
        [cl.User]: true,
        [className || '']: !!className,
    })

    const { user } = useAppSelector((state) => state.authorization)
    const [currentUserUser, setCurrentUser] = useState({ name: '', avatar: '' })

    useEffect(() => {
        const userFromStorage = JSON.parse(localStorage.getItem('user'))
        if (userFromStorage) {
            setCurrentUser({
                name: userFromStorage.name,
                avatar:
                    userFromStorage.avatar ||
                    require('../../assets/images/no-avatar.png'),
            })
        } else {
            setCurrentUser({
                name: '',
                avatar: require('../../assets/images/no-avatar.png'),
            })
        }
    }, [user])

    return (
        <div className={userClasses}>
            {currentUserUser.name}
            <div className={cl.Image}>
                <img src={currentUserUser.avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default User
