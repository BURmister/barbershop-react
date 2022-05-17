import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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


function App() {

  const [login, setLogin] = React.useState(false);
  const [map, setMap] = React.useState(false);
  const [isHeader, setIsHeader] = React.useState(true);
  const [cart, setCart] = React.useState(false);


  if(login) {

    let modalOpen = () => {
      document.body.style.overflow = "hidden";
    }

    return (
      modalOpen()
    )
  }
  

  let modalClose = () => {
    document.body.style.overflow = "visible"; 
  }
  

  return (
    <div> 


      {cart ? <Cart clickOnClose={() => setCart(false)} stateOfCart={cart} /> : null}

      {isHeader ? 
        <Header clickOnCart={() => setCart(true)} clickOnLogIn={() => setLogin(true)} /> : 
        <Header2 clickOnCart={() => setCart(true)} clickOnLogIn={() => setLogin(true)}/>
      }
      
      {login && <Login clickOnClose={() => setLogin(false)}/>}
      {map && <Map clickOnCloseMap={() => setMap(false)} />}

    
      

      <div className="main" onClick={() => setLogin(false)} >
      
        <Routes>
          
          <Route path="/" element={<Information isHeader={() => setIsHeader(true)} clickOnMap={() => setMap(true)} clickOnCloseMap={() => setMap(false)}  />} exact />
          <Route path="/Price-List" element={<PriceList isHeader={() => setIsHeader(false)}/>} />
          <Route path="/News" element={<News isHeader={() => setIsHeader(false)}/>} />
          <Route path="/Shop" element={<Shop isHeader={() => setIsHeader(false)}/>} />
          <Route path="/Contacts" element={<Contacts isHeader={() => setIsHeader(false)}/>} />

        </Routes>

      </div> 


      <Footer />

    </div>
  );
}

export default App;
