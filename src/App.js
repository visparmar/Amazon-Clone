import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header/header'
import Home from './components/Home/Home'
import  Checkout from './components/Checkout/Chekout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import {onAuthStateChanged } from "firebase/auth";
import { auth} from "./firebase";
import { useStatevalue } from './components/stateprovider/Stateprovider';
import Payment from './components/Payment/Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Successfull from './components/Order/Successfull';

const stripePromise = loadStripe('pk_test_51Mia27SFyQxgXuo3S6DNSUlYkK0klmzaJJlj4Os4QUcTbLqWfXVC2vwBZHhHwPAsn4ElNcq2PnVtMkApUpRLiqkb00PtgugfGy');

function App() {
const [{},dispatch]=useStatevalue();




  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log('=====>',user.email);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        dispatch({
          type:'SET_USER',
           user:user
        })
      } else {
        // User is signed out
        // ...
        dispatch({
          type:'SET_USER',
           user:null
        })
      }
    });

  }, [])
  return (
    <Router>

      <div className="App">
         
       <Routes>
        <Route path="/login" element={<Login/>} />
       <Route path="Checkout" element={<><Header/><Checkout /></> } />
       <Route path="payment" 
       element={<>
       <Header/>
       
       
       <Elements stripe={stripePromise}>
       <Payment/>
       </Elements>
       </> } />
          <Route path="/" element={(<><Header/> <Home/></>)}/>
            
            
          
          <Route path="Successfull" element={<Successfull/>} />
     </Routes>
</div>

    </Router>

  );
}

export default App;
