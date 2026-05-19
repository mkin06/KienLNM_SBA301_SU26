import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function OrchidModal({ show, onHide, orchid }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{orchid ? orchid.orchidName : ''}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {orchid ? (
          <div>
            <img
              className="orchid-modal-image"
              src={orchid.image}
              alt={orchid.orchidName}
            />
            <p>{orchid.description}</p>
          </div>
        ) : (
          <p>Loading details...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}