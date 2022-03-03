import React, { FC } from 'react'
import classnames from 'classnames/bind'
import cl from './Button.module.scss'
import { ButtonTypesEnum } from './ButtonTypesEnum'

interface IProps {
    type?: ButtonTypesEnum
    disabled?: boolean
    onClick: () => void
}

const Button: FC<IProps> = ({ onClick, children, type, disabled }) => {
    const buttonClasses = classnames({
        [cl.Button]: true,
        [cl.Add]: type === ButtonTypesEnum.Add,
        [cl.Cancel]: type === ButtonTypesEnum.Cancel,
    })

    return (
        <button
            className={buttonClasses}
            onClick={() => onClick()}
            onKeyPress={() => onClick()}
            type="button"
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
