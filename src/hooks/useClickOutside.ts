import { MutableRefObject, useEffect } from 'react'

export function useClickOutside(
    ref: MutableRefObject<any>,
    handler: (e: Event) => void
) {
    useEffect(() => {
        const listener = (event: Event) => {
            if (!ref.current || ref.current.contains(event.target)) return
            handler(event)
        }
        document.addEventListener('click', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            document.removeEventListener('click', listener)
            document.removeEventListener('touchstart', listener)
        }
    })
}
