import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import cl from './SignInPage.module.scss'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import CustomLink from '../../ui/custom-link/CustomLink'
import { signInThunk } from '../../modules/authorization/signInThunk'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { resetIsSuccess } from '../../modules/authorization/authorizationSlice'

const SignInPage = () => {
    const hookForm = useForm()
    const { handleSubmit, setError } = hookForm
    const dispatch = useAppDispatch()
    const { isSuccess, error } = useAppSelector((state) => state.authorization)
    const navigate = useNavigate()

    useEffect(() => {
        if (error) {
            setError('login', { message: '' })
            setError('password', {
                message: 'Wrong login or password. Please, try again.',
            })
        }
    }, [error])

    useEffect(() => {
        if (isSuccess) {
            navigate('/')
            dispatch(resetIsSuccess())
        }
    }, [isSuccess])

    const signIn = async (data: any) => {
        dispatch(signInThunk(data))
    }

    return (
        <div className={cl.SignInPage}>
            <section className={cl.LeftCol}>
                <form onSubmit={handleSubmit(signIn)} className={cl.Form}>
                    <h1 className={cl.Title}>Sign In</h1>
                    <Input
                        title="Login"
                        name="login"
                        formHook={hookForm}
                        required
                        className={cl.Margin}
                    />
                    <Input
                        title="Password"
                        name="password"
                        formHook={hookForm}
                        required
                        type="password"
                        className={cl.Margin}
                    />

                    <Button className={cl.Margin}>Sign In</Button>
                </form>

                <div className={cl.Subtitle}>
                    Already a member?{' '}
                    <CustomLink to="../sign-up">Sign up</CustomLink>
                </div>
            </section>

            <section className={cl.RightCol}>
                <img
                    src={require('../../assets/images/sign-in.png')}
                    alt="basketball"
                />
            </section>
        </div>
    )
}

export default SignInPage
