import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert'
import UseAuth from '../../auth/UseAuth';
import { Form } from 'react-bootstrap';

function Modalimg({img, setimg,  closeimg, openimg}) {
   
  const {logout}=UseAuth();
  const handledelete=()=>{
     logout()
  };

  return (
    <>
       <Modal show={img} onHide={ closeimg}>
        <Modal.Header closeButton>
          <Modal.Title>change photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label >photo change</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
        <h2>previsualizacion</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ closeimg}>
           Cancel
          </Button>
          <Button variant="primary" onClick={closeimg}>
           update image
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modalimg