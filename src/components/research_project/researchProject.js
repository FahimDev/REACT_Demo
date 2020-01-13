import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import research1 from  '../../asset/img/blockchain.png'
import research2 from '../../asset/img/HolographicVideoCall.png'
import research3 from '../../asset/img/Framework.png'
import research4 from '../../asset/img/AR_design.png'
class ResearchProject extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className="serviceTitle text-center text-dark" >Research Project</h2>
                    <Row className="research_info">
                        <Col lg={6} md={6} sm={12}>
                            <Row>
                                <Col lg={4} md={6} sm={12}>
                                    <img height="100rem" src={research1} />
                                </Col>
                                <Col lg={8} md={6} sm={12}>
                                    <h3>Blockchain</h3>
                                    <p className="" >
                                        We have a on going research project on Blockchain under the supervision of Md.Al-Amin Sir.
                                        This is a project of Health Ministry of Bangladesh.
                                        <a href="https://www.facebook.com/arif.fahim0373">Md.Ariful Islam</a>,
                                        <a href="https://www.facebook.com/AnToNin686">Md.Antonin Islam</a>,
                                        <a href="https://www.facebook.com/sayedurrahman.shihab">Shihab Rahman</a>,
                                        <a href="https://www.facebook.com/Shojibrah">Shojibur Rahman </a>
                                        are the researchers of this project
                                    </p>
                                    <Button className="m-3" variant="info">View Details</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Row>
                                <Col lg={4} md={6} sm={12}>
                                    <img height="100rem" src={research2} />
                                </Col>
                                <Col lg={8} md={6} sm={12}>
                                    <h3>Holographic Video Call</h3>
                                    <p className="" >
                                        We have a research project on Augmented Reality under the supervision of Dr. A. F. M. Saifuddin Saif & MD. Masuduzzaman Sir.
                                        This is a thesis paper.This paper is on Augmented Reality video call and Data Loss Problem.<a href="https://www.facebook.com/arif.fahim0373">Md.Ariful Islam</a>,
                                        <a href="https://www.facebook.com/AnToNin686">Md.Antonin Islam</a> are the researchers of this project
                                    </p>
                                    <Button className="m-3" variant="info">View Details</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Row>
                                <Col lg={4} md={6} sm={12}>
                                    <img height="100rem" src={research3} />
                                </Col>
                                <Col lg={8} md={6} sm={12}>
                                    <h3>New PHP Framework</h3>
                                    <p className="" >
                                        We have a research project which is inspired from Laravel Framework under the supervision of Md.Al-Amin Sir.
                                        This project is under development.<a href="https://www.facebook.com/AnToNin686">Md.Antonin Islam</a> is the main researcher of this project.
                                        He is using PHP for this project's implementation.
                                    </p>
                                    <Button className="m-3" variant="info">View Details</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Row>
                                <Col lg={4} md={6} sm={12}>
                                    <img height="100rem" src={research4} />
                                </Col>
                                <Col lg={8} md={6} sm={12}>
                                    <h3>Virtual Interior Design</h3>
                                    <p className="" >
                                        We have a research project on Augmented Reality with Voice Command & AI Voice Recognition under the supervision of Dr. Khandaker Tabin Hasan Sir.<a href="https://www.facebook.com/arif.fahim0373">Md.Ariful Islam</a>,
                                        <a href="https://www.facebook.com/AnToNin686">Md.Antonin Islam</a> are the researchers of this project.This project is developing with the full priority of HCI.
                                        User can demand any type of design with his voice command and experience the design in real world with the help of Augmented Reality.
                                    </p>
                                    <Button className="m-3" variant="info">View Details</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ResearchProject;