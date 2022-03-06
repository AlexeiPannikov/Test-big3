import React, { FC, useState } from 'react'
import classnames from 'classnames/bind'
import cl from './CheckBox.module.scss'
import { CheckBoxModel } from './CheckBoxModel'

interface IProps {
    data: CheckBoxModel
    error?: string
    className?: string
    onChange: (value: boolean) => void
    disabled?: boolean
}

const CheckBox: FC<IProps> = ({
    data,
    error,
    className,
    onChange,
    disabled,
}) => {
    const [isChecked, setIsChecked] = useState(data.isChecked)

    const checkBoxClasses = classnames({
        [cl.CheckBox]: true,
        [cl.Error]: !!error && !isChecked,
        [className || '']: className,
    })

    const checkHandler = (value: boolean) => {
        setIsChecked(value)
        onChange(value)
    }

    return (
        <label className={checkBoxClasses} htmlFor="check">
            <input
                id="check"
                name="check"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => checkHandler(e.target.checked)}
                disabled={disabled}
            />
            <span className={cl.Text}>{data.text}</span>
            {error && !isChecked && <div className={cl.ErrorText}>{error}</div>}
        </label>
    )
}

export default CheckBox
