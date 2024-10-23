import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UseAuth from '../../auth/UseAuth';


function Modalregister({value ,lastname}) {
  const [show, setShow] = useState(false);
  const {login}=UseAuth();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        save acount
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{value} {lastname} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary"   onClick={()=>login()} >
            Save acount
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalregister