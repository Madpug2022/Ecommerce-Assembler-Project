import './styles/App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { useState, useEffect, CSSProperties  } from 'react'
import { ShopContextProvider } from './context/ShopContext'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "auto",
};

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
  }, [])
  return (
    <>
    { loading?
    <ClipLoader
    color={'black'}
    loading={loading}
    cssOverride={override}
    size={150}
  /> :
  <>
    <ReactNotifications />
    <ShopContextProvider>
      <Header/>
      <Footer/>
    </ShopContextProvider> </>}
    </>
    )
}

export default App
