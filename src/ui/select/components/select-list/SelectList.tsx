import React, { FC } from 'react'
import cl from './SelectList.module.scss'
import SelectItem from '../select-item/SelectItem'
import { SelectItemModel } from '../select-item/SelectItemModel'

interface IProps {
    list: SelectItemModel[]
    onSelect: (value: string) => void
}

const SelectList: FC<IProps> = ({ list, onSelect }) => {
    return (
        <div className={cl.SelectList}>
            {list.map((item) => (
                <SelectItem key={item.id} item={item} onSelect={onSelect} />
            ))}
        </div>
    )
}

export default SelectList
