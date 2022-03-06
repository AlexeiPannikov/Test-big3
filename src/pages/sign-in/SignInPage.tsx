import React from 'react'
import { useForm } from 'react-hook-form'
import cl from './SignInPage.module.scss'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import CustomLink from '../../ui/custom-link/CustomLink'

const SignInPage = () => {
    const { handleSubmit } = useForm()

    const signIn = () => {
        console.log('+++++++++++')
    }

    return (
        <div className={cl.SignInPage}>
            <section className={cl.LeftCol}>
                <form onSubmit={handleSubmit(signIn)} className={cl.Form}>
                    <h1 className={cl.Title}>Sign In</h1>
                    <Input
                        title="Login"
                        name="login"
                        errorText="Wrong login. Please, try again."
                        className={cl.Margin}
                    />
                    <Input
                        title="Password"
                        name="password"
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
