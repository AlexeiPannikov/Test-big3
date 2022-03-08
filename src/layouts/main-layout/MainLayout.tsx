import React, { useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import cl from './MainLayout.module.scss'
import HeaderLayout from '../header-layout/HeaderLayout'
import SidebarLayout from '../sidebar-layout/SidebarLayout'

export const MobileMenuContext = React.createContext(null)

const MainLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    const mobileMenuState = useMemo(() => {
        return {
            isOpen,
            setIsOpen,
        }
    }, [isOpen])

    return (
        <MobileMenuContext.Provider value={mobileMenuState}>
            <div className={cl.MainLayout}>
                <HeaderLayout />

                <div className={cl.SidebarMainWrapper}>
                    <SidebarLayout />

                    <main className={cl.Main}>
                        <Outlet />
                    </main>
                </div>
            </div>
        </MobileMenuContext.Provider>
    )
}

export default MainLayout
