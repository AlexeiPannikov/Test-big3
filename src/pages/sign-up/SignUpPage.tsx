import React from 'react'
import cl from './SignUpPage.module.scss'
import Input from '../../ui/input/Input'
import CheckBox from '../../ui/check-box/CheckBox'
import { CheckBoxModel } from '../../ui/check-box/CheckBoxModel'
import Button from '../../ui/button/Button'
import CustomLink from '../../ui/custom-link/CustomLink'

const SignUpPage = () => {
    const checkBoxData = new CheckBoxModel({ text: 'I accept the agreement' })

    const checkBoxHandler = (isChecked: boolean) => {
        console.log(isChecked)
    }

    const signUp = () => {
        console.log('+++++++++++')
    }

    return (
        <div className={cl.SignUpPage}>
            <section className={cl.LeftCol}>
                <form className={cl.Form}>
                    <h1 className={cl.Title}>Sign Up</h1>
                    <Input title="Name" name="name" className={cl.Margin} />
                    <Input title="Login" name="login" className={cl.Margin} />
                    <Input
                        title="Password"
                        name="password"
                        type="password"
                        className={cl.Margin}
                    />
                    <Input
                        title="Enter your password again"
                        name="password2"
                        type="password"
                        className={cl.Margin}
                    />

                    <CheckBox
                        data={checkBoxData}
                        className={cl.Margin}
                        onChange={checkBoxHandler}
                    />

                    <Button onClick={signUp} className={cl.Margin}>
                        Sign Up
                    </Button>
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
