import React, { useState, useEffect } from 'react'
import './payment.css'
import { collection, addDoc } from "firebase/firestore"; 
import { doc, setDoc,updateDoc } from "firebase/firestore"; 
import { useStatevalue } from '../stateprovider/Stateprovider';
import{db} from '../../firebase';

import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { getBasketTotal } from '../stateprovider/Reducer';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ShoopingContainer from '../Checkout/ShoopingContainer';

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto ,Open Sans , Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }

        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

const stripePromise = loadStripe("pk_test_51Mia27SFyQxgXuo3S6DNSUlYkK0klmzaJJlj4Os4QUcTbLqWfXVC2vwBZHhHwPAsn4ElNcq2PnVtMkApUpRLiqkb00PtgugfGy")

const Payment = () => {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStatevalue();
    // const totalprice=useSelector((state)=>state.cartreducer.price)
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: (getBasketTotal(basket) * 100),
                    id
                })

                if (response.data.success) {
                    console.log("successful transaction");

               
                    setSuccess(true);


                try {
                   

              

                            await addDoc(collection(db, "users", user?.uid, "Orders"), {
                                time: new Date(),
                                
                                 amount: (getBasketTotal(basket) * 100),
                                 paymentMethod:paymentMethod.id,
                                basket:basket,
                             })
                          
                        
                     

                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }


                }
            } catch (error) {
                console.log("Error", error);
            }
        } else {

            console.log(error.message);
        }

    }





    return (

        <>
            <div className="payment">
                <div className="paymentContaier">
                    <h1>
                        Checkout (
                        <Link to="/checkout">{basket?.length} length</Link>
                        )
                    </h1>
                    {/* Address Section */}
                    <div className="payment-section">
                        <div className="payment-title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment-address">
                            <p>{user?.email}</p>
                            <p>123 React Lane</p>
                            <p>Los Angles, CA</p>
                        </div>
                    </div>

                    {/* item section */}
                    <div className="payment-section">
                        <div className="payment-title">
                            <h3>Review items and delivery</h3>
                        </div>

                        <div className="payment-items">
                            <ShoopingContainer />

                        </div>
                    </div>

                    {/* payment-method */}

                </div>

         



            <div className="payment-section">
                        <div className="payment-title">
                            <h3>Payment</h3>
                        </div>

                        <div className="payment-items">
                            
                        <div className='flex-payment-container'>
                    <div className='payment-container'>
                        {!success ?
                            <form onSubmit={handleSubmit}>
                                <fieldset className='formgroup'>
                                    <div className='formrow'>
                                        <CardElement options={CARD_OPTIONS} />
                                    </div>
                                </fieldset>
                                <button className='payment-btn'>pay</button>
                            </form>
                            :
                            <div>
                                {navigate('/Successfull')
                                
                                
                                }
                                



                                
                            </div>
                        }

                    </div>
                </div>

                        </div>
                    </div>

                    </div>



           


        </>
    );
}
export default Payment