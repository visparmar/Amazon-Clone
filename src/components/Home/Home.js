import React from 'react'
import './Home.css'
import Product from './product'
import  { MenuItems, Items } from '../sampleData';

function Home(){
   return(
<div className='home'>

    <div className="home--container">
        <img className='home__image'
        src="/banner1.jpg" alt="" />

       
       <div className="home_row">
       {/* {MenuItems.map((data) => {
                return (
                  <div key={data.id} className="menu-items" onClick={() => filterData(data.itemId)}>
                    <MenuCard imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                );
              })} */}







         {MenuItems.map((ele)=>{
            return(
               <Product Name={ele.name} price={ele.price} rating={ele.ratings} imgSrc={ele.imgSrc}  id={ele.id}/>
            )
               
         })
    }

       {/* <Product Name='Redimi Note 7s Phone Cover' price='5' rating='3'  />
          <Product Name='Redimi Note 7s Phone Cover' price='5' rating='3' /> */}
       

       </div>
       <div className="home_row">
       
       <Product Name='Redimi Note 7s Phone Cover'  price={50000}  rating='3' imgSrc="https://i5.walmartimages.com/asr/a31fe034-b1f4-463f-bac4-2cc3d460d2dc_1.792b802f232939dc8441687231824c9d.jpeg" />
       <Product Name='Redimi Note 7s Phone Cover' price={5} rating='3' />
       <Product Name='Redimi Note 7s Phone Cover' price={5} rating='3' />
          
       </div>
       <div className="home_row">
       <Product Name='Redimi Note 7s Phone Cover' price={5} rating='3' />
        
       </div>





    </div>
    

</div>
   );
}
export default Home;