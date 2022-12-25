import React, {  useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
// import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';

import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Header =()=> {
 
 
  const [loggedIn, setLoggedIn] = useState(false);
  

  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className='header'>
    
<img className='header__logo' src='pics/amazonlogo.png' />


<div className="header__delivery">
                <div className="header__deliveryLogo" id='hh'>
                <div className='header__option' id='hh' >
<span className='header__optionLineOne'>
  Deliver To

</span>
<span className='header__optionLineTwo'>
   Pakistan
</span>
</div>
                    
                </div>
               

            </div>
<div className=' dropdown header__search' >

<button class="all">
<ArrowDropDownIcon   />
          
          All 
         

          </button>
        
        
         
          
      
        
        
        <div className="search">
        
          <input type="text" name="search" className="searchbar"  ></input>
          <button className="search-icon">
            <SearchIcon />
            
          </button>
         
        </div>
        
</div>
<div className='header__option'>
<span  className='header__optionLineOne'>
   <img className='img' src = "images/flag.jpg" /> 
  
</span>


</div>

<div className='header__nav '>
<Link to={ loggedIn ? "/" : "/login" } className="login style">
        <div   className='header__option '>
<span  className='header__optionLineOne'>
    Hello Sign In 
  
  
           
          
</span>
<span  className='header__optionLineTwo'>
    Account & Lists 
</span>

</div>
</Link>



<NavLink to ="/orders" className='style'>
<div className='header__option'>

<span className='header__optionLineOne'>
    Returns
</span>
<span className='header__optionLineTwo' >
 & Orders
</span>

</div>
</NavLink>
<NavLink to ="/cart" className='style'>
<div className='header__option'>


<span className='header__optionLineOne'>
 Your
</span>
<span className='header__optionLineTwo' >
 Cart
</span>
</div>
</NavLink>
<div className='header__optionBasket'>

<AddShoppingCartOutlinedIcon />
<span  className='header__optionLineTwo
header__basketCount'>0</span>

</div>

{/* <div className='nav-cart-text-container
nav-progressive-attribute'>
<span className='nav-cart-count'>0</span>
<span className='nav-cart-icon nav-sprite'></span>

</div> */}


    </div>
    </div>
  )
}

export default Header