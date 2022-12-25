import React from 'react';


import { NavLink } from 'react-router-dom';

const SignIn = () => {

 
  

 
  return (
    <>
      
     
        <div className='footer-signin'>
          <hr />
          <div className='signin-wrapper'>
            <p>See personalized recommendations</p>
            <NavLink to='/login'>
              <button>Sign in</button>
            </NavLink>
            
            <p>New customer? <NavLink to='/register'>Start here.</NavLink></p>
          </div>
          <hr />
        </div> 
        
      
    </>
  )
}

export default SignIn;