import React, { FC } from 'react'
import classnames from 'classnames/bind'
import cl from './SidebarLayout.module.scss'
import MenuSidebar from '../../components/menu-sidebar/MenuSidebar'
import SignOut from '../../components/sign-out/SignOut'
import User from '../../components/user/User'

interface IProps {
    className?: string
}

const SidebarLayout: FC<IProps> = ({ className }) => {
    const sidebarClasses = classnames({
        [cl.Sidebar]: true,
        [className || '']: className,
    })

    return (
        <aside className={sidebarClasses}>
            <User className={cl.User} />
            <MenuSidebar />
            <SignOut />
        </aside>
    )
}

export default SidebarLayout
