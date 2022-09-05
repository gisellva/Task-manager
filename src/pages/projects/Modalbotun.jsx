import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Modalbotun() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleadd = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleadd}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add your new project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control  placeholder="enter the title" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control  placeholder="enter the description" />
       
      </Form.Group>
      <Form.Label>project</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="file" />
       
       
      </Form.Group>
      
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          save your new project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalbotun