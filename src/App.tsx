import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import AppContext from './Components/Context/Context';

// import different Components to render
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Modal/Login';
import Map from './Components/Modal/Map';
import Cart from './Pages/Cart/Cart';

// import different Pages to routing
import Information from './Pages/Information/Information';
import PriceList from './Pages/PriceList/PriceList';
import News from './Pages/News/News';
import Shop from './Pages/Shop/Shop';
import Contacts from './Pages/Contacts/Contacts';
import NotFound from './Pages/NotFound/NotFound';
import ProductPage from './Pages/ProductPage/ProductPage';

import './App.css';

//test
import { AwesomeInput } from './Components/AwesomeInput/AwesomeInput';

function App() {
  const modalRef = React.useRef(null);

  //UseEffect
  React.useEffect(() => {
    async function fetchData() {
      await axios.get('https://6241abd3042b562927a77458.mockapi.io/news').then((res) => {
        setNewsCards(res.data);
      });
    }
    fetchData();
  }, []);

  //ReactStates
  const [login, setLogin] = React.useState(false);
  const [map, setMap] = React.useState(false);
  const [isHeader, setIsHeader] = React.useState(true);
  const [newsCards, setNewsCards] = React.useState([]);
  
  //Functions
  const overflowHidden = React.useCallback(() => {
    document.body.classList.toggle('overflowHidden');
  }, [])

  return (

    <AppContext.Provider
      value={{
        isHeader,
        setIsHeader,
        newsCards,
        overflowHidden, 
      }}>

      <div>
        {login && (<Login modalRef={modalRef} normalOverflow={() => overflowHidden()} clickOnClose={() => setLogin(false)}/>)}
        {map && <Map normalOverflow={() => overflowHidden()} clickOnClose={() => setMap(false)} />}

          <Header
            modalRef={modalRef}
            overflowHidden={() => overflowHidden()}
            setLogin={(state:boolean) => setLogin(state)}
          />
        
        <div className="main">
          <Routes>
            <Route path="/" element={<Information newsCards={newsCards} isHeader={() => setIsHeader(true)}/>}/>
            <Route path="/Price-List" element={<PriceList isHeader={() => setIsHeader(false)} />} />
            <Route path="/News" element={<News newsCards={newsCards} isHeader={() => setIsHeader(false)} />}/>
            <Route path="/Shop" element={<Shop isHeader={() => setIsHeader(false)} />} />
            <Route path="/Contacts" element={<Contacts isHeader={() => setIsHeader(false)} />} />
            <Route path="/Cart" element={<Cart overflowHidden={() => overflowHidden()} isHeader={() => setIsHeader(false)}/>} />
            <Route path="/Shop/:id" element={<ProductPage/>}/>
            <Route path="/Input" element={<AwesomeInput />} />
            <Route path="*" element={<NotFound isHeader={() => setIsHeader(false)} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
