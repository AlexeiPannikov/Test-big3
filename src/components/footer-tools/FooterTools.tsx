import React, { FC, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Select from 'react-select'
import cl from './FooterTools.module.scss'
import './custom-select.scss'

interface IProps {
    pageCount: number
    onPageChange: (data: number) => void
    onSizeChange: (data: ISize) => void
}

export interface ISize {
    value: number
    label: number
}

const FooterTools: FC<IProps> = ({ pageCount, onPageChange, onSizeChange }) => {
    const sizeList = [
        { value: 6, label: 6 },
        { value: 12, label: 12 },
        { value: 24, label: 24 },
    ]

    const getSize = (): ISize | null => {
        const size = localStorage.getItem('size')
        if (!size) return null
        return JSON.parse(size)
    }

    const [currentSize, setCurrentSize] = useState<ISize>(
        getSize() || sizeList[0]
    )
    const [currentPage, setCurrentPage] = useState<number>(
        0 || Number(localStorage.getItem('page'))
    )

    useEffect(() => {
        onSizeChange(currentSize)
    }, [])

    const sizeChangeHandler = (size: ISize) => {
        localStorage.setItem('size', JSON.stringify(size))
        if (size.value === currentSize.value) return
        setCurrentSize(size)
        onSizeChange(size)
    }

    const pageChangeHandler = ({ selected }: { selected: number }) => {
        localStorage.setItem('page', selected.toString())
        const page = localStorage.getItem('page')
        setCurrentPage(Number(page))
        onPageChange(Number(page))
    }

    return (
        <div className={cl.FooterTools}>
            <ReactPaginate
                initialPage={currentPage}
                pageCount={pageCount}
                breakLabel="..."
                previousLabel=""
                nextLabel=""
                marginPagesDisplayed={1}
                pageRangeDisplayed={4}
                onPageChange={pageChangeHandler}
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
            <Select
                options={sizeList}
                value={currentSize}
                onChange={sizeChangeHandler}
                classNamePrefix="custom-select"
            />
        </div>
    )
}

export default FooterTools
