import React from "react";
import Home from "./components/Home/Home";

import Header from "./components/Navbar/Header";
import SubHeader from "./components/Navbar/SubHeader";

import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import SignUp from './components/login-register/SignUp';
import SignIn from './components/login-register/SignIn';
import Orders from './components/orders/Orders';

import OrdersScreen from "./components/footer/OrdersScreen";
import Cartnew from "./components/cart/Cartnew";
import CartScreen from "./components/footer/CartScreen";
import Product from './components/product/Product';
import Cards from "./components/cards/Cards";

import Cardtwo from "./components/cards/Cardtwo";
import Cardsthree from "./components/cards/Cardsthree";
import Cardsfour from "./components/cards/Cardsfour";
import Cardsfive from "./components/cards/Cardsfive";
import Cardsix from "./components/cards/Cardsix";
import Cardsev from "./components/cards/Cardsev";
import Cardsei from "./components/cards/Cardsei";
import Cardsni from "./components/cards/Cardsni";
import Cardsten from "./components/cards/Cardsten";
import Cardsel from "./components/cards/Cardsel";
import Cardstw from "./components/cards/Cardstw";
import Cardslight from "./components/cards/Cardslight";
import Sidenav from "./components/Sidenav/Sidenav";

function App(){
  return(
    <div className="App">
    <Routes>
        <Route path='/' element={ <> <Header /><SubHeader /> <Home /><Footer />  </> } />
        <Route path='/login' element={ <SignIn /> } />
        

        <Route path='/register' element={ <SignUp /> } />
        
        <Route path='/orders' element={ <> <Header /><SubHeader />  <Orders /> <OrdersScreen /> </> } />
        <Route path='/cart' element={ <><Header /><SubHeader /> <Cartnew/> <CartScreen /> </> } />
        <Route path='/cards' element={ <> <Header /><SubHeader /> <Cards /> <Footer /> </> } />
        
        <Route path='/Cardtwo' element={ <> <Header /><SubHeader /> <Cardtwo /> <Footer /> </> } />
        <Route path='/Cardsthree' element={ <> <Header /><SubHeader /> <Cardsthree /> <Footer /> </> } />
        <Route path='/Cardsfour' element={ <> <Header /><SubHeader /> <Cardsfour /> <Footer /> </> } />
        <Route path='/Cardsfive' element={ <> <Header /><SubHeader /> <Cardsfive /> <Footer /> </> } />
        <Route path='/Cardsix' element={ <> <Header /><SubHeader /> <Cardsix /> <Footer /> </> } />
        <Route path='/Cardsev' element={ <> <Header /><SubHeader /> <Cardsev /> <Footer /> </> } />
        <Route path='/Cardsei' element={ <> <Header /><SubHeader /> <Cardsei /> <Footer /> </> } />
        <Route path='/Cardsni' element={ <> <Header /><SubHeader /> <Cardsni /> <Footer /> </> } />
        <Route path='/Cardsten' element={ <> <Header /><SubHeader /> <Cardsten /> <Footer /> </> } />
        <Route path='/Cardsel' element={ <> <Header /><SubHeader /> <Cardsel /> <Footer /> </> } />
        <Route path='/Cardstw' element={ <> <Header /><SubHeader /> <Cardstw /> <Footer /> </> } />
        <Route path='/Cardslight' element={ <> <Header /><SubHeader /> <Cardslight/> <Footer /> </> } />

        </Routes>
      
    </div>
  )
}
export default App;