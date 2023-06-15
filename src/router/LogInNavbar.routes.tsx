import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import LogInNavbar from '../components/LogInNavbar'
function LogInNavbarRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogInNavbar/>}>
                    <Route index/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default LogInNavbarRoutes
