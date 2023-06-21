import './styles/App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { ShopContextProvider } from './context/ShopContext'

function App() {
  return (
    <>
    <ShopContextProvider>
      <Header/>
      <Footer/>
    </ShopContextProvider>
    </>
  )
}

export default App
