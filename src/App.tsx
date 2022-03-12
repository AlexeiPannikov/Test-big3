import React from 'react'
import './assets/styles/App.scss'
import AppRouter from './router/AppRouter'

const App = (): JSX.Element => {
    return (
        <div className="App">
            <AppRouter />
        </div>
    )
}

export default App
