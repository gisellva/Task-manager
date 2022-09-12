import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Modalprojects( {add}) {
  const [show, setShow] = useState(false);
 
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        see projects
      </Button>

      <Modal show={show} onHide={handleClose}>
      
        <Modal.Header closeButton>
          <Modal.Title> project </Modal.Title>
        </Modal.Header>
        <Modal.Body> Porro occaecati ut. Iste est id. Et neque necessitatibus.",
"Amet temporibus deserunt. Aut facere quod. Saepe repellat tempore.",
"Corrupti mollitia assumenda. Sed optio mollitia. Ea nobis aliquid."</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalprojects