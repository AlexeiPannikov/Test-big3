import React from 'react'
import { useForm } from 'react-hook-form'
import cl from './SignInPage.module.scss'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import CustomLink from '../../ui/custom-link/CustomLink'
/* eslint-disable react/jsx-props-no-spreading */

const SignInPage = () => {
    const hookForm = useForm()
    const { handleSubmit } = hookForm

    const signIn = (data: any) => {
        console.log(data)
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
                        errorText="Wrong login. Please, try again."
                        className={cl.Margin}
                    />
                    <Input
                        title="Password"
                        name="password"
                        formHook={hookForm}
                        errorText="Wrong password. Please, try again."
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
