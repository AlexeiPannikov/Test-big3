import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import cl from './Select.module.scss'
import { usePressButton } from '../../hooks/usePressButton'
import SelectList from './components/select-list/SelectList'
import { SelectItemModel } from './components/select-item/SelectItemModel'
import { useClickOutside } from '../../hooks/useClickOutside'

interface IProps {
    list: SelectItemModel[]
    onSelect?: (value: string) => void
}

const Select: FC<IProps> = ({ list, onSelect }) => {
    const [open, setOpen] = useState(false)
    const [innerList, setInnerList] = useState([...list])
    const [activeItem, setActiveItem] = useState(new SelectItemModel())
    const select = useRef(null)
    const classesArrow = classNames({
        [cl.Arrow]: true,
        [cl.Active]: open,
    })
    const pressButtonHandler = usePressButton()

    const openDropdown = () => {
        const setValue = () => {
            setOpen((value) => !value)
        }
        const isSuccess = pressButtonHandler(13, setValue)
        if (isSuccess) return
        setValue()
    }

    const setActive = useCallback(
        (text: string) => {
            const mappedList = innerList.slice().map((item) => {
                item.isActive = item.text === text
                return item
            })
            setInnerList([...mappedList])
            setOpen(false)
        },
        [innerList]
    )

    useClickOutside(select, () => setOpen(false))

    function getActiveItem() {
        const foundItem = innerList.find((item) => item.isActive)
        if (foundItem) {
            setActiveItem(foundItem)
            if (onSelect) {
                onSelect(foundItem.text)
            }
        }
    }

    useEffect(() => {
        getActiveItem()
    }, [innerList, getActiveItem])

    return (
        <div className={cl.Select} ref={select}>
            <div className={cl.Value}>{activeItem.text}</div>
            <div
                className={cl.OpenButton}
                onClick={openDropdown}
                onKeyPress={openDropdown}
                role="button"
                tabIndex={0}
            >
                <div className={classesArrow}>
                    <span />
                </div>
            </div>

            {open && <SelectList onSelect={setActive} list={innerList} />}
        </div>
    )
}

export default Select
