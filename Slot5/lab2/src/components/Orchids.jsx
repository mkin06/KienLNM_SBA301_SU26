import React, { useState } from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import { OrchidsData } from '../data/ListOfOrchids'
import Modal from 'react-bootstrap/Modal';
import OrchidModal from './Modal'
export default function Orchids() {
    const [show, setShow] = useState(false);
    const [selectedOrchid, setSelectedOrchid] = useState(null); 
    const handleClose = () => setShow(false);
    const handleShow = (orchid) => {
        setSelectedOrchid(orchid); 
        setShow(true); 
    }
    return (
        <Container className="py-4">
            <Row className="g-4 mt-4">
                {OrchidsData.map((orchid) => (
                    <Col md={3} key={orchid.id}>
                        <Card className="flower-card h-100 d-flex flex-column">
                            <Card.Img variant="top" src={orchid.image} alt={orchid.orchidName} className="orchid-image"/>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="flower-title">{orchid.orchidName}</Card.Title>
                                <Card.Text className="flower-category">
                                    {orchid.category}
                                </Card.Text>
                                <div className="mt-auto mt-3">
                                    <Button variant="primary" onClick={() => handleShow(orchid)}>
                                        Detail
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
                <OrchidModal show={show} onHide={handleClose} orchid={selectedOrchid} />
        </Container>
    )
}
