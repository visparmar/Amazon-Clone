import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

function Header() {
    return (
        <div className='header'>

            <img src="/logo.jpg" alt="" className="logo" />


            <div className="header-search">
                <input type="text" className="header-searchIn" />
                
                <SearchIcon  className='search-icon'/>
                
                
            </div>


            <div className="header-nav">
               <div className="header-option">
                   <p className='line-1'>Hello</p>
                   <span className='line-2'>sign in</span>
               </div>

               <div className="header-option">
               <p className='line-1'>Returns </p>
                   <span className='line-2'>& Orders</span>
               </div>

               <div className="header-option">
               <p className='line-1'>your</p>
                   <span className='line-2'>Prime</span>
               </div>

            </div>


                 <div className="basket">
                    <span className='qty'>0</span>
                <ChildFriendlyIcon className='basket'/>
                 </div>

        </div>
    )
}
export default Header