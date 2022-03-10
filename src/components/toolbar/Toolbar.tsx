import React, { FC } from 'react'
import cl from './Toolbar.module.scss'

const Toolbar: FC = ({ children }) => {
    return <div className={cl.Toolbar}>{children}</div>
}

export default Toolbar
