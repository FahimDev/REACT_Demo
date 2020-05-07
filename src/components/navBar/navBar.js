import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import '../../asset/css/custom.css'
import navBarLogo0 from '../../asset/img/navLogo.png'
import navBarLogo1 from'../../asset/img/navLogo0.png'
import GlitchClip from '../../../node_modules/react-glitch-effect/core/Clip';
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
                            <Nav.Link href="/OurProjectAnalysis">Project Analysis</Nav.Link>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </Fragment>
        );
    }
}

export default NavBar;