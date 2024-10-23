import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import UseAuth from '../../auth/UseAuth';

function Modalbotun({ onAddProject }) {
  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  
  const handleClose = () => setShow(false);
  const handleAdd = () => setShow(true);
  
  const handleSubmit = () => {
    const newProject = { title: newTitle, description: newDescription };
    onAddProject(newProject); 
    setNewTitle(""); 
    setNewDescription(""); 
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleAdd}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder="Enter the title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Enter the description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFile">
              <Form.Label>Project File</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Your New Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalbotun;