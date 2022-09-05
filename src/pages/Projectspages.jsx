import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modalprojects from './projects/Modalprojects';
import Button from 'react-bootstrap/Button';
import Modalbotun from './projects/Modalbotun';

const proyectsarray=[
   {title:"gato 1",
   descipcion:"Some quick example text to build on the card title and make up the bulk of the card's content.",
   id:1},
   {title:" perro 2",
   descipcion:"Some quick example text to build on the card title and make up the bulk of the card's content.",
   id:2},
   {title:"loro 3",
   descipcion:"Some quick example text to build on the card title and make up the bulk of the card's content.",
   id:3},
   {title:"conejo 4",
   descipcion:"Some quick example text to build on the card title and make up the bulk of the card's content.",
   id:4},
   {title:"caballo 5",
   descipcion:"Some quick example text to build on the card title and make up the bulk of the card's content.",
   id:5},
  
]
const Projectspages = () => {
  const [proyectsa, setproyectsa] = useState(proyectsarray)
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
   setFullscreen(breakpoint);
   setShow(true);
 }
 const deleteprojects=(title)=>{
 const newproject=[...proyectsa]
 const projectindex=newproject.findIndex(pro=>pro.title !== title)
 newproject.splice(projectindex,1)
 setproyectsa(newproject)
 }
   return(
      <>
        <h1 className='titleprojects'>Projects</h1>
        <Container className='Containerprojectstext'>
          <h5>agrega mas proyectos</h5>
          < Modalbotun/>
        </Container>
         <Container className='containerprojects'>
          {proyectsa.map(proyect=>(
            <Card key={proyect.title} style={{ width: '18rem' }}>
             <span className="material-symbols-outlined" onClick={deleteprojects}>close</span>
             <Card.Img variant="top" src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-arquitecto-o-ingeniero-dibujar-construcciones-edificios-miniaturas-proyectos_2175-4691.jpg" />
               <Card.Body>
                <Card.Title> {proyect.title} </Card.Title>
                <Card.Text>{proyect.descipcion}</Card.Text>
                <Modalprojects  fullscreen={fullscreen} setFullscreen={setFullscreen} show={show} setShow={setShow} handleShow={ handleShow}  proyectsarray={ proyectsarray}/>
               </Card.Body>
            </Card> ))}
          </Container>
         
     </>
                   
   )
}

export default Projectspages
