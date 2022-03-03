import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import cl from './Logo.module.scss'
import logo from '../../assets/images/logo.png'

interface IProps {
    to?: string
}

const Logo: FC<IProps> = ({ to }) => {
    return (
        <Link className={cl.Logo} to={to || '/'}>
            <img src={logo} alt="logo" />
        </Link>
    )
}

export default Logo
