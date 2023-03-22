import React,{useState} from 'react';
import './Order.css'
import SearchIcon from '@mui/icons-material/Search';
import { doc, Firestore, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import{db} from '../../firebase';



const Order = () => {
    const [cart,setcart]=useState({})
    const get=async()=>{
        const querySnapshot = await getDocs(collection(db, "users"));
        // console.log(querySnapshot._snapshot.docChanges[0])
    //     const data=querySnapshot.forEach((doc) => {return((doc.data()));
    //   setcart(data);
    // })
    }
    
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
       {

// querySnapshot.map((doc) => {
  
//   return(console.log(doc.data()));
// })




}
        {/* <p>{ (queryofdocs) ?
          console.log("Document data:", queryofdocs)
         :console.log("No such document!")
        }</p> */}

       
      
        
       
    </div>;

     
        </>
    )
}



export default Order;