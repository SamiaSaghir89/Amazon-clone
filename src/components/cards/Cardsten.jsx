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
    <Card style={{ width: '18rem' ,height:"440px" }}>
   
      <Card.Img variant="top" src="images/st1.webp" />
      <Card.Body>
       
        <Card.Text>
        Steve Madden Women's Howler Ankle Boot
         
        </Card.Text>
        
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
   <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem'}}>
   
      <Card.Img variant="top"  src="images/st3.webp" />
      <Card.Body>
       
        <Card.Text>
        Steve Madden Women's Amulet Ankle Boot
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem',height:"445px" }}>
   
      <Card.Img variant="top" src="images/st2.webp" />
      <Card.Body>
        
        <Card.Text>
        Steve Madden Women's Amulet Ankle Boot
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"445px" }}>
   
      <Card.Img variant="top"  src="images/st4.webp" />
      <Card.Body>
       
        <Card.Text>
        Timberland Women's Ankle Lace-up Boots
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