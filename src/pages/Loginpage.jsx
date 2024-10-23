import React from 'react'
import { useLocation } from 'react-router-dom'
import UseAuth from '../auth/UseAuth'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Loginpage = () => {
    const location=useLocation();
   
   const userCredencial={
    
   }
    const {login}=UseAuth();


    return(
        <>
     <Container className='mt-5'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        enter your account
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
        <Button variant="primary" type="submit" onClick={()=>login(userCredencial)}>open session</Button>   
    </Form>
    </Container>
        </>

    )
}

export default Loginpage
