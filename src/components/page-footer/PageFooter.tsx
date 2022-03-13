import React, { FC } from 'react'
import cl from './PageFooter.module.scss'

const PageFooter: FC = ({ children }) => {
    return <footer className={cl.PageFooter}>{children}</footer>
}

export default PageFooter
