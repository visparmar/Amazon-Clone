import React,{useState} from 'react';
import image from '../../assets/amazonLogin.png'
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import './Login.css'

const Login=()=>{
  const navigate=useNavigate();
  const [Email,setEmail]=useState('');
  const [password,setpassword]=useState('');
  // console.log(Email);
  // console.log(password);

  

  const signIn = e=>{
       e.preventDefault();// prevent refreshing...
       signInWithEmailAndPassword(auth, Email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
  })

       // Some fancy firebase stuff..............


  }

  
  const register = e=>{
    e.preventDefault();// prevent refreshing...


    createUserWithEmailAndPassword(auth, Email, password).then((userCredential) => {
    // Signed in 
    console.log(userCredential);
    if(userCredential){
      navigate("/");
    }
   
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message);
    // ..
  });
}

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
              <input type="text" value={Email} onChange={e=>setEmail(e.target.value)} />
          </div>
          <div className="password">
            <h5 className='password-text'>Password</h5>
            <input type="password"  value={password} onChange={k=>setpassword(k.target.value)}/>
          </div>
          
          
          <div className="login-button">
            <button type='sumit' onClick={signIn}>Continue</button>
          </div>

          <div className="sign-in-policy">
          <p>By signing-in you agree
             to the AMAZON FAKE CLONE
             Conditions of Use & Sale.
             Please see our Privacy Notice, 
             our Coolies Notice and our Interest-Based 
             Ads Notice.</p>
          </div>

          <div className="create-Account-button">
            <button onClick={register}>Create your Amazon Account</button>
          </div>
    </div>
</div>
);
}
export default Login;