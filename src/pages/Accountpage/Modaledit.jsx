import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Alert, Form } from 'react-bootstrap';
import  {useForm } from "react-hook-form"
import changepassword from '../../validation/changepassword';


const Modaleditpasword = ({edit, closedit}) => {
  const {handleSubmit,register,formState:{errors},reset}=useForm({resolver:changepassword});
  const onSubmit=(formdata)=>{
      alert("cambio")
  }
  useEffect(()=>{
    if(!edit){
      reset()
    }
  },[edit])
  
    return(
    <>
    <Modal show={edit} onHide={closedit}>
     <Modal.Header closeButton>
       <Modal.Title>change Password</Modal.Title>
     </Modal.Header>
     <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
             <Form.Label>
              New Password
              </Form.Label>
              <Form.Control placeholder='write your new password'
                {...register("password")}
                type="password"
              />
              {errors?.password && (
              <Form.Text>
                <Alert variant='danger'>
                  {errors.password.message}
                </Alert>
              </Form.Text>
              )}
            </Form.Group>
        </Form>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={closedit}>
        Cancel
       </Button>
       <Button variant="primary" onClick={handleSubmit(onSubmit)}>
         update password
       </Button>
     </Modal.Footer>
   </Modal>
 </>)
}

export default Modaleditpasword
