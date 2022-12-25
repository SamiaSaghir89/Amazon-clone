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
   
      <Card.Img variant="top" src="images/li1.webp" />
      <Card.Body>
       
        <Card.Text>
        TP-Link Tapo RGBWIC Smart LED Light Strip 16.4Ft, 1000 Lumens, 16M Dimmable Colors, 50 Color Zones, Works w/ Apple
         
        </Card.Text>
        
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
   <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"465px"}}>
   
      <Card.Img variant="top"  src="images/li2.webp" />
      <Card.Body>
       
        <Card.Text>
        Wyze Light Strip, 16.4ft WiFi LED Strip Lights, 16 Million Colors RGB with App Control and Sync to Music for Home, Kitchen, TV
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem',height:"465px" }}>
   
      <Card.Img variant="top" src="images/li3.webp" />
      <Card.Body>
        
        <Card.Text>
        TP-Link Tapo Smart LED Light Strip, 50 Color Zones RGBIC, Sync-to-Sound, 16.4ft Wi-Fi LED Strip Works w/ Alexa & Google, IP44 PU Coating
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"465px" }}>
   
      <Card.Img variant="top"  src="images/li4.webp" />
      <Card.Body>
       
        <Card.Text>
        GE CYNC Smart LED Light Strip, Color Changing Lights, Bluetooth and Wi-Fi Lights, Works with Alexa 
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