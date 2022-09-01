import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Registerpage = () => {
    return(
        <Container className='mt-5'>
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>name</Form.Label>
          <Form.Control placeholder="enter your name" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>last name</Form.Label>
          <Form.Control placeholder="enter your last name" />
        </Form.Group>
  
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>role</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>administrator</option>
              <option>regular</option>
            </Form.Select>
          </Form.Group>
  
         
        </Row>
  
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
</Container>
    )
}

export default Registerpage