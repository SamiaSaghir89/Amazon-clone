
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
   
      <Card.Img variant="top" src="images/p1.webp" />
      <Card.Body>
       
        <Card.Text>
        WALNUTA Cats Tree Cats Climbing Frame Cats Cats Litter Tree One Tongtianzhu Climbing Frame House
         
        </Card.Text>
        
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
   <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"465px"}}>
   
      <Card.Img variant="top"  src="images/p2.webp" />
      <Card.Body>
       
        <Card.Text>
        WALNUTA Cat Scratcher Cats Tree Tower Scratching Cats Tree Cute Carrot Cats Climbing Post Funny Cats Grinding
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem',height:"465px" }}>
   
      <Card.Img variant="top" src="images/p3.webp" />
      <Card.Body>
        
        <Card.Text>
        WALNUTA Cherry Cats Climbing Frame Scratcher Cats Tree Cats Toy Grinding Claw Pet Supplies
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' ,height:"465px" }}>
   
      <Card.Img variant="top"  src="images/p4.jpg" />
      <Card.Body>
       
        <Card.Text>
        Sisal Cat Scratching Ball for Pet Kitten, Wear Resistant Interactive Cat Scratcher Toy
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