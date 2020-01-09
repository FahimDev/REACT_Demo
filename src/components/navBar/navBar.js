import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import '../../asset/css/custom.css'

class NavBar extends Component {
    constructor() {
        super();
        this.state={
            navBar:"statNav"
        }

    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBar:'dyneNav'})
        }
        else if(window.scrollY<100){
            this.setState({navBar:'statNav'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Navbar.Brand className={this.state.navBar}  href="#home">Glitch</Navbar.Brand>
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