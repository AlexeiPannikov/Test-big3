import React, { FC, useState } from 'react'
import classNames from 'classnames/bind'
import cl from './Input.module.scss'

interface IProps {
    title?: string
    error?: string
    disabled?: boolean
    onChange?: (value: string) => void
    onPressEnter?: (value?: string) => void
}

const Input: FC<IProps> = ({
    title,
    error,
    disabled,
    onChange,
    onPressEnter,
}) => {
    const [text, setText] = useState('')
    const inputClass = classNames({
        [cl.Filed]: !!text,
        [cl.Error]: !!error,
    })

    function keyPressHandler(e: React.KeyboardEvent) {
        if (e.key === '13') {
            if (onPressEnter) {
                onPressEnter()
            }
        }
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target
        setText(value)
        if (onChange) {
            onChange(value)
        }
    }

    return (
        <div className={cl.Input}>
            {title && <div className={cl.Title}>{title}</div>}
            <input
                onKeyPress={(e) => keyPressHandler(e)}
                onChange={(e) => onChangeHandler(e)}
                className={inputClass}
                type="text"
                disabled={disabled}
            />
            {error && <div className={cl.ErrorText}>{error}</div>}
        </div>
    )
}

export default Input
