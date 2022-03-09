import React, { FC } from 'react'
import classnames from 'classnames/bind'
import cl from './Button.module.scss'
import { ButtonTypesEnum } from './ButtonTypesEnum'
/* eslint-disable react/button-has-type */

interface IProps {
    buttonType?: ButtonTypesEnum
    type?: 'button' | 'submit' | 'reset'
    className?: string
    disabled?: boolean
    onClick?: () => void
}

const Button: FC<IProps> = ({
    onClick,
    children,
    buttonType,
    type = 'submit',
    className,
    disabled,
}) => {
    const buttonClasses = classnames({
        [cl.Button]: true,
        [cl.Add]: buttonType === ButtonTypesEnum.Add,
        [cl.Cancel]: buttonType === ButtonTypesEnum.Cancel,
        [className || '']: className,
    })

    const clickHandler = () => {
        if (!onClick) return
        onClick()
    }

    const pressEnterHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!onClick) return
        onClick()
    }

    return (
        <button
            className={buttonClasses}
            onClick={() => clickHandler()}
            onKeyPress={(e) => pressEnterHandler(e)}
            type={type}
            disabled={disabled}
            tabIndex={0}
        >
            {children}
        </button>
    )
}

export default Button
