import React, { FC, useState } from 'react'
import classNames from 'classnames/bind'
import { UseFormReturn } from 'react-hook-form'
import cl from './Input.module.scss'
import { usePressButton } from '../../hooks/usePressButton'
/* eslint-disable react/jsx-props-no-spreading */

interface IProps {
    title?: string
    name: string
    type?: string
    className?: string
    required?: boolean
    disabled?: boolean
    onChange?: (value?: string) => void
    onPressEnter?: (value?: any) => void
    formHook: UseFormReturn<Record<string, any>, any>
}

const Input: FC<IProps> = ({
    title,
    name,
    type,
    className,
    required,
    disabled,
    onChange,
    onPressEnter,
    formHook,
}) => {
    const [text, setText] = useState('')
    const [innerType, setInnerType] = useState(type)

    const inputClass = classNames({
        [cl.Fill]: !!text,
        [cl.Error]: formHook.formState.errors?.[name],
    })
    const presButtonHandler = usePressButton()

    function clickButtonHandler(e: React.KeyboardEvent<HTMLInputElement>) {
        if (!onPressEnter) return
        presButtonHandler(e.key, onPressEnter, e.target)
    }

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target
        setText(value)
        formHook.clearErrors(name as any)
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
        <label htmlFor={name} className={`${cl.Input} ${className}`}>
            {title && <div className={cl.Title}>{title}</div>}
            <div className={cl.Wrap}>
                <input
                    id={name}
                    className={inputClass}
                    type={innerType || 'text'}
                    {...formHook.register(name as any, {
                        required: required ? `Enter ${name}` : false,
                    })}
                    onKeyPress={(e) => clickButtonHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    disabled={disabled}
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
            {formHook.formState.errors?.[name] && (
                <div className={cl.ErrorText}>
                    {formHook.formState.errors?.[name].message}
                </div>
            )}
        </label>
    )
}

export default Input
