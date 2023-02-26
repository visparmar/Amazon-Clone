import './App.css';
import Header from './components/Header/header'
import Home from './components/Home/Home'
import  Checkout from './components/Checkout/Chekout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login'

function App() {
  return (
    <Router>

      <div className="App">
         
       <Routes>
        <Route path="/login" element={<Login/>} />
       <Route path="Checkout" element={<><Header/><Checkout /></> } />
          <Route path="/" element={(<><Header/> <Home/></>)}/>
            
            
          

     </Routes>
</div>

    </Router>

  );
}

export default App;
