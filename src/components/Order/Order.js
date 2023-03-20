import React from 'react';
import './Order.css'
import SearchIcon from '@mui/icons-material/Search';


const Order = () => {
    return(
    <>
    <div className="outer-container">
        <div className="middle-container">
        <div className='order-component'>
        <p>Your Orders</p>
        </div>
        <div className="Search-order">
        <div className='Search-box'>
            <div className="search-icon">
            <SearchIcon  />
            </div>
        
        <div className="search-all-order">
        <input type="text" placeholder='Search all orders'/>
        </div>
            
            
        </div>
        <div>
            <button className='Search-Orders'>Search Order</button>
        </div>
        </div>

    
            
        </div>
       
       <div className="lower-outer">
       <div className="lower-container">
        <ul>
            <li className='l1-tag'><span  className='select-order' >Orders</span></li>
            <li><span>Buy Again</span></li>
            <li><span>Not Yet Shipped</span></li>
            <li><span>Cancelled Orders</span></li>
        </ul>
            
             
              
            
        </div>
        
       </div>
       <div className='order-status'>
       <p><span className='color-black'>0 orders </span>placed </p>
       </div>
      
        
       
    </div>;

     
        </>
    )
}



export default Order;