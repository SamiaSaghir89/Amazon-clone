import React from 'react';

const BottomFooter = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='bottom-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-2 col-md-4 col-6'>
          <div className='title'>
                Amazon Music
              </div>
              <div className='desc'>
                Stream millions<br></br>
                of songs
              </div>
              <br />
              <div className='title'>
                Amazon Business
              </div>
              <div className='desc'>
               Everything For<br></br>
                Your Business
              </div>
              <br />
              <div className='title'>
                Box Office Mojo
              </div>
              <div className='desc'>
                Find Movie<br></br>
               Box Office Data

              </div>
              <br />
              <div className='title'>
                Kindle Direct Publishing
              </div>
              <div className='desc'>
                Indie Digital & Print<br></br>
                Publishing<br></br>
                Made Easy
              </div>
              <br />
            {/* <a href="https://www.abebooks.com/">
              <div className='title'>
                AbeBooks
              </div>
              <div className='desc'>
                Books, art<br></br>
                & collectibles
              </div>
            </a> */}

          </div>
        
          <div className='col-xl-2 col-md-4 col-6'>
            <a href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter">
              <div className='title'>
              Amazon Advertising
              </div>
              <div className='desc'>
              Find, attract, and<br></br>
              engage customers
                
              </div>
            </a>
            <br />
            <div className='title'>
               Amazon Global
              </div>
              <div className='desc'>
               Ship Orders<br></br>
               Internationally
              </div>
              <br />
              <div className='title'>
              ComiXology
              </div>
              <div className='desc'>
              Thousands of<br></br>
              Digital Comics
              
              </div>
              <br />
              <div className='title'>
              Prime Video Direct
              </div>
              <div className='desc'>
              Video Distribution<br></br>
              Made Easy
              
              </div>
              <br />
              <div className='title'>
              Blink
              </div>
              <div className='desc'>
              Smart Security<br></br>
for Every Home
              
              
              </div>
              <br />
              
          </div>

          <div className='col-xl-2 col-md-4 col-6'>
            <a href="https://www.audible.in/">
              <div className='title'>
              Amazon Drive
              </div>
              <div className='desc'>
              Cloud storage<br></br>
from Amazon
               
              </div>
            </a>
            <br />
            <div className='title'>
            Home Services
              </div>
              <div className='desc'>
              Experienced<br></br>
               Pros<br></br>
               Happiness<br></br>
                Guarantee

              
              
              </div>
              <br />
              <div className='title'>
            	DPReview
              </div>
              <div className='desc'>
              Digital<br></br>
Photography

              
              
              </div>
              <br />
              <div className='title'>
              Shopbop
              </div>
              <div className='desc'>
              Designer<br></br>
Fashion Brands

              
              
              </div>
              <br />
              <div className='title'>
              Neighbors App
              </div>
              <div className='desc'>
              Real-Time Crime<br></br>
& Safety Alerts

              </div>
              <br />
          </div>
          <div className='col-xl-2 col-md-4 col-6'>
            <a href="https://www.dpreview.com/">
              <div className='title'>
              6pm
              </div>
              <div className='desc'>
              Score deals<br />
on fashion brands
              </div>
            </a>
            <br />
            <div className='title'>
            Amazon Ignite
              </div>
              <div className='desc'>
              Sell your original<br></br>
Digital Educational<br></br>
Resources
</div>
              <br />
<div className='title'>
Fabric
              </div>
              <div className='desc'>
              Sewing, Quilting<br></br>
& Knitting
</div>
              <br />
<div className='title'>
Woot!
              </div>
              <div className='desc'>
              Deals and<br></br>
Shenanigans
  
              </div>
              <br />
              <div className='title'>
              Amazon Subscription<br></br>
               Boxes
              </div>
              <div className='desc'>
              Top subscription boxes – <br></br>
              right to your door

  
              </div>
              <br />
          </div>
          <div className='col-xl-2 col-md-4 col-6'>
            <a href="https://www.imdb.com/">
              <div className='title'>
              AbeBooks
              </div>
              <div className='desc'>
              Books, art<br></br>
& collectibles
               
              </div>
            </a>
            <br />
            <div className='title'>
            Amazon Web <br></br>
            Services
              </div>
              <div className='desc'>
              Scalable Cloud<br></br>
Computing Services
  
              </div>
              <br />
              <div className='title'>
              Goodreads
              </div>
              <div className='desc'>
              Book reviews<br></br>
& recommendations
  
              </div>
              <br />
              <div className='title'>
              Zappos
              </div>
              <div className='desc'>
              Shoes &<br></br>
Clothing
  
              </div>
              <br />
              <div className='title'>
              PillPack
              </div>
              <div className='desc'>
              Pharmacy Simplified	
  
              </div>
              <br />
          </div>
          <div className='col-xl-2 col-md-4 col-6'>
            <a href="https://www.shopbop.com/">
              <div className='title'>
              ACX
              </div>
              <div className='desc'>
              Audiobook <br />
              Publishing<br />
Made Easy
              </div>
            </a>
         
         <br />
         <div className='title'>
         Audible
              </div>
              <div className='desc'>
              Listen to Books &<br />
               Original<br />
Audio <br />
Performances
  
              </div>
              <br />
              <div className='title'>
              IMDb
              </div>
              <div className='desc'>
              Movies, TV <br />
& Celebrities
  
              </div>
              <br />
              <div className='title'>
              Ring
              </div>
              <div className='desc'>
              Smart Home<br />
Security Systems
  
              </div>
              <br />
        </div>
        </div>

        <div className='bottom-footer-bottom'>
          <a href=''>Conditions of Use  Sale</a>
          <a href=''>Privacy Notice</a>
          <a href=''>Interest-Based Ads</a><br />
          <span>© 1996-{year}, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  )
}

export default BottomFooter;