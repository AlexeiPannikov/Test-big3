import React, { FC } from 'react'
import cl from './Search.module.scss'

interface IProps {
    onChange: (value: string) => void
}

const Search: FC<IProps> = ({ onChange }) => {
    return (
        <div className={cl.Search}>
            <input
                onChange={(e) => onChange(e.target.value)}
                type="text"
                placeholder="Search..."
            />
            <i className="icon icon-search" />
        </div>
    )
}

export default Search
