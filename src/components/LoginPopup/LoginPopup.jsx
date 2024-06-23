import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({ onSetShowLogin }) => {

  const [currState, setCurrState] = useState('Sign Up');

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>onSetShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Sign Up' && <input type="text" placeholder="Your Name" required/>}
          <input type="email" placeholder="Your Email" required/>
          <input type="password" placeholder="Password" required/>
          <button>{currState === 'Sign Up' ? "Create Account" : "Login"}</button>
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the Terms of Service and Privacy Policy</p>
        </div>
        {currState === 'Sign Up' 
        ?<p>Already have an account? <span onClick={()=>setCurrState('Login')}>Login Here</span></p>
        :<p>Don't have an account?   <span onClick={()=>setCurrState('Sign Up')}>Create Here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup;