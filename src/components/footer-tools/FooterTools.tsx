import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import cl from './FooterTools.module.scss'

interface IProps {
    onPageChange: (data: { selected: number }) => void
}

const FooterTools: FC<IProps> = ({ onPageChange }) => {
    return (
        <div className={cl.FooterTools}>
            <ReactPaginate
                pageCount={10}
                breakLabel="..."
                previousLabel=""
                nextLabel=""
                marginPagesDisplayed={1}
                pageRangeDisplayed={4}
                onPageChange={onPageChange}
                containerClassName={cl.PaginationContainer}
                pageClassName={cl.PaginationPage}
                pageLinkClassName={cl.PageLink}
                activeClassName={cl.ActivePage}
                activeLinkClassName={cl.ActivePageLink}
                previousClassName={cl.Previous}
                previousLinkClassName={cl.PreviousLink}
                nextClassName={cl.Next}
                nextLinkClassName={cl.NextLink}
                breakClassName={cl.Break}
            />
        </div>
    )
}

export default FooterTools
