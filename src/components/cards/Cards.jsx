import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
function BasicExample() {
  
 
  return (
    <div className='cards-container container-fluid'>
    <div className='row cards'>
    <h4>RESULTS</h4>
    <p>Price and other details may vary based on product size and color.</p>
     <br/>
     <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' , height:"450px" }}>
   
      <Card.Img variant="top" src="images/prod1.webp" />
      <Card.Body>
       
        <Card.Text>
        Dove Beauty Bar Gentle Skin Cleanser Moisturizing for Gentle Soft Skin Care Original Made With 1/4 Moisturizing
         
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
   <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' , height:"450px"}}>
   
      <Card.Img variant="top" src="images/prod2.webp" />
      <Card.Body>
       
        <Card.Text>
        Softsoap Liquid Hand Soap, Fresh Breeze - 7.5 Fluid Ounce (Pack of 6)
        </Card.Text>
        
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
        
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' , height:"450px" }}>
   
      <Card.Img variant="top" src="images/prod3.webp" />
      <Card.Body>
        
        <Card.Text>
        AquaSonic Black Series Ultra Whitening Toothbrush – ADA Accepted Electric Toothbrush 
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '16rem' , height:"450px"}}>
   
      <Card.Img variant="top" src="images/prod4.webp" />
      <Card.Body>
       
        <Card.Text>
        Dove Men+Care Body Wash for Men's Skin Care Extra Fresh Effectively
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