function startHandler<T>(handler: (data?: T) => void, data?: T) {
    if (data) {
        handler(data)
        return
    }
    handler()
}

export function usePressButton<T>() {
    return function (
        key: string | number,
        handler: (data?: T) => void,
        data?: T
    ): boolean {
        const numKey = Number(key)
        if (!numKey) return false
        if (numKey === 13) {
            startHandler(handler, data)
            return true
        }
        return false
    }
}
