import React from 'react'
import { Container,Row,Col ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from "../herpser/rotes"

const Homepage = () => {
    return(
        <Container className='Container-Homepage'>
        <Row className='mt-5'>
            <Col xs={{span:12}} md={{span:6}} className="mb-8">
                <h1>welcome to the project manager</h1>
                <p>here you can manage your projects</p>
                <p>save, delete or edit them</p>
                <div>
                  <p> <Link to={routes.Loginpage}>log in </Link>or create an account</p>
                 <Button as={Link} to={routes.Registerpage} className="ml-4">click here to create an account</Button>
                </div>
            </Col>
            <Col>
                <img src='/img/task-manager.svg' alt='gestor-de-tareas' className="img-fluid"/>
            </Col>
                <p>keep your most important projects in order</p>
            </Row>
        </Container>
    )
}

export default Homepage
