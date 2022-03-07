import React from 'react'
import cl from './ErrorPage.module.scss'

const ErrorPage = () => {
    return (
        <section className={cl.ErrorPage}>
            <div className={cl.Image}>
                <img
                    src={require('../../assets/images/404.png')}
                    alt="Error 404"
                />
            </div>
            <h1 className={cl.Title}>Page not found</h1>
            <h2 className={cl.SubTitle}>
                Sorry, we can’t find what you’re looking for
            </h2>
        </section>
    )
}

export default ErrorPage
