import React, { FC, useContext } from 'react'
import classnames from 'classnames/bind'
import cl from './BurgerButton.module.scss'
import { MobileMenuContext } from '../../main-layout/MainLayout'
import { usePressButton } from '../../../hooks/usePressButton'

interface IProps {
    className?: string
}

const BurgerButton: FC<IProps> = ({ className }) => {
    const burgerButtonClasses = classnames({
        [cl.BurgerButton]: true,
        [className || '']: !!className,
    })
    const { setIsOpen } = useContext(MobileMenuContext)
    const pressEnter = usePressButton()

    const burgerButtonHandler = (e?: React.KeyboardEvent<HTMLDivElement>) => {
        if (e) {
            pressEnter(
                e.key,
                setIsOpen((value: boolean) => (value = !value))
            )
            return
        }
        setIsOpen((value: boolean) => (value = !value))
    }

    return (
        <div
            onClick={() => burgerButtonHandler()}
            className={burgerButtonClasses}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => burgerButtonHandler(e)}
        >
            <div />
            <div />
            <div />
        </div>
    )
}

export default BurgerButton
