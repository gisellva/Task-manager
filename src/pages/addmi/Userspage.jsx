import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';


const Userspage = () => {
 const [opti, setopti] = React.useState([])
const [loading, setloading] = React.useState(true)
 const api=()=>{
  fetch('https://random-data-api.com/api/v2/users?size=12&is_xml=true')
  .then(response => response.json())
 .then(response =>  setopti(response))
 .catch(err => console.error(err));
 setloading(false)
 }
    React.useEffect(() => {
api()

  }, [])

    return(
        <>
        <section className='sectiontitle'>
        <h1 className='titleuser'>Userspage</h1>
        <Button onClick={api} className="b">Next</Button>   
        </section>
        <Container className='ss' >
        {loading && <p>estamos cargando </p>}
        {opti.map((item)=>(
        <Card   style={{ width: '16rem' }}>
        
      <Card.Img variant="top" src={item.avatar}  className="imgcarusers"/>
      <Card.Body>
        <Card.Title> User name : {item.first_name} </Card.Title>
         </Card.Body>
      <ListGroup className="list-group-flush" key={item.id}>
      <ListGroup.Item > last name: {item.last_name}</ListGroup.Item>
        <ListGroup.Item > user role : regular </ListGroup.Item>
        <ListGroup.Item > user mail : {item.email} </ListGroup.Item>
        
      </ListGroup>
      
    </Card>
    ))}
     
    </Container>
        </>
    )
}

export default Userspage
