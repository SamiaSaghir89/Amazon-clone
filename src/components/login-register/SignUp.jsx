import React, { useState } from 'react';

import CountryCode from './CountryCode';
import './login-register.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { NavLink } from 'react-router-dom';

const SignUp = () => {

  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  

    

  
  return (
    <div className='signin signup'>
      <NavLink to='/' className='logo'>
        <img src='images/logo-dark.png' alt='logo' />
      </NavLink>

    

      
   
      <div className='form-details'>
        <h3>Create Account</h3>
        <form >
          <label htmlFor='name'>Your name</label>
          <input type='text' name='name' id='name' placeholder='First and last name' 
           required />
          <label htmlFor='number'>Mobile number</label>
          <div className='mobile-number'>
            <CountryCode />
            <input type='text' name='number' id='number' placeholder='Mobile number'  required />
          </div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' placeholder='Email Address' required />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' placeholder='Password (At least 6 characters)' 
           required />
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm Password' 
            required />
          <button type='submit' id='submit'>Continue</button>
        </form>

        <div className='already-have-account'>
          <p>Already have an account? <NavLink to="/login">Sign in  </NavLink></p>
        </div>
      </div>
    </div>
  )

  }
export default SignUp;