import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modalprojects from './projects/Modalprojects';
import Button from 'react-bootstrap/Button';


const Projectspages = () => {
  const localstorageproject=localStorage.getItem("proyect-1");
  let parseproject;
  if(!localstorageproject){
    localStorage.setItem("proyect-1",JSON.stringify([]))
    parseproject=[];
  }else{
     parseproject =JSON.parse(localstorageproject)
  }
  const [proyectsa, setproyectsa] = useState(parseproject)
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
   setFullscreen(breakpoint);
   setShow(true);
 }
 const save =(newp)=>{
  const strin =JSON.stringify(newp);
  localStorage.setItem("proyect-1",strin)
  setproyectsa (newp)
 }
 const deleteprojects=(title)=>{
 const newproject=[...proyectsa]
 const projectindex=newproject.findIndex(pro=>pro.title !== title)
 newproject.splice(projectindex,1)
 save(newproject)
 }
   return(
      <>
        <h1 className='titleprojects'>Projects</h1>
        <Container className='Containerprojectstext'>
          <h5>agrega mas proyectos</h5>
          <Button>+</Button>
        </Container>
         <Container className='containerprojects'>
          {parseproject.map(proyect=>(
            <Card key={proyect.title} style={{ width: '18rem' }}>
             <span className="material-symbols-outlined" onClick={deleteprojects}>close</span>
             <Card.Img variant="top" src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-arquitecto-o-ingeniero-dibujar-construcciones-edificios-miniaturas-proyectos_2175-4691.jpg" />
               <Card.Body>
                <Card.Title> {proyect.title} </Card.Title>
                <Card.Text>{proyect.descipcion}</Card.Text>
                <Modalprojects  fullscreen={fullscreen} setFullscreen={setFullscreen} show={show} setShow={setShow} handleShow={ handleShow} />
               </Card.Body>
            </Card> ))}
          </Container>
         
     </>
                   
   )
}

export default Projectspages
