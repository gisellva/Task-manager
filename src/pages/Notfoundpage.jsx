import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from "../herpser/rotes"

const Notfoundpage = () => {
    return(
        <Container className='containernotfoundpage'>
            <Row className='mt-s'>
                <Col md={{span:4, offset:4}} className='container-notfoundpage'>
                    <img src="/img/404-not-found.svg" alt='error 404'/>
                <p>page not found, go back to <Link to={routes.Homepage}>home</Link></p>
                </Col>
            </Row>
        </Container>
    )
}

export default Notfoundpage
