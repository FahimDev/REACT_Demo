import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <hr/>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="bg-dark text-white text-center mt-4">
                            <p>
                                © Developed by <a href="https://www.facebook.com/arif.fahim0373" >Md.Ariful Islam Fahim</a> [Developed with <a className="" href="https://reactjs.org/"><FontAwesomeIcon className="primary" icon={faReact} onClick={this.ModalOpen} /> React</a>] 2020
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;