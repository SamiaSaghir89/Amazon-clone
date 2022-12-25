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
   
      <Card.Img variant="top" src="images/dreeone (1).jpg" />
      <Card.Body>
       
        <Card.Text>
        The Drop Women's Ana Silky V-Neck Midi Slip Dress
         
        </Card.Text>
        
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
   <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem'}}>
   
      <Card.Img variant="top" src="images/dreeone (2).jpg" />
      <Card.Body>
       
        <Card.Text>
        Calvin Klein womens Solid Sheath With Chiffon Bell Sleeves Dress
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' }}>
   
      <Card.Img variant="top" src="images/dreeone (3).jpg" />
      <Card.Body>
        
        <Card.Text>
        Norma Kamali Women's Halter Turtle Side Slit Gown
        </Card.Text>
        <a href='/login'>
        <Button variant="primary">Add To Cart</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='col-6 col-sm-4 col-xl-3'>
    <Card style={{ width: '18rem' }}>
   
      <Card.Img variant="top" src="images/dreeone (5).jpg" />
      <Card.Body>
       
        <Card.Text>
        Dress the Population Women's Audrey Spaghetti Strap Midi A-line 
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