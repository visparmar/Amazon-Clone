import React from 'react';
import image from '../../assets/amazonLogin.png'
import './Login.css'

const Login=()=>{
return(
<div className="main-container">
    <div className='upper-image'>
        <img src={image} alt='this is image'/>
    </div>
    <div className="Login-container">
        <div className="sign-in-container">
        <p className='sign-in'>Sign in</p>
        </div>
       
          <div className="Email">
              <h5 className="Email-text">Email</h5>
              <input type="text" />
          </div>
          <div className="password">
            <h5 className='password-text'>Password</h5>
            <input type="password" />
          </div>

          <div className="login-button">
            <button>Continue</button>
          </div>
    </div>
</div>
);
}
export default Login;