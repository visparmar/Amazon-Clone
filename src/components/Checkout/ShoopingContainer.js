import React, { useEffect, useState } from 'react'
import './ShoopingContainer.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { checkboxClasses } from '@mui/material';
import { useStatevalue } from '../stateprovider/Stateprovider';
import { useNavigate } from 'react-router-dom';




const ShoopingContainer = () => {
    const [{ basket }, dispatch] = useStatevalue();
    const [total, settotal] = useState(0);

    useEffect(() => {
        var result = basket.reduce(function (tot, arr) {
            return tot + arr.price
        }, 0);
        //   console.log(result);
        settotal(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(result))
    }, [basket])


    function removeFromBasket(ele) {
        // remove the item from the basket

        dispatch({
            type: 'Remove_From_Basket',
            id: (ele.id),
        })
        // console.log((ele));
    }

    return (<>
        

            
            <div className='price-right-cart'>
                <span>Price</span>
            </div>


            {basket.map((ele) => {
                return (
                    <div className="container-">

                        <div className="image">
                            <img src={ele.imgSrc} alt="" className='checkout-image' />
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
                                        <span onClick={() => removeFromBasket(ele)}> Delete </span>
                                        <span> Save for later </span><span> Add to lst </span>
                                    </div>

                                </div>


                            </div>



                        </div>




                    </div>
                );

            })}


            <div className='Grand-Total'>
                <span className='Grand-Total-container-Total'>Total</span><span className='Grand-Total-container-rs'>{total != 0 ? '$' : ''} {total}</span>
            </div>

    </>);
}



export default ShoopingContainer;