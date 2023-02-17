import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';

function Product({Name,price,rating}){
     let f=Number(rating);
     // console.log(typeof(f));
  return(
       <div className="container">
        <div className="content">
        <p className='content-content'>{Name}</p>
        <p className='dollar'>$<span className='price'>{price}</span></p>
        <p className='star-icon'>

        {Array.apply(null,Array((f))).map((i)=>{
                           return( <i key={i} >
                            <StarIcon/>
                        </i>)
                    })}

            
          </p>
        </div>
       
        <div className='product-images'>
            <img src="/logo192.png" alt="" />
        </div>

           <div className="button">
           <button>Add to Basket</button>
            </div>  
       
       </div>
  );
}
export default Product;