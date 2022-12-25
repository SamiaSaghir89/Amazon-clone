import React from 'react'
import './style0.css';
import { NavLink } from 'react-router-dom';
function Orders() {
  return (
    <div class="mainbox">
      <center>
    <section class ="container1">
    <br />
    <br />
    <br />

    <br />
   <img src='images/crt.JPG' />

      
      
        <div id="box1">
            <p  id ="text3">Your order list is empty!<br></br>
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

export default Orders