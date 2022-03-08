import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'
import cl from './Logo.module.scss'
import logo from '../../assets/images/logo.png'

interface IProps {
    to?: string
    className?: string
}

const Logo: FC<IProps> = ({ to, className }) => {
    const logoClasses = classnames({
        [cl.LogoWrapper]: true,
        [className || '']: className,
    })

    return (
        <div className={logoClasses}>
            <Link className={cl.Logo} to={to || '/'}>
                <img src={logo} alt="logo" />
            </Link>
        </div>
    )
}

export default Logo
