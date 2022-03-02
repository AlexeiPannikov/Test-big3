import React, { FC } from 'react'
import cl from './SelectItem.module.scss'
import { SelectItemModel } from './SelectItemModel'

interface IProps {
    item: SelectItemModel
    onSelect: (value: string) => void
}

const SelectItem: FC<IProps> = ({ item, onSelect }) => {
    return (
        <div
            className={cl.SelectItem}
            onKeyDown={() => onSelect(item.text)}
            onClick={() => onSelect(item.text)}
            role="button"
            tabIndex={0}
        >
            {item.text}
        </div>
    )
}

export default SelectItem
