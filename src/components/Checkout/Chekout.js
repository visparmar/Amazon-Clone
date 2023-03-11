import React, { useEffect, useState } from 'react'
import './Checkout.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { checkboxClasses } from '@mui/material';
import { useStatevalue } from '../stateprovider/Stateprovider';
import { useNavigate } from 'react-router-dom';
import ShoopingContainer from './ShoopingContainer';



function Checkout() {
    const navigate = useNavigate();

    const [{ basket ,user }, dispatch] = useStatevalue();
    const [total, settotal] = useState(0);
    useEffect(() => {
        var result = basket.reduce(function (tot, arr) {
            return tot + arr.price
        }, 0);
        //   console.log(result);
        settotal(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(result))
    }, [basket])
    // console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(total));
    //   console.log("==>"+(total));

    function removeFromBasket(ele) {
        // remove the item from the basket

        dispatch({
            type: 'Remove_From_Basket',
            id: (ele.id),
        })
        // console.log((ele));
    }

    return (
        <>

            <div className="Checkout">

                

                <div className="left">

                           <h1 className='shopping-cart'>Shopping Cart</h1>
                    <ShoopingContainer/>

                    

                </div>


                {/* End of left */}

                <div className="right">
                    <div className="total">
                        <div className="freeDelivery">

                            <CheckCircleIcon />
                            <p>Your order is eligible for FREE Delivery.</p>
                        </div>


                        <h3>Subtotal ({basket.length} item):{total != 0 ? '$' : ''} {total}</h3>

                        <div className="check-box">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label for="vehicle1"> This order contain a gift</label><br />
                        </div>


                        <div className="proceed_to_buy">
                            {console.log(user)}
                            <button onClick={user !=null ? e => navigate('/payment'):''}>Proceed to Buy</button>
                        </div>
                    </div>



                </div>


            </div>

        </>

    );
}
export default Checkout;