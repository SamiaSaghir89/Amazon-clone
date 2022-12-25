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
   
      <Card.Img variant="top" src="images/ft1.webp" />
      <Card.Body>
       
        <Card.Text>
        SOLE Fitness E55  Indoor Elliptical, Home and Gym Exercise 
        </Card.Text>
        
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
   <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"465px"}}>
   
      <Card.Img variant="top"  src="images/ft2.webp" />
      <Card.Body>
       
        <Card.Text>
        Body-Solid EXM3000LPS Multi-Station Selectorized Gym for Light Commercial and Home Gym
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem',height:"465px" }}>
   
      <Card.Img variant="top" src="images/ft3.webp" />
      <Card.Body>
        
        <Card.Text>
        Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm  Gym Equipment for Work
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"465px" }}>
   
      <Card.Img variant="top"  src="images/ft4.webp" />
      <Card.Body>
       
        <Card.Text>
        Square36 Thick Large Exercise Mat 6'x6' Workout Floor Mats for Home Gym Fitness With or Without Shoes. Perfect for Jump Rope, Exercise
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