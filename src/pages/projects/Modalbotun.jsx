import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import UseAuth from '../../auth/UseAuth';

function Modalbotun() {
  
  const [show, setShow] = useState(false);
  const {  addproject}=UseAuth();
  const [newpr, setnewpr] = useState("")
  const handleClose = () => setShow(false);
  const handleadd = () => setShow(true);
  const text=(event)=>{setnewpr(event.target.value)}
  const handlesumbit =()=>{addproject(newpr),handleClose()}
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
        <Form.Control  placeholder="enter the title"  onChange={text}  />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control  placeholder="enter the description"/>
       
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
          <Button variant="primary" onClick={handlesumbit}>
          save your new project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalbotun