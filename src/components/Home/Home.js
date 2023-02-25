import React from 'react'
import './Home.css'
import Product from './product'

function Home(){
   return(
<div className='home'>

    <div className="home--container">
        <img className='home__image'
        src="/banner1.jpg" alt="" />

       
       <div className="home_row">
       <Product Name='Redimi Note 7s Phone Cover' price='5' rating='3' />
          <Product Name='Redimi Note 7s Phone Cover' price='5' rating='3' />
       

       </div>
       <div className="home_row">
       
       <Product Name='Redimi Note 7s Phone Cover' price='5' rating='3' />
       <Product Name='Redimi Note 7s Phone Cover' price='5' rating='3' />
       <Product Name='Redimi Note 7s Phone Cover' price='5' rating='3' />
          
       </div>
       <div className="home_row">
       <Product Name='Redimi Note 7s Phone Cover' price='5' rating='3' />
        
       </div>





    </div>
    

</div>
   );
}
export default Home;