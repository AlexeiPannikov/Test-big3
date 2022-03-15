import React, { FC, useRef } from 'react'
import classnames from 'classnames/bind'
import cl from './Content.module.scss'
import { ItemNumberEnum } from './ItemNumberEnum'

interface IProps {
    itemNumber?: ItemNumberEnum
}

const Content: FC<IProps> = ({ children, itemNumber = 6 }) => {
    const contentClasses = classnames({
        [cl.Content]: true,
        [cl.Six]: itemNumber === ItemNumberEnum.Six,
        [cl.Twelve]: itemNumber === ItemNumberEnum.Twelve,
        [cl.TwentyFour]: itemNumber === ItemNumberEnum.TwentyFour,
    })

    const content = useRef(null)

    // const getMinHeight = () => {
    //     const { height } = content.current
    //     console.log(height)
    // }
    //
    // useEffect(() => {
    //     getMinHeight()
    // }, [content.current?.height])

    return (
        <main className={contentClasses} ref={content}>
            {children}
        </main>
    )
}

export default Content
