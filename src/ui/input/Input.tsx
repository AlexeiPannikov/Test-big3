import React, { FC, useState } from 'react'
import classNames from 'classnames/bind'
import cl from './Input.module.scss'
import { usePressButton } from '../../hooks/usePressButton'

interface IProps {
    title?: string
    error?: string
    disabled?: boolean
    handler?: (value?: string) => void
}

const Input: FC<IProps> = ({ title, error, disabled, handler }) => {
    const [text, setText] = useState('')
    const inputClass = classNames({
        [cl.Filed]: !!text,
        [cl.Error]: !!error,
    })
    const presButtonHandler = usePressButton()

    function eventHandler(
        e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent
    ) {
        console.log(e)
    }

    return (
        <div className={cl.Input}>
            {title && <div className={cl.Title}>{title}</div>}
            <input
                onKeyPress={(e) => eventHandler(e)}
                onChange={(e) => eventHandler(e)}
                className={inputClass}
                type="text"
                disabled={disabled}
            />
            {error && <div className={cl.ErrorText}>{error}</div>}
        </div>
    )
}

export default Input
