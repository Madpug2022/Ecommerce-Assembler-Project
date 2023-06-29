import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LogInNavbar from '../components/LogInNavbar';
import Navbar from '../components/Navbar';
import Featured from '../pages/Featured';
import Cart from '../pages/Cart';
import GamesPage from '../pages/Games';

function App() {
  return (
    <BrowserRouter>
      <LogInNavbar />
      <Navbar />
      <Routes>
        <Route index element={<Featured />} />
        <Route path='/Playstation/:href' element={<GamesPage/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path='*' element={<Navigate replace to='/'/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
