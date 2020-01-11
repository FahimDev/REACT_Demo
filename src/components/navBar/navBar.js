import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import '../../asset/css/custom.css'
import navBarLogo0 from '../../asset/img/navLogo.png'
import navBarLogo1 from'../../asset/img/navLogo0.png'

class NavBar extends Component {
    constructor() {
        super();
        this.state={
            navBar:"statNav",
            navLogo0:[navBarLogo0]
        }

    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBar:'dyneNav'})
            this.setState({navLogo0:[navBarLogo1]})
        }
        else if(window.scrollY<100){
            this.setState({navBar:'statNav'})
            this.setState({navLogo0:[navBarLogo0]})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Navbar.Brand className={this.state.navBar}  href="#home"> <img src={this.state.navLogo0} height="30rem" />   Glitch</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing">Project Analysis</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    </Navbar>
            </Fragment>
        );
    }
}

export default NavBar;