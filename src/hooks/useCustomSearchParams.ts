import { useSearchParams } from 'react-router-dom'

export const useCustomSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const paramsObject = Object.fromEntries([...searchParams])

    return [searchParams, setSearchParams, paramsObject]
}
