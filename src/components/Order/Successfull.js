import React from 'react';
import './Successfull.css'
import sucss from '../../assets/payment_successful.gif'
import { useNavigate } from 'react-router-dom';
import { useStatevalue } from '../stateprovider/Stateprovider';




const Successfull = () => {
    const [{basket}, dispatch] = useStatevalue();
    const navigate=useNavigate();
    dispatch({
        type: 'Blank_Basket',
        
    })
    // window.location.reload();
    function afterOrder(){
       
        setTimeout(function(){
            navigate('/');
        }, 5000);
    }
    return (
        <div className='success-page'>
            <div className="logo-success">
                <img src={sucss} alt="" />
            </div>
            <div>
            <h2>ORDER SUCCESSFULL</h2>
            </div>
           {afterOrder()}
        </div>
    );
}



export default Successfull;