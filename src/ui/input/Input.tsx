import React, { FC, useState } from 'react'
import classNames from 'classnames/bind'
import { useForm } from 'react-hook-form'
import cl from './Input.module.scss'
import { usePressButton } from '../../hooks/usePressButton'
/* eslint-disable react/jsx-props-no-spreading */

interface IProps {
    title?: string
    name: string
    type?: string
    className?: string
    errorText?: string
    disabled?: boolean
    onChange?: (value?: string) => void
    onPressEnter?: (value?: any) => void
}

const Input: FC<IProps> = ({
    title,
    name,
    type,
    className,
    errorText,
    disabled,
    onChange,
    onPressEnter,
}) => {
    const [text, setText] = useState('')
    const [innerType, setInnerType] = useState(type)
    const {
        register,
        formState: { errors },
    } = useForm()

    const inputClass = classNames({
        [cl.Fill]: !!text,
        [cl.Error]: errors.message,
    })
    const presButtonHandler = usePressButton()

    function clickButtonHandler(e: React.KeyboardEvent<HTMLInputElement>) {
        if (!onPressEnter) return
        presButtonHandler(e.key, onPressEnter, e.target)
    }

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target
        setText(value)
        if (!onChange) return
        onChange(value)
    }

    function setType() {
        setInnerType((currentValue) =>
            currentValue === 'password' ? 'text' : 'password'
        )
    }

    function passwordVisibleHandler(e: React.KeyboardEvent<HTMLDivElement>) {
        presButtonHandler(e.key, setType, e.target)
    }

    return (
        <div className={`${cl.Input} ${className}`}>
            {title && <div className={cl.Title}>{title}</div>}
            <div className={cl.Wrap}>
                <input
                    onKeyPress={(e) => clickButtonHandler(e)}
                    className={inputClass}
                    type={innerType || 'text'}
                    disabled={disabled}
                    {...register(name as `${string}`, {
                        required: errorText,
                    })}
                    onChange={(e) => changeHandler(e)}
                />
                {type === 'password' && (
                    <div
                        onClick={() => setType()}
                        onKeyPress={(e) => passwordVisibleHandler(e)}
                        className={cl.Eye}
                        role="button"
                        tabIndex={0}
                    >
                        {innerType === 'password' ? (
                            <i className="icon icon-close-eye" />
                        ) : (
                            <i className="icon icon-eye" />
                        )}
                    </div>
                )}
            </div>
            {errors?.[name] && <div className={cl.ErrorText}>{errorText}</div>}
        </div>
    )
}

export default Input
