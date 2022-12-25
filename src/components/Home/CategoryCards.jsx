import React from 'react';

import Card from './Card';
import MultiCard from './MultiCard';
import './home.css';

import Slider from './Slider';
import Sliderone from './Sliderone';
import Slidertwo from './Slidertwo';
import Sliderthree from './Sliderthree';
import Sliderfour from './Sliderfour';
import Sliderfive from './Sliderfive';
import Sliderlast from './Sliderlast';

function CategoryCards () {
  return (
    <div className='cards-section'>
      <div className='cards-container container-fluid'>
        <div className='row cards'>
        
          <div className='col-6 col-sm-4 col-xl-3 multi-card'>
            <MultiCard  name="Gaming accessories"  img="samia-1" e="Headset" h="Keyborads" g="Computer Mouse" f="Chairs" bottom="See more" />
           </div>
          <div className='col-6 col-sm-4 col-xl-3 multi-card'>
            <MultiCard name="Shop by Category" img="computer-1" e="Computer & Accessories" f="Toys & Games" g="Baby" h="Video Games" bottom="See more" />
          </div>
          
          <div className='col-6 col-sm-4 col-xl-3'>
          <a href="/cards" className='style'>
            <Card name="Health and Personal Care" img="category-2" src="/cards" bottom="Shop now" />
            </a>
          </div>
          
          
          <div className='col-6 col-sm-4 col-xl-3'>
          <a  href="/Cardsfive" className='style'>
            <Card name="Electronics" img="elec" src="/cards" bottom="Shop now" />
            </a>
          </div>
         
       
          
        
          <div className='col-6 col-sm-4 col-xl-3' >
          <a  href="/Cardtwo" className='style'>
            <Card  name="Easy returns" img="category-9"  bottom="Learn more"  />
            </a>
            </div>
            <div className='col-6 col-sm-4 col-xl-3'>
            <a  href="/Cardsthree" className='style'>
            <Card name="Dresses" img="dress1" bottom="Shop now" />
            </a>
          </div>
            
         
          <div className='col-6 col-sm-4 col-xl-3'>
          <a  href="http://localhost:3000/Cardsfour" className='style'>
            <Card name="Toys Under $30" img="baby2" bottom="Shop now" />
            </a>
          </div>
         
          <div className='col-6 col-sm-4 col-xl-3'>
          <a  href="/Cardsfive" className='style'>
            <Card name="Computers & Accessories" img="category-5" bottom="Shop now" />
            </a>
          </div>
          
         
         
        
        
        </div>
      </div>
      <Slider />
       <Sliderone />
        
        <div className='cards-section'>
      <div className='cards-container container-fluid'>
        <div className='row cards'>
        <div className='col-6 col-sm-5 col-xl-3'>
        <a  href="/Cardsfour" className='style'>
            <Card name="New arrivals in Toys" img="new1" bottom="Shop now" />
            </a>
          </div>
          <div className='col-6 col-sm-5 col-xl-3'>
          <a  href="/Cardsix" className='style'>
            <Card name="Kindle E readers" img="kindel" bottom="Shop now" />
            </a>
          </div>
          <div className='col-6 col-sm-5 col-xl-3'>
          <a  href="/Cardsev" className='style'>
            <Card name="Trackers & smartwatches" img="cc" bottom="Shop now" />
            </a>
          </div>
          
          <div className='col-6 col-sm-5 col-xl-3'>
          <a  href="/Cardsei" className='style'>
            <Card name="Home & Kitchen Under " img="home1" bottom="Shop now" />
            </a>
          </div>
         
    </div>
    </div>
      </div>
      <Sliderthree />
      <Sliderfour />
      <div className='cards-section'>
      <div className='cards-container container-fluid'>
        <div className='row cards'>
        <div className='col-6 col-sm-5 col-xl-3'>
        <a  href="/Cardsni" className='style'>
            <Card name="Decorate for Halloween" img="hellowin" bottom="See more" />
            </a>
          </div>
          <div className='col-6 col-sm-5 col-xl-3'>
          <a  href="/Cardsten" className='style'>
            <Card name="Statement boots for you" img="sa" bottom="Browse more" />
            </a>
          </div>
          <div className='col-6 col-sm-5 col-xl-3'>
          <a  href="/Cardsthree" className='style'>
            <Card name="Fashion favorites for Fall" img="shirts" bottom="Discover your style" />
            </a>
          </div>
          <div className='col-6 col-sm-5 col-xl-3'>
          <a  href="/Cardsel" className='style'>
            <Card name="Shop Pet supplies" img="dog" bottom="See more" />
            </a>
          </div>
   
    </div>
    </div>
      </div>

      <Slidertwo  />
        <Sliderfive/>

        <div className='cards-section'>
      <div className='cards-container container-fluid'>
        <div className='row cards'>
        <div className='col-6 col-sm-5 col-xl-3'>
           <a href="/Cardsei" className='style'>
            <Card name="Makeup " img="category-6" bottom="Shop now" />
            </a>
          </div>
           <div className='col-6 col-sm-5 col-xl-3'>
           <a  href="/Cardstw" className='style'>
            <Card name="For your Fitness Needs" img="fitness" bottom="Shop now" />
            </a>
          </div>
          <div className='col-6 col-sm-5 col-xl-3'>
          <a  href="/Cardslight" className='style'>
            <Card name="Create with strip lights" img="light" bottom="Shop now" />
            </a>
          </div>
          <div className='col-6 col-sm-5 col-xl-3'>
          <a  href="/Cardsfive" className='style'>
            <Card name="Shop Laptops & Tablets" img="laptops" bottom="See more" />
            </a>
          </div>
           </div>
    </div>
      </div>
      <Sliderlast />
      
      </div>
  )
}

export default CategoryCards;