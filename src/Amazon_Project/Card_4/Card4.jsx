import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card4() {
  return (
    <Card style={{ width: '17rem' }}>
      <Card.Body>
        <Card.Text style={{ fontWeight: 'bold',fontSize: '20px' }}>
          Sign in for your best experience
        </Card.Text>
        <Button variant="warning" style={{ width: '13rem' }}>Sign In Securely</Button>
      </Card.Body>
    </Card>
  );
}

export default Card4;