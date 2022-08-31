import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';


function AutoLayoutSizingExample() {
  return (
    <div className='cards' >
    <Container>
      <Row>
      
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/indian-food-arrangement-with-sari-top-view_23-2148747619.jpg?w=740" />
      <Card.Body>
        <Card.Title>Blog 1</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/fried-rice-with-tomato-mushroom_66899-795.jpg?w=740" />
      <Card.Body>
        <Card.Title>Blog 2</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/indian-food-arrangement-with-sari-top-view_23-2148747619.jpg?w=740" />
      <Card.Body>
        <Card.Title>Blog 3</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      .
      <Row>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/fried-rice-with-tomato-mushroom_66899-795.jpg?w=740" />
      <Card.Body>
        <Card.Title>Blog 4</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/indian-food-arrangement-with-sari-top-view_23-2148747619.jpg?w=740" />
      <Card.Body>
        <Card.Title>Blog 5</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card></Col>
    <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/fried-rice-with-tomato-mushroom_66899-795.jpg?w=740" />
      <Card.Body>
        <Card.Title>Blog 6</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card></Col>
        
        
      </Row>
    </Container>
 
    </div>
  );
}

export default AutoLayoutSizingExample;