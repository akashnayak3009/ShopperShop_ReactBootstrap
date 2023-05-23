import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';
import  '../Card_2/Card2.css';
import c5 from '../photo/c5.JPG';
import c6 from '../photo/c6.JPG';
import c7 from '../photo/c7.JPG';
import c8 from '../photo/c8.JPG';

const Card2=()=> {
  return (
    <Card style={{ width: '21rem' }}>
    
      <Card.Body>
        <Card.Title>Amazon Brands & More</Card.Title>
      <Row>
        <Col>
        <Card.Img variant="top" src={c5} />
        <Card.Text>
          Starting $169 | Choopers & more
        </Card.Text>
        <Card.Img variant="top" src={c6} />
        <Card.Text>
        Starting $169 | String lights & more
        </Card.Text>
        </Col>
        <Col>
        <Card.Img variant="top" src={c7} />
        <Card.Text>
        Starting $169 | Jars, containers & more
        </Card.Text>
        <Card.Img variant="top" src={c8} />
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

export default Card2;