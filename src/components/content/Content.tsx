import React, { FC } from 'react'
import cl from './Content.module.scss'

const Content: FC = ({ children }) => {
    return <main className={cl.Content}>{children}</main>
}

export default Content
