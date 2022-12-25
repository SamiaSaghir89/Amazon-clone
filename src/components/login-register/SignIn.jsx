import React, { useState } from 'react';
import './login-register.css';
import { NavLink } from 'react-router-dom';

const SignIn = () => {

  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: ""
  });

  function formUpdate(e) {
    const {name, value} = e.target;
    
    setSignInInfo(function() {
      return {
        ...signInInfo,
        [name]:value
      }
    })
  }

  


  return (
    <div className='signin'>
      <NavLink to='/' className='logo'>
        <img src='images/logo-dark.png' alt='logo' />
      </NavLink>

      
      <div className='form-details'>
        <h3>Sign-In</h3>
        <form >
          <label htmlFor='email'>Email</label>
          <input text='email' name='email' id='email' placeholder='Email Address'  required />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' placeholder='Password'   required />
          <button type='submit' id='submit'>Continue</button>
        </form>
      </div>

      <div className='new-to-amazon'>
        <p><span>New to Amazon?</span></p>
        <NavLink to='/register'>
          <button>Create your Amazon account</button>
        </NavLink>
      </div>
    </div>
  )

  }
export default SignIn;