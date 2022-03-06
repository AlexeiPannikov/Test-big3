import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'
import cl from './CustumLink.module.scss'

interface IProps {
    to: string
    disabled?: boolean
}

const CustomLink: FC<IProps> = ({ children, to, disabled }) => {
    const linkClasses = classnames({
        [cl.CustomLink]: true,
        [cl.Disabled]: disabled,
    })

    return (
        <Link to={to} className={linkClasses}>
            {children}
        </Link>
    )
}

export default CustomLink
