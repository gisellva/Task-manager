import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import UseAuth from '../../auth/UseAuth';
import { Form } from 'react-bootstrap';


function Modalimg({ img, setimg, closeimg, openimg, setProfileImage }) {
  const { logout } = UseAuth();
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(file); 
      setPreviewImage(imageUrl); 
    }
  };

  const handleUpdateImage = () => {
    if (selectedImage) {

      console.log("Imagen seleccionada:", selectedImage);
      
     
      setProfileImage(previewImage); 
    }
    closeimg(); 
  };

  return (
    <>
      <Modal show={img} onHide={closeimg}>
        <Modal.Header closeButton>
          <Modal.Title>Change Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Photo Change</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
          </Form.Group>
          <h2>Previsualización</h2>
          {previewImage && (
            <img src={previewImage} alt="Preview" style={{ width: '100%', height: 'auto' }} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeimg}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateImage}>
            Update Image
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalimg;