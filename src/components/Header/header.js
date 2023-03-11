import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import { useStatevalue } from '../stateprovider/Stateprovider';
import { auth } from '../../firebase';

function Header() {
    const [{basket ,user},dispatch]=useStatevalue();

    function handleAuth(){
         
  if(user){
    auth.signOut();
  }

    }
    
    return (
        <div className='header'>
               
               <Link to={"/"}>
               <img src="/logo.jpg" alt="" className="logo" />
               </Link>
           


            <div className="header-search">
                <input type="text" className="header-searchIn" />
                
                <SearchIcon  className='search-icon'/>
                
                
            </div>


            <div className="header-nav">
                <Link to={!user && "/login"}>
               <div onClick={handleAuth}className="header-option">
                   <p className='line-1'>Hello, {user ?user.email :''}</p>
                   <span className='line-2'>{user ? 'Sign Out':'Sign In'}</span>
               </div>
               </Link>
               <Link to={"/Orders"}>
               <div className="header-option">
               <p className='line-1'>Returns </p>
                   <span className='line-2'>& Orders</span>
               </div>
               </Link>
               

               <div className="header-option">
               <p className='line-1'>your</p>
                   <span className='line-2'>Prime</span>
               </div>
               
            </div>



<div className="basket" id='hover'>
                    <span className='qty'>{basket?.length}</span>
                   <Link to={"/Checkout"}>
                   <ChildFriendlyIcon className='basket'/>
                   </Link> 
                
                 </div>


</div>
                
        
    )
}
export default Header