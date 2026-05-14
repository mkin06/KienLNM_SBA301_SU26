import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function MyProfile({ flower }) {

    return (
        <Card className="flower-card h-100">
        <Card.Img
            variant="top"
            src={flower.avatar}
            alt={flower.name}
            className="flower-image"
        />
        <Card.Body className="text-start">
            <Card.Title className="flower-title">{flower.name}</Card.Title>
            <Card.Text className="flower-category">{flower.category}</Card.Text>
            <Button variant="primary" size="sm" className="align-self-start">Detail</Button>
        </Card.Body>
        </Card>
    )
}

export default MyProfile