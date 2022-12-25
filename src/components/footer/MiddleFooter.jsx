import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import $ from 'jquery';
import logo from './logo.png';

function MiddleFooter  () {

  
  return (
    <div className='middle-footer'>

      <div className='middle-footer-top'>
        <div className='row'>
          <div className='col-6 col-xl-3'>
            <h6>Get to Know Us</h6>
            <p><a href="https://www.amazon.jobs/en/">Careers</a></p>
            <p><a href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer">Blog</a></p>
            <p><a href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer">About Amazon</a></p>
            <p><a href="https://ir.aboutamazon.com/overview/default.aspx">Investor Relations</a></p>
            <p><a href="">Amazon Devices</a></p>
            <p><a href="https://www.amazon.science/">Amazon Science</a></p>
           
          </div>
          <div className='col-6 col-xl-3'>
            <h6>Make Money with Us</h6>
            <p><a href="">Sell products on Amazon</a></p>
            <p><a href="">Sell on Amazon Business</a></p>
            <p><a href="">Sell apps on Amazon</a></p>
            <p><a href="">Become an Affiliate</a></p>
            <p><a href="">Advertise Your Products</a></p>
            <p><a href="">Self-Publish with Us</a></p>
            <p><a href="">Host an Amazon Hub</a></p>
          </div>
          {/* <div className='col-6 col-xl-3'>
            <h6>Connect with Us</h6>
            <p><a href="https://www.facebook.com/AmazonIN">Facebook</a></p>
            <p><a href="https://twitter.com/AmazonIN">Twitter</a></p>
            <p><a href="https://www.instagram.com/amazondotin/">Instagram</a></p>
          </div> */}
          <div className='col-6 col-xl-3'>
            <h6>Amazon Payment Products</h6>
            <p><a href="">Amazon Business Card</a></p>
            <p><a href="">Shop with Points</a></p>
            <p><a href="">Reload Your Balance</a></p>
            <p><a href="">Amazon Currency Converter</a></p>
            
          </div>
          <div className='col-6 col-xl-3'>
            <h6>Let Us Help You</h6>
            <p><a href="">Amazon and COVID-19</a></p>
            <p><a href="">Your Account</a></p>
            <p><a href="">Your Orders</a></p>
            <p><a href="">Shipping Rates & Policies</a></p>
            <p><a href="">Returns & Replacements</a></p>
            <p><a href="">Manage Your Content and Devices</a></p>

            <p><a href="">Amazon Assistant </a></p>
            <p><a href="">Help</a></p>
          </div>
        </div>
      </div>

      <div className='middle-footer-bottom' >
        <div className='logo-language'>
          <div className='footer-logo'>
            <a href="">
              <img src={logo} />
            </a>
          </div>
          <div className='language-dropdown' >
         
            <button>
            
              <LanguageIcon id="language-icon" />
              English
              
            </button>
            
         
            
           
            
           
            <div className="language-dropdown-content">
            
              <div className='lang-name'>
                <input type='radio' name='language' id="english" value='EN' defaultChecked ></input>
                <label htmlFor="english">English - EN</label>
              </div>
              <div className='dropdown-divider'></div>
              <div className='lang-name'>
                <input type='radio' name='language' id='x' value='HI'></input>
                <label htmlFor="x">हिन्दी - HI</label>
              </div>
              <div className='lang-name'>
                <input type='radio' name='language' id='y' value='TA'></input>
                <label htmlFor="y">தமிழ் - TA</label>
              </div>
              <div className='lang-name'>
                <input type='radio' name='language' id='z' value='KN'></input>
                <label htmlFor="z">ಕನ್ನಡ - KN</label>
              </div>
              <div className='lang-name'>
                <input type='radio' name='language' id='z' value='BN'></input>
                <label htmlFor="z">বাংলা - BN</label>
              </div>
              <div className='lang-name'>
                <input type='radio' name='language' id='z' value='MR'></input>
                <label htmlFor="z">मराठी - MR</label>
              </div> 
            </div>
           
          </div>
          <div className='language-dropdown'  >
         
            <button style={{  flexDirection: "row" ,marginLeft: 10, justifyContent: 'space-evenly'}}>
            
            <span>$</span> USD - U.S Dollar
              
            </button>
            
         
        
        </div>
        <div className='language-dropdown'  >
         
         <button style={{  flexDirection: "row" ,marginLeft: 10, justifyContent: 'space-evenly'}}>
         
         <img
              id="language-icon"
              src='images/flag.jpg'
              alt='Flag'
            />
            United States
           
         </button>
         
      
     
     </div>
        </div>
       
       
        
      </div>

    </div>
  )
}

export default MiddleFooter;