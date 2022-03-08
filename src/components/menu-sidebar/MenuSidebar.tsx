import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from './MenuSidebar.module.scss'

const MenuSidebar = () => {
    const setClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${cl.Active}` : ''

    return (
        <nav className={cl.MenuSidebar}>
            <NavLink className={setClass} to="/teams">
                <i className="icon icon-group-person" />
                <span>Teams</span>
            </NavLink>
            <NavLink className={setClass} to="/players">
                <i className="icon icon-person" />
                <span>Players</span>
            </NavLink>
        </nav>
    )
}

export default MenuSidebar
