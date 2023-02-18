import React from 'react'
import './Checkout.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { checkboxClasses } from '@mui/material';



function Checkout() {

    return (
        <>

            <div className="Checkout">

                <div className="left">
                
                    <h1>Shooping cart</h1>
                    <div className='price-right-cart'>
                    <span>Price</span>
                    </div>

                    
                    
                    <div className="container-">

                        <div className="image">
                            <img src="/logo192.png" alt="" className='checkout-image' />
                        </div>
                        <div className="Name">
                            <p>Woopme Never Give Up</p>
                        </div>


                    </div>
                </div>

                <div className="right">
                    <div className="total">
                        <div className="freeDelivery">

                            <CheckCircleIcon />
                            <p>Your order is eligible for FREE Delivery.</p>
                        </div>


                        <h3>Subtotal (1 item): $ 499.00</h3>

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