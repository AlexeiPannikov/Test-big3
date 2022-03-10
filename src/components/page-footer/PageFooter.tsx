import React, { FC } from 'react'
import cl from './PageFooter.module.scss'

const PageFooter: FC = ({ children }) => {
    return <div className={cl.PageFooter}>{children}</div>
}

export default PageFooter
