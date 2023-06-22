import './styles/App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { ShopContextProvider } from './context/ShopContext'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <>
    <ReactNotifications />
    <ShopContextProvider>

      <Header/>
      <Footer/>
    </ShopContextProvider>
    </>
  )
}

export default App
