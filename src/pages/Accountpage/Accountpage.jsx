import React, { useState } from 'react'
import { Container,Row,Col ,Button} from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import UseAuth from '../../auth/UseAuth';
import DeleteModal from './Modaladelete';
import Modaleditpasword from './Modaledit';
import Modalaccount from './Modalaccount';
import Modalimg from "./Modalimg"


const Accountpage = () => {
   const { user } = UseAuth();
 
   // Llamada a todos los Hooks primero
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
   const [edit, setedit] = useState(false);
   const closedit = () => setedit(false);
   const openedit = () => setedit(true);
 
   const [account, setaccount] = useState(false);
   const close = () => setaccount(false);
   const open = () => setaccount(true);
 
   const [img, setimg] = useState(false);
   const closeimg = () => setimg(false);
   const openimg = () => setimg(true);
 
   // Renderizado condicional después de los Hooks
   if (!user) {
     return <Redirect to="/Homepage" />;
   }
 
   return (
     <>
       <Container className="cardporfile">
         <Row className="mt-4">
           <Col xs={12} className="text-center">
             <img
               src="/img/female_avatar.svg"
               alt="porfile"
               className="avatar"
               onClick={openimg}
             />
           </Col>
           <Col className="profile">
             <p className="text-center mt-1">
               <b>Name:</b> {user.name}
             </p>
             <p className="text-center mt-1">
               <b>Mail:</b> {user.mail}
             </p>
             <p className="text-center mt-1">
               <b>Role:</b> {user.rol}
             </p>
             <Button variant="warning" className="mt-1" onClick={open}>
               edit account
             </Button>
             <Button variant="link mt-1" onClick={openedit}>
               change Password
             </Button>
             <Button
               variant="link"
               className="mt-1 text-danger"
               onClick={handleShow}
             >
               Delete account
             </Button>
           </Col>
         </Row>
       </Container>
       <DeleteModal
         show={show}
         setShow={setShow}
         handleClose={handleClose}
         handleShow={handleShow}
       />
       <Modaleditpasword
         edit={edit}
         setedit={setedit}
         openedit={openedit}
         closedit={closedit}
       />
       <Modalaccount
         account={account}
         setaccount={setaccount}
         close={close}
         open={open}
         user={user}
       />
       <Modalimg
         img={img}
         setimg={setimg}
         closeimg={closeimg}
         openimg={openimg}
       />
     </>
   );
 };
 
 export default Accountpage;