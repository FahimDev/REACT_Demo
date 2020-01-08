import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";

class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Glitch</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    </Navbar>
            </Fragment>
        );
    }
}

export default NavBar;