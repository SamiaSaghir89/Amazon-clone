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
    <Card style={{ width: '18rem' , height:"470px" }}>
   
      <Card.Img variant="top" src="images/toy2.webp" />
      <Card.Body>
       
        <Card.Text>
        LANEIGE Lip Sleeping Mask: Nourish & Hydrate with Vitamin C, Antioxidants, 0.7 oz.
         
        </Card.Text>
        
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
   <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem', height:"470px"}}>
   
      <Card.Img variant="top"  src="images/toy3.webp" />
      <Card.Body>
       
        <Card.Text>
        CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid 
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem',height:"470px" }}>
   
      <Card.Img variant="top" src="images/toy4.webp" />
      <Card.Body>
        
        <Card.Text>
        Dove Deep Moisture Body Wash with Pump For Dry Skin Moisturizing Body Wash Cleanser 
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem',height:"470px" }}>
   
      <Card.Img variant="top"  src="images/toy6.webp" />
      <Card.Body>
       
        <Card.Text>
        CeraVe AM Facial Moisturizing Lotion SPF 30 | 
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  );
}

export default BasicExample;