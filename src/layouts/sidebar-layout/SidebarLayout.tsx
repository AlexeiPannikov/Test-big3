import React from 'react'
import cl from './SidebarLayout.module.scss'
import MenuSidebar from '../../components/menu-sidebar/MenuSidebar'
import SignOut from '../../components/sign-out/SignOut'

const SidebarLayout = () => {
    return (
        <aside className={cl.Sidebar}>
            <MenuSidebar />
            <SignOut />
        </aside>
    )
}

export default SidebarLayout
