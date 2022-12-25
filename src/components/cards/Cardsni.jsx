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
   
      <Card.Img variant="top" src="images/hl1.webp" />
      <Card.Body>
       
        <Card.Text>
        Halloween Decorations Indoor Set, Halloween Decor Bundle for Home, Party, Kitchen, Spider Web 
         
        </Card.Text>
        
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
   <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"465px"}}>
   
      <Card.Img variant="top"  src="images/hl2.webp" />
      <Card.Body>
       
        <Card.Text>
        49PCS Halloween Party Decorations, Disposable Halloween Party Dinnerware Set Include Paper Plate
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem',height:"465px" }}>
   
      <Card.Img variant="top" src="images/hl3.webp" />
      <Card.Body>
        
        <Card.Text>
        Halloween Party Hanging Decorations Kit- Halloween Hanging Swirl, Halloween Banner, Halloween Balloons
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"465px" }}>
   
      <Card.Img variant="top"  src="images/hl4.webp" />
      <Card.Body>
       
        <Card.Text>
        FUN LITTLE TOYS 3 PCs Halloween Hanging Ghost with Light Window Decoration, Outdoor Tree Wall Graveyard
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