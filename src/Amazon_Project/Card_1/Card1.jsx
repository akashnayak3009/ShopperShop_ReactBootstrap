import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';
import  '../Card_1/Card1.css';
import c1 from '../photo/c1.JPG';
import c2 from '../photo/c2.JPG';
import c3 from '../photo/c3.JPG';
import c4 from '../photo/c4.JPG';


const Card1=()=> {
  return (
    <Card style={{ width: '21rem' }}>
    
      <Card.Body>
        <Card.Title>Amazon Brands & More</Card.Title>
      <Row>
        <Col>
        <Card.Img variant="top" src={c1} />
        <Card.Text>
          Starting $169 | Choopers & more
        </Card.Text>
        <Card.Img variant="top" src={c2} />
        <Card.Text>
        Starting $169 | String lights & more
        </Card.Text>
        </Col>
        <Col>
        <Card.Img variant="top" src={c3} />
        <Card.Text>
        Starting $169 | Jars, containers & more
        </Card.Text>
        <Card.Img variant="top" src={c4} />
        <Card.Text>
        Starting $169 | Wall stickers & more
        </Card.Text>
        </Col>
      </Row>
        <Card.Link href="#" id="cardLink" >Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Card1;