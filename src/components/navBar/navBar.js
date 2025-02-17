import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import '../../asset/css/custom.css'
import navBarLogo0 from '../../asset/img/navLogo.png'
import navBarLogo1 from'../../asset/img/navLogo0.png'
import GlitchClip from '../../../node_modules/react-glitch-effect/core/Clip';
import NavDropdown from "react-bootstrap/NavDropdown";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGalacticRepublic} from "@fortawesome/free-brands-svg-icons";


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
                <Navbar fixed="top" bg="dark"  collapseOnSelect expand="lg" variant="dark">
                    <GlitchClip>
                    <Navbar.Brand className={this.state.navBar}  href="#home"> <img src={this.state.navLogo0} height="30rem" /> Glitch</Navbar.Brand>
                    </GlitchClip>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                    <Nav>

                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/OurServices">Services</Nav.Link>
                            <Nav.Link href="/Research">Research</Nav.Link>
                            <Nav.Link href="/HowWeDo">How WE Do Things</Nav.Link>
                            <NavDropdown title="G-Hub" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Teams</NavDropdown.Item>
                                <NavDropdown.Item href="/Member">Member's List</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/OurProjectAnalysis">Project Analysis</NavDropdown.Item>
                                <NavDropdown.Item className="text-center" style={{backgroundColor: "#000000"}} href="/Portal">
                                    <GlitchClip>
                                        <b style={{color: "#FFFFFF"}}>Glitch</b><b style={{border: "1px #f7951e",borderRadius:"5px",backgroundColor: "#f7951e",color: "#000000",}}>Hub</b>
                                        <br/>
                                    </GlitchClip>
                                    <b style={{color: "#13D4D4"}}><FontAwesomeIcon icon={faGalacticRepublic} /> Portal</b>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </Fragment>
        );
    }
}

export default NavBar;