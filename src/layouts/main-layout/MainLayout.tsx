import React, { useEffect, useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
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
                    <CSSTransition
                        in={isOpen}
                        timeout={500}
                        mountOnEnter
                        unmountOnExit
                        classNames={{
                            enter: cl.EnterSb,
                            enterActive: cl.EnterActiveSb,
                            exit: cl.ExitSb,
                            exitActive: cl.ExitActiveSb,
                        }}
                    >
                        <div className={cl.SidebarWrap}>
                            <SidebarLayout />
                        </div>
                    </CSSTransition>

                    <main className={cl.Main}>
                        <Outlet />
                    </main>

                    <CSSTransition
                        in={isOpen}
                        timeout={200}
                        mountOnEnter
                        unmountOnExit
                        classNames={{
                            enter: cl.EnterOv,
                            enterActive: cl.EnterActiveOv,
                            exit: cl.ExitOv,
                            exitActive: cl.ExitActiveOv,
                        }}
                    >
                        <div className={cl.Overlay} />
                    </CSSTransition>
                </div>
            </div>
        </MobileMenuContext.Provider>
    )
}

export default MainLayout
