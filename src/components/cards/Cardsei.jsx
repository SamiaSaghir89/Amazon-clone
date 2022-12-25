import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
 
  return (
    <div className='cards-container container-fluid'>
    <div className='row cards'>
    <h4>RESULTS</h4>
    <p>Price and other details may vary based on product size and color.</p>
     <br/>
     <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"465px"}}>
   
      <Card.Img variant="top" src="images/h1.webp" />
      <Card.Body>
       
        <Card.Text>
        Febreze Plug in Air Fresheners, Ocean Scent, Odor Eliminator for Strong Odors, 1 Warmer 
         
        </Card.Text>
        
        <a href='/login'>
        <Button variant="primary" className='but'>Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
   <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"465px"}}>
   
      <Card.Img variant="top"  src="images/h2.webp" />
      <Card.Body>
       
        <Card.Text>
        Febreze Plug in Air Fresheners, Unstopables Fresh Scent, Odor Eliminator for Strong Odor
        </Card.Text>
        <a href='/login'>
        <Button variant="primary" className='but'>Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem',height:"465px" }}>
   
      <Card.Img variant="top" src="images/h3.webp" />
      <Card.Body>
        
        <Card.Text>
        Air Wick Essential Mist, Essential Oil Diffuser, Diffuser + 1 Refill,Lavender
        </Card.Text>
        <a href='/login'>
        <Button variant="primary" className='but'>Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"465px" }}>
   
      <Card.Img variant="top"  src="images/h4.webp" />
      <Card.Body>
       
        <Card.Text>
        Febreze Small Spaces, Plug in Air Freshener Alternative for Home, 
        </Card.Text>
        <a href='/login'>
        <Button variant="primary" className='but'>Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  );
}

export default BasicExample;