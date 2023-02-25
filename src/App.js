import './App.css';
import Header from './components/Header/header'
import Home from './components/Home/Home'
import  Checkout from './components/Checkout/Chekout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

      <div className="App">
         <Header/>
       <Routes>

       <Route path="/Checkout" element={<Checkout /> } />
          <Route path="/" element={(<> <Home/></>)}/>
            
            
          

     </Routes>
</div>

    </Router>

  );
}

export default App;
