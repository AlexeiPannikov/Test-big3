import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/main-layout/MainLayout'
import TeamsPage from '../pages/teams/TeamsPage'
import PlayersPage from '../pages/players/PlayersPage'

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
            <Route path="/" element={<MainLayout />}>
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/players" element={<PlayersPage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter
