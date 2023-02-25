import React,{useEffect} from 'react'
import './Checkout.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { checkboxClasses } from '@mui/material';
import { useStatevalue } from '../stateprovider/Stateprovider';




function Checkout() {

    const [{basket},dispatch]=useStatevalue();
  



    return (
        <>

            <div className="Checkout">

                 
                           
                           <div className="left">

                           <h1>Shooping Cart</h1>
                           <div className='price-right-cart'>
                               <span>Price</span>
                           </div>
       
       
                           {basket.map((ele)=>{
                    return(
                           <div className="container-">
       
                               <div className="image">
                                   <img src="/logo192.png" alt="" className='checkout-image' />
                               </div>
                               <div className="checkout-container">
                                      
                               <div className="Name">
                                   <p>{ele.Name}</p>
                                   <p className='Amount'>{ele.price}</p>
                               </div>
                               <div className='qty-instock-delete'>
       
                               <p>in Stock</p>
       
                               <div className="wrapper">
       
                               <div className='list'>
                               <select>
                               <option value="0">0 (delete)</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                               <option value="7">7</option>
                               <option value="8">8</option>
                               <option value="9">9</option>
                               </select>
                               </div>
                              
                              <div className='delete'>
                              <span> Delete </span>
                              <span> Save for later </span><span> Add to lst </span>
                              </div>
                                  
                               </div>
                               
                                 
                               </div>
                               
                                   
       
                               </div>
                              
                              
       
       
                           </div>
                             );

                            })}


<div className='Grand-Total'>
    <span className='Grand-Total-container-Total'>Total</span><span className='Grand-Total-container-rs'>0</span>
</div>

                       </div>
                  
              
                {/* End of left */}

                <div className="right">
                    <div className="total">
                        <div className="freeDelivery">

                            <CheckCircleIcon />
                            <p>Your order is eligible for FREE Delivery.</p>
                        </div>


                        <h3>Subtotal ({basket.length} item): $ 499.00</h3>

                        <div className="check-box">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1"> This order contain a gift</label><br />
                        </div>


                        <div className="proceed_to_buy">
                            <button >Proceed to Buy</button>
                        </div>
                    </div>



                </div>


            </div>

        </>

    );
}
export default Checkout;