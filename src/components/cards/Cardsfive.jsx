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
    <Card style={{ width: '18rem' }}>
   
      <Card.Img variant="top" src="images/four.jpg" />
      <Card.Body>
       
        <Card.Text>
        Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers
         
        </Card.Text>
        
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
   <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"375px"}}>
   
      <Card.Img variant="top" src="images/four1.jpg" />
      <Card.Body>
       
        <Card.Text>
        2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"375px"}}>
   
      <Card.Img variant="top" src="images/four2.jpg" />
      <Card.Body>
        
        <Card.Text>
        HP DeskJet 2755e Wireless Color All-in-One Printer with Bonus 6 Months Instant Ink with HP+Original HP 67XL Black High-yield Ink Cartridge | Works with HP 
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem',height:"375px" }}>
   
      <Card.Img variant="top" src="images/four3.webp" />
      <Card.Body>
       
        <Card.Text>
        SAMSUNG Galaxy Tab A7 Lite 8.7" 32GB WiFi Android Tablet w/ Long Lasting Battery, Compact, Slim Design, Sturdy Metal Frame, US
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