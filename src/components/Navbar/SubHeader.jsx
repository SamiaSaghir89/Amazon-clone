
import './SubHeader.css';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';





function SubHeader() {
 

 
  return (
    <div className="sub-nav">

      <div className="left">
      
        <a href='' className="left-item all "  >
        
          <MenuIcon  id="hamburger" /> All
        </a>
        
    
       
        <a href='' className="left-item">
          Today's Deals
        </a>
        <a href='' className="left-item">
          Customer Services
        </a>
        
        <a href='' className="left-item">
          Registry
        </a>
        <a href='' className="left-item">
         Gift Cards
        </a>
        <a href='' className="left-item">
         Sell
        </a>
      
      </div>

      

    </div>
  )
}

export default SubHeader