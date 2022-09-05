import React from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContext from './Components/Context/Context'

// import different Components to render 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Modal/Login';
import Map from './Components/Modal/Map';
import Header2 from './Components/Header2/Header2';
import Cart from './Components/Cart/Cart'



// import different Pages to routing
import Information from './Pages/Information/Information';
import PriceList from './Pages/PriceList/PriceList';
import News from './Pages/News/News';
import Shop from './Pages/Shop/Shop';
import Contacts from './Pages/Contacts/Contacts';
import NotFound from './Pages/NotFound/NotFound';


function App() {

  React.useEffect(() => {
    async function fetchData() {
      await setLoading(true)
      await axios.get('https://6241abd3042b562927a77458.mockapi.io/goods').then((res) => {
        setShopCards(res.data)
      })
      await axios.get('https://6241abd3042b562927a77458.mockapi.io/news').then((res) => {
        setNewsCards(res.data)
      })
      setLoading(false)
    }
    fetchData()
  }, [])

  const [login, setLogin] = React.useState(false);
  const [map, setMap] = React.useState(false);

  const [isHeader, setIsHeader] = React.useState(true);

  const [cart, setCart] = React.useState(false);

  const [shopCards, setShopCards] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [newsCards, setNewsCards] = React.useState([]) 

  const [activePage, setActivePage] = React.useState(0)

  const [sortOpen, setSortOpen] = React.useState(false) 

  const [loading, setLoading] = React.useState(true)

  function overflowHidden() {
    document.body.classList.toggle("overflowHidden")
  }


  return (
    <AppContext.Provider value={
      {
        activePage, setActivePage, isHeader, setIsHeader, cart, setCart, shopCards, cartItems, setCartItems, newsCards, loading, overflowHidden, sortOpen, setSortOpen
      }}>
      <div> 

        {cart ? <Cart normalOverflow={() => overflowHidden()} clickOnClose={() => setCart(false)} stateOfCart={cart} cartItems={cartItems} setCartItems={setCartItems} cartOpened={cart}  /> : null}


        {login && <Login normalOverflow={() => overflowHidden()} clickOnClose={() => setLogin(false)}/>}
        {map && <Map normalOverflow={() => overflowHidden()} clickOnClose={() => setMap(false)} />}


        {isHeader ? 
          <Header overflowHidden={() => overflowHidden()} clickOnCart={() => setCart(true)} clickOnLogIn={() => setLogin(true)} activePage={activePage} /> : 
          <Header2 overflowHidden={() => overflowHidden()} closeSort={() => setSortOpen(false)} clickOnCart={() => setCart(true)} clickOnLogIn={() => setLogin(true)} activePage={activePage}/>
        }
        

        <div className="main" onClick={() => setLogin(false)} >
          
          <Routes>
            
            <Route path="/" element={<Information normalOverflow={() => overflowHidden()} overflowHidden={() => overflowHidden()} newsCards={newsCards} isHeader={() => setIsHeader(true)} clickOnMap={() => setMap(true)} clickOnCloseMap={() => setMap(false)}  />} exact />
            <Route path="/Price-List" element={<PriceList isHeader={() => setIsHeader(false)}/>} />
            <Route path="/News" element={<News newsCards={newsCards} isHeader={() => setIsHeader(false)}/>} />
            <Route path="/Shop" element={<Shop isHeader={() => setIsHeader(false)}/>} />
            <Route path="/Contacts" element={<Contacts isHeader={() => setIsHeader(false)}/>} />
            <Route path="*" element={<NotFound isHeader={() => setIsHeader(false)}/>}/>

          </Routes>       
          
        </div> 


        <Footer />

      </div>
    </AppContext.Provider>
  );
}

export default App;
