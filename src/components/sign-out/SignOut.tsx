import React from 'react'
import cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import cl from './SignOut.module.scss'
import { usePressButton } from '../../hooks/usePressButton'
import { resetUser } from '../../modules/authorization/authorizationSlice'
import { useAppDispatch } from '../../hooks/hooks'

const SignOut = () => {
    const navigate = useNavigate()
    const pressEnter = usePressButton()
    const dispatch = useAppDispatch()

    const signOut = () => {
        cookies.remove('token')
        dispatch(resetUser())
        navigate('../sign-in')
    }

    return (
        <div
            onClick={() => signOut()}
            onKeyPress={() => pressEnter(13, signOut)}
            tabIndex={0}
            role="button"
            className={cl.SignOut}
        >
            <i className="icon icon-input" />
            <span>Sign out</span>
        </div>
    )
}

export default SignOut
