import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import cl from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
    const location = useLocation()
    const [items, setItems] = useState<string[]>([])

    function getRoutesOfPathname(pathname: string): string[] {
        const paths = pathname.split('/').filter((item) => item !== '')
        const newPaths = paths.map((item) => {
            return (
                item.split('-').join(' ')[0].toUpperCase() + item.substring(1)
            )
        })
        return newPaths
    }

    useEffect(() => {
        const routes = getRoutesOfPathname(location.pathname)
        setItems([...routes])
    }, [])

    return (
        <div className={cl.Breadcrumbs}>
            {items.map((item) => (
                <span className={cl.Item} key={item}>
                    {item}
                    <span className={cl.Slash}> / </span>
                </span>
            ))}
        </div>
    )
}

export default Breadcrumbs
