import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStatevalue } from '../stateprovider/Stateprovider'



function Product({ Name, price, rating,imgSrc }) {

  const [{basket}, dispatch] = useStatevalue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        Name: Name,
        price: price,
        rating: rating,
        imgSrc:imgSrc,
      },
    });

  }




  let f = Number(rating);
  // console.log(typeof(f));
  return (
    <div className="container">
      <div className="content">
        <p className='content-content'>{Name}</p>
        <p className='dollar'>$<span className='price'>{price}</span></p>
        <p className='star-icon'>

          {Array.apply(null, Array((f))).map((i) => {
            return (<i key={i} >
              <StarIcon />
            </i>)
          })}


        </p>
      </div>

      <div className='product-images'>
        <img src={imgSrc} alt="" />
      </div>

      <div className="button">
        <button onClick={addToBasket}>Add to Basket</button>
      </div>

    </div>
  );
}
export default Product;