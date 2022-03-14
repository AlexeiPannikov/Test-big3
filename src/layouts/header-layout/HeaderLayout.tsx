import React from 'react'
import cl from './HeaderLayout.module.scss'
import Logo from '../../ui/logo/Logo'
import User from '../../components/user/User'
import BurgerButton from './burger-button/BurgerButton'

const HeaderLayout = () => {
    return (
        <header className={cl.Header}>
            <BurgerButton className={cl.BurgerButton} />
            <div className={cl.LogoWrapper}>
                <Logo />
            </div>
            <User className={cl.User} />
        </header>
    )
}

export default HeaderLayout
