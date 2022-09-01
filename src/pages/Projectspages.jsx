import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modalprojects from './projects/Modalprojects';


const Projectspages = () => {
   const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
   setFullscreen(breakpoint);
   setShow(true);
 }
 return(
        <>
        <h1 className='titleprojects'>Projects</h1>
           <Container className='mb-3'>
                <Row>
                    <Col>
                       <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-arquitecto-o-ingeniero-dibujar-construcciones-edificios-miniaturas-proyectos_2175-4691.jpg" />
                            <Card.Body>
                               <Card.Title>Projects Title</Card.Title>
                                <Card.Text>
                                   Some quick example text to build on the card title and make up the
                                   bulk of the card's content.
                                </Card.Text>
                                <Modalprojects
                                   fullscreen={fullscreen}
                                  setFullscreen={setFullscreen}
                                   show={show}
                                    setShow={setShow}
                                  handleShow={ handleShow}
                                  />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                       <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-arquitecto-o-ingeniero-dibujar-construcciones-edificios-miniaturas-proyectos_2175-4691.jpg" />
                            <Card.Body>
                               <Card.Title>Projects Title</Card.Title>
                                <Card.Text>
                                   Some quick example text to build on the card title and make up the
                                   bulk of the card's content.
                                </Card.Text>
                                <Modalprojects
                                   fullscreen={fullscreen}
                                  setFullscreen={setFullscreen}
                                   show={show}
                                    setShow={setShow}
                                  handleShow={ handleShow}
                                  />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
           </Container>
        

        </>
    )
}

export default Projectspages
