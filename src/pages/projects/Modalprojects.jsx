import React, { useState } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

const Modalprojects = ({ show, onHide, project, onUpdateProject }) => {
  const [newDescription, setNewDescription] = useState(project.description);

  const handleChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleSaveChanges = () => {
    onUpdateProject({ ...project, description: newDescription });
    onHide(); 
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              type="text" 
              value={newDescription} 
              onChange={handleChange} 
              placeholder="Enter project description" 
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modalprojects;