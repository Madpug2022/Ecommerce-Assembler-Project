import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import Navbar from '../components/Navbar'
function NavbarRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar/>}>
                    <Route index/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default NavbarRoutes
