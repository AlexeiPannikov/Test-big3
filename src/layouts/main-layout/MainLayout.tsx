import React, { useEffect, useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import classnames from 'classnames/bind'
import cl from './MainLayout.module.scss'
import HeaderLayout from '../header-layout/HeaderLayout'
import SidebarLayout from '../sidebar-layout/SidebarLayout'

export const MobileMenuContext = React.createContext(null)

const MainLayout = () => {
    const [isOpen, setIsOpen] = useState(true)
    const mobileMenuState = useMemo(() => {
        return {
            isOpen,
            setIsOpen,
        }
    }, [isOpen])

    const classesSidebar = classnames({
        [cl.SidebarWrap]: true,
        [cl.OpenSidebar]: isOpen,
    })

    const classesOverlay = classnames({
        [cl.Overlay]: true,
        [cl.OpenOverlay]: isOpen,
    })

    const setSidebarState = () => {
        const width = window.innerWidth
        if (width <= 768) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', setSidebarState)
        setSidebarState()
        return () => window.removeEventListener('resize', setSidebarState)
    }, [])

    return (
        <MobileMenuContext.Provider value={mobileMenuState}>
            <div className={cl.MainLayout}>
                <div className={cl.HeaderWrap}>
                    <HeaderLayout />
                </div>

                <div className={cl.SidebarMainWrapper}>
                    <div className={classesSidebar}>
                        <SidebarLayout />
                    </div>

                    <main className={cl.Main}>
                        <Outlet />
                    </main>
                    <div className={classesOverlay} />
                </div>
            </div>
        </MobileMenuContext.Provider>
    )
}

export default MainLayout
