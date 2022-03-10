import React, { FC } from 'react'
import cl from './PageContainer.module.scss'

const PageContainer: FC = ({ children }) => {
    return <div className={cl.PageContainer}>{children}</div>
}

export default PageContainer
