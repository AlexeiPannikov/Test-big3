import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import cl from './SignUpPage.module.scss'
import Input from '../../ui/input/Input'
import CheckBox from '../../ui/check-box/CheckBox'
import { CheckBoxModel } from '../../ui/check-box/CheckBoxModel'
import Button from '../../ui/button/Button'
import CustomLink from '../../ui/custom-link/CustomLink'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { signUpThunk } from '../../modules/authorization/SignUpThunk'
import { resetIsSuccess } from '../../modules/authorization/authorizationSlice'

const SignUpPage = () => {
    const checkBoxData = new CheckBoxModel({ text: 'I accept the agreement' })
    const hookForm = useForm()
    const { handleSubmit, setError } = hookForm
    const dispatch = useAppDispatch()
    const [isAccept, setIsAccept] = useState(checkBoxData.isChecked)
    const [acceptError, setAcceptError] = useState('')
    const { isSuccess } = useAppSelector((state) => state.authorization)
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            navigate('../sign-in')
        }

        return () => {
            dispatch(resetIsSuccess())
        }
    }, [isSuccess])

    const checkBoxHandler = (isChecked: boolean) => {
        setIsAccept(isChecked)
    }

    const signUp = (data: any) => {
        const {
            name: userName,
            login,
            password,
            'password again': password2,
        } = data
        if (password !== password2) {
            setError('password again', { message: 'Passwords do not match' })
            return
        }
        if (!isAccept) {
            setAcceptError('You must be accept the agreement.')
            return
        }
        dispatch(signUpThunk({ userName, login, password }))
    }

    return (
        <div className={cl.SignUpPage}>
            <section className={cl.LeftCol}>
                <form onSubmit={handleSubmit(signUp)} className={cl.Form}>
                    <h1 className={cl.Title}>Sign Up</h1>
                    <Input
                        formHook={hookForm}
                        title="Name"
                        name="name"
                        className={cl.Margin}
                        required
                    />
                    <Input
                        formHook={hookForm}
                        title="Login"
                        name="login"
                        className={cl.Margin}
                        required
                    />
                    <Input
                        title="Password"
                        name="password"
                        formHook={hookForm}
                        type="password"
                        className={cl.Margin}
                        required
                    />
                    <Input
                        title="Enter your password again"
                        name="password again"
                        formHook={hookForm}
                        type="password"
                        className={cl.Margin}
                        required
                    />

                    <CheckBox
                        data={checkBoxData}
                        className={cl.Margin}
                        onChange={checkBoxHandler}
                        error={acceptError}
                    />

                    <Button className={cl.Margin}>Sign Up</Button>
                </form>

                <div className={cl.Subtitle}>
                    Already a member?{' '}
                    <CustomLink to="../sign-in">Sign in</CustomLink>
                </div>
            </section>

            <section className={cl.RightCol}>
                <img
                    src={require('../../assets/images/sign-up.png')}
                    alt="basketball"
                />
            </section>
        </div>
    )
}

export default SignUpPage
