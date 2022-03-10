import React, { FC } from 'react'
import classNames from 'classnames/bind'
import cl from '../select/Select.module.scss'

interface IProps {
    className?: string
}

const Arrow: FC<IProps> = ({ className }) => {
    const classesArrow = classNames({
        [cl.Arrow]: true,
        [className || '']: className,
    })
    return (
        <div className={classesArrow}>
            <span />
        </div>
    )
}

export default Arrow
