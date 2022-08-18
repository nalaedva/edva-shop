import './ItemListContainer'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ItemListContainer = ({id, titulo, precio, categoria, img}) => {
    return (
      
        <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
       
    <Card  className={`ItemListContainer`} style={{ width: '18rem' }}>
         <Card.Img variant="top" src={`/products/${img}`} alt="Mi producto de prueba" />
        <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
            <p>${precio}</p>
            </Card.Text>
            <Button variant="primary" to={`/${categoria}/${id}`}>Ver detalle</Button>
      </Card.Body>
    </Card>

    </Col>
        
        ))}
        </Row>
    );
}

export default ItemListContainer;