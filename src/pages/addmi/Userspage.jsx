import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import UseAuth from '../../auth/UseAuth';
import Container from 'react-bootstrap/Container';

const Userspage = () => {
    const {user}=UseAuth();
    return(
        <>
        <h1 className='titleuser'>Userspage</h1>
        <Container>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img/female_avatar.svg" height={150} />
      <Card.Body>
        <Card.Title> User name : {user.name} </Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> user role : {user.rol} </ListGroup.Item>
        <ListGroup.Item> user mail : {user.mail} </ListGroup.Item>
        <ListGroup.Item>number of projects : {user.proyec}  </ListGroup.Item>
      </ListGroup>
      
    </Card>
    </Container>
        </>
    )
}

export default Userspage
