import React from 'react'
import { Outlet } from 'react-router-dom'
import cl from './MainLayout.module.scss'
import HeaderLayout from '../header-layout/HeaderLayout'
import SidebarLayout from '../sidebar-layout/SidebarLayout'

const MainLayout = () => {
    return (
        <div className={cl.MainLayout}>
            <HeaderLayout />

            <div className={cl.SidebarMainWrapper}>
                <SidebarLayout />

                <main className={cl.Main}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout
