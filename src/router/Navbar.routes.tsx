import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInNavbar from '../components/LogInNavbar';
import Navbar from '../components/Navbar';
import Featured from '../layout/Featured';
import Cart from '../layout/Cart';

function App() {
  return (
    <BrowserRouter>
      <LogInNavbar />
      <Navbar />
      <Routes>
        <Route index element={<Featured />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
