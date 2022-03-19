import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/main-layout/MainLayout'
import TeamsPage from '../pages/teams/teams-page/TeamsPage'
import PlayersPage from '../pages/players/PlayersPage'
import SignUpPage from '../pages/sign-up/SignUpPage'
import SignInPage from '../pages/sign-in/SignInPage'
import ErrorPage from '../pages/404/ErrorPage'
import AddNewTeamPage from '../pages/teams/add-new-team-page/AddNewTeamPage'

const AppRouter = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/teams')
        }
    }, [location.pathname])

    return (
        <Routes>
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="/" element={<MainLayout />}>
                <Route path="/teams" element={<TeamsPage />} />
                <Route
                    path="/teams/add-new-team"
                    element={<AddNewTeamPage />}
                />
                <Route path="/players" element={<PlayersPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouter
