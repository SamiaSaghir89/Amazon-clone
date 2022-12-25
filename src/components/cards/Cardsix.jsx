import React from 'react'

function Cardsix() {
    
        return (
          <div className='product-section'>
            <div className='left'>
              <img src="images/kindel.jpg"></img>
            </div>
            <div className='middle'>
              <div className='product-details'>
                <h4>Kindle E readers</h4>
                <div className='divider'> </div>
                <div className='price'>
                -12%
                  <span>
                  ₹21,90000
                    <span className='sup'> $</span>
                  
                    <span className='sup'>00</span>
                  </span>
                </div>
                <div className='mrp'>M.R.P.: <strike>24,900.00</strike></div>
                <p className='taxes'>Inclusive of all taxes</p>
              </div>
              <div className='about-product'>
                <h6>About this item</h6>
                <ul>
                 <li>Active Noise Cancellation blocks outside noise, so you can immerse yourself in music</li>
                 <li>Transparency mode for hearing and interacting with the world around you</li>
                 <li>Spatial audio with dynamic head tracking places sound all around you</li>
              
                </ul>
              </div>
            </div>
            <div className='right'>
              <h3><span><span className='sup'>$</span>21,90000<span className='sup'>00</span></span></h3>
              <p><span>FREE delivery:</span>Saturday, 29 October</p>
              <button id="addtocart-btn">Add to Cart</button>
              <button  >Buy Now</button>
            </div>
          </div>
        )
     
}

export default Cardsix