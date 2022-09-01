import React from 'react'
import {Navbar,Nav,NavDropdown} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import UseAuth from '../../auth/UseAuth';


const Navigator = () => {
    const {logout}=UseAuth();
    return(
        <Navbar collapseOnSelect expand="lg" variant='dark' bg='dark' >
            <Navbar.Brand as={NavLink} to="/Homepage">
               Task manager  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav >
                   <NavDropdown title="admi">
                     <Nav.Item  as={NavLink} to="/admi/users" className="user" >
                     users
                     </Nav.Item>
                   </NavDropdown>
                   <Nav.Link as={NavLink} to="/Projectspages">
                     Project
                   </Nav.Link>
                </Nav>
                <Nav >
                    <Nav.Link as={NavLink} to="/Loginpage">
                    Login
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/Registerpage">
                    Register
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/Accountpage">
                    Account
                    </Nav.Link>

                    <Nav.Link  to="/Accountpage" onClick={logout}>
                    close session
                    </Nav.Link>
                   
                     
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )             
};

export default Navigator