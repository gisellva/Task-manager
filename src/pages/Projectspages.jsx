import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modalprojects from './projects/Modalprojects';
import Modalbotun from './projects/Modalbotun';
import UseAuth from '../auth/UseAuth';


const Projectspages = () => {
  const { add ,deleteprojects}=UseAuth();
  const [proyectsa, setproyectsa] = useState(add)
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
   setFullscreen(breakpoint);
   setShow(true);
 }

   return(
      <>
        <h1 className='titleprojects'>Projects</h1>
        <Container className='Containerprojectstext'>
        
          <h5>agrega mas proyectos</h5>
          <Modalbotun/>
        </Container>
         <Container className='containerprojects'>
          {add.map(proyect=>(
            <Card key={proyect.title} style={{ width: '18rem' }}>
             <span className="material-symbols-outlined" onClick={deleteprojects}>close</span>
             <Card.Img variant="top" src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-arquitecto-o-ingeniero-dibujar-construcciones-edificios-miniaturas-proyectos_2175-4691.jpg" />
               <Card.Body>
                <Card.Title> {proyect.title} </Card.Title>
                <Card.Text>{proyect.descipcion}</Card.Text>
                <Modalprojects add={add} />
               </Card.Body>
            </Card> ))}
          </Container>
         
     </>
                   
   )
}

export default Projectspages
