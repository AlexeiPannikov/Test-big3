import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from './MenuSidebar.module.scss'

const MenuSidebar = () => {
    const setClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${cl.Active}` : ''

    return (
        <div className={cl.MenuSidebar}>
            <NavLink className={setClass} to="/teams">
                <i className="icon icon-group-person" />
                Teams
            </NavLink>
            <NavLink className={setClass} to="/players">
                <i className="icon icon-person" />
                Players
            </NavLink>
        </div>
    )
}

export default MenuSidebar
