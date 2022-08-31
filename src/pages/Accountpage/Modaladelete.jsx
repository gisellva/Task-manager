import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert'
import UseAuth from '../../auth/UseAuth';

function DeleteModal({show,handleClose}) {
   
  const {logout}=UseAuth();
  const handledelete=()=>{
     logout()
  };

  return (
    <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Alert variant='danger'> Are you sure you want to completely delete your account?</Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button variant="primary" onClick={handledelete}>
            Delete account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default DeleteModal