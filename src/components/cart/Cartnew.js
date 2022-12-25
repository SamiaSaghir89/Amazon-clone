import React from 'react'
import './style0.css';
import { NavLink } from 'react-router-dom';
function Cartnew() {
  return (
    <div class="mainbox">
      <center>
    <section class ="container1">
    <br />
    <br />
    <br />

    <br />
   <img src='images/shop.JPG' />

      
      
        <div id="box1">
            <p  id ="text3">Your cart list is empty!<br></br>
Mabye it's time to order something ...
<br />
<br />
<br />


<NavLink to='/'>
<button className='butt'>Back To Home</button>
</NavLink>
   </p>
    
        </div>
       
        </section>
        </center>
        </div>


           
  )
}

export default Cartnew