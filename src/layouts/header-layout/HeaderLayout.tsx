import React from 'react'
import cl from './HeaderLayout.module.scss'
import Logo from '../../ui/logo/Logo'
import User from '../../components/user/User'

const HeaderLayout = () => {
    return (
        <header className={cl.Header}>
            <Logo />
            <User />
        </header>
    )
}

export default HeaderLayout
