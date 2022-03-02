import React from 'react'
import cl from './Search.module.scss'

const Search = () => {
    return (
        <div className={cl.Search}>
            <input type="text" placeholder="Search..." />
            <i className="icon icon-search" />
        </div>
    )
}

export default Search
