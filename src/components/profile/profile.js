import React, {Component, Fragment} from 'react';
import {Col, Container, Row ,Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAward,
    faBookReader, faBoxOpen, faBriefcase, faCompactDisc,
    faEnvelope,
    faGraduationCap, faHeart, faHome, faLongArrowAltRight, faNetworkWired,
    faPhoneVolume, faPlayCircle, faPrayingHands,
    faUniversity
} from "@fortawesome/free-solid-svg-icons";
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import {faUserTie} from "@fortawesome/free-solid-svg-icons";
import {faMobile} from "@fortawesome/free-solid-svg-icons";
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import coverImage from '../../asset/img/profileCover.png'
import profileImage from '../../asset/img/DeveloperNeeds/Dev.jpg'
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Jumbotron from "react-bootstrap/Jumbotron";
import Dropdown from "react-bootstrap/Dropdown";
import {BigPlayButton, Player} from "video-react";


class Profile extends Component {

    constructor() {
        super();
        this.state={
            show:false
        }
    }
    ModalColse=()=> this.setState({show:false});
    ModalOpen=()=> this.setState({show:true});

    render() {
        return (
            <Fragment>

                <Container fluid={true} className="p-0" >

                    <Container>
                        <h2 className="contactTitle text-center" >Member's Profile</h2>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <Modal show={this.state.show} onHide={this.ModalColse}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Profile Picture</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Row>
                                            <Col lg={12} md={12} sm={12}>
                                                <img className="centerImage" style={{borderRadius: "10%" ,
                                                    borderColor:"#13D4D4",border:"solid"}}
                                                     src={profileImage} height="200rem" />
                                            </Col>
                                            <Col lg={12} md={12} sm={12}>
                                                <Jumbotron fluid>
                                                    <Row>
                                                        <Col lg={2} md={2} sm={2}>

                                                        </Col>
                                                        <Col lg={8} md={8} sm={8}>
                                                            <Button variant="dark">
                                                                <Badge variant="light"><FontAwesomeIcon icon={faUserTie} />
                                                                </Badge> Md.Ariful Islam Fahim
                                                            </Button>
                                                            <br/>
                                                            <Badge pill variant="dark">
                                                                <i>Software Engineer</i>
                                                            </Badge>
                                                            <br/>
                                                            <FontAwesomeIcon icon={faPrayingHands} /> <b>Religion:  </b>  <i> Islam </i> <br/>
                                                            <FontAwesomeIcon icon={faHeart} /> <b>Relationship:  </b>  <i> Single </i> <br/>
                                                            <FontAwesomeIcon icon={faHome} /> <b>Father:  </b>  <i> Engr.Md. Nur Hossain </i> <br/>
                                                            <FontAwesomeIcon icon={faHome} />  <b>Mother:  </b>  <i> Ferdouse Yeasmin </i> <br/>
                                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> <b>Home Town:  </b>Chittagong,Bangladesh

                                                        </Col>
                                                        <Col lg={2} md={2} sm={2}>

                                                        </Col>
                                                    </Row>
                                                </Jumbotron>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                </Modal>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3} md={12} sm={12}>

                            </Col>
                            <Col className="text-justify" lg={6} md={12} sm={12}>

                                <Card className="textStyle" >
                                    <Card.Img variant="top" src={coverImage} />
                                    <Card.Body>

                                        <div style={{top:"2rem",position: "absolute",marginBottom:"3rem"}} >
                                            <Row>
                                                <Col lg={12} md={12} sm={12}>
                                                    <img style={{borderRadius: "10%" ,
                                                        borderColor:"#13D4D4",border:"solid"}}
                                                         onClick={this.ModalOpen}
                                                         src={profileImage} height="120rem" />
                                                </Col>
                                                <Col lg={12} md={12} sm={12}>
                                                    <Button onClick={this.ModalOpen} variant="dark">
                                                        <Badge variant="light"><FontAwesomeIcon icon={faUserTie} />
                                                        </Badge> Md.Ariful Islam Fahim
                                                    </Button>
                                                    <br/>
                                                    <Badge pill variant="dark">
                                                        <i>Software Engineer</i>
                                                    </Badge>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Row>
                                            <Col style={{marginBottom:".5rem"}} lg={12} md={12} sm={12}>
                                                <Card className="cardBodyProfile" border="info" style={{  }}>
                                                    <Card.Body>
                                                        <p>#HashTag:</p>
                                                        <Badge style={{marginLeft:".5rem"}} variant="info">Web Development</Badge>
                                                        <Badge style={{marginLeft:".5rem"}} variant="info">Software Development</Badge>
                                                        <Badge style={{marginLeft:".5rem"}} variant="info">Game Development</Badge>
                                                        <Badge style={{marginLeft:".5rem"}} variant="info">3D Animation</Badge>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={12} md={12} sm={12}>
                                                <Card.Text>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item><FontAwesomeIcon icon={faMobile} /> +8801712844177</ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faEnvelopeSquare} /> fahim.arif0373@outlook.com</ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faMapMarkerAlt} /> Chittagong,Bangladesh</ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Text>
                                            </Col>
                                            <Col lg={12} md={12} sm={12}>

                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                                    <Accordion>
                                        <Card className="textStyle">
                                            <Card.Header>
                                                <Accordion.Toggle className="textStyle" as={Button} variant="link" eventKey="0">
                                                    <FontAwesomeIcon icon={faUserGraduate} />
                                                    <b> View Academics</b>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item><FontAwesomeIcon icon={faBookReader} /> <b>School: </b></ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faUserGraduate} /> <b>College: </b> </ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faUserGraduate} /> <b>Diploma Degree: </b></ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faGraduationCap} /> <b>Bachelor Degree: </b></ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faUniversity} /> <b>Masters Degree: </b></ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faAward} /> <b>PhD: </b></ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                <Accordion>
                                    <Card className="textStyle">
                                        <Card.Header>
                                            <Accordion.Toggle className="textStyle" as={Button} variant="link" eventKey="0">
                                                <FontAwesomeIcon icon={faBriefcase} />
                                                <b> View Work History</b>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item><FontAwesomeIcon icon={faBriefcase} /> <b>[Company/Business] </b>  <i> [Rank] </i>  <b> [Start Date] </b>  <b> [End Date] </b> </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <Accordion>
                                    <Card className="textStyle">
                                        <Card.Header>
                                            <Accordion.Toggle className="textStyle" as={Button} variant="link" eventKey="0">
                                                <FontAwesomeIcon icon={faBoxOpen} />
                                                <b> View Hobbies & Co-Curricular Activities</b>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item><FontAwesomeIcon icon={faCompactDisc} /> Examples </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>

                            <Col lg={3} md={3} sm={12}>
                                <Row>
                                    <Col lg={12} md={4} sm={4}>
                                        <br/>
                                        <Button href="/facebook" variant="primary"><FontAwesomeIcon icon={faFacebookF} /></Button>
                                        <br/> <br/>
                                    </Col>
                                    <Col lg={12} md={4} sm={4}>
                                        <Button href="/twitter" variant="info"><FontAwesomeIcon icon={faTwitter} /></Button>
                                        <br/> <br/>
                                    </Col>
                                    <Col lg={12} md={4} sm={4}>
                                        <Button href="/github" variant="dark"><FontAwesomeIcon icon={faGithub} /></Button>
                                        <br/> <br/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} md={9} sm={9}>
                                <br/><br/>
                                <Card className="textStyle" border="light">
                                    <Card.Body>
                                        <Card.Title>About:</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12} md={12} sm={12} >
                                <Card className="textStyle" style={{marginTop:"2rem"}}>
                                    <Card.Header>Qualification</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                                <Tab eventKey="home" title="Experience Summary">
                                                    I am a final year student of Software Engineering Department(BSc.) at AIUB.
                                                     I have expertise on Desktop online/offline software development
                                                     In web development I also have a very good experience. Some projects (CRUD) are uploaded in
                                                    my Github account (Public) which are developed in different Languages and Frameworks.
                                                     I also have knowledge on Search Engine Optimization.
                                                     Most specifically for android/desktop 3D game development including AR, VR and Voice
                                                    Command I have a very good experience.
                                                     I have a great skill of Business Communication (Bangla/English).
                                                     I have leading experience and I was team leader at most of my academic projects. I was also an
                                                    assistant Tech Lead at Glitch (2018)
                                                     I have excellent skill of Video Post-Production, 3D Modeling and Animation.
                                                     I also have skills on 2D Graphics Design.
                                                </Tab>
                                                <Tab eventKey="profile" title="Project Experience">
                                                     I have participated “Satellite Ground Station training” under the supervision of BRAC Onnesha
                                                    (2019)
                                                     I have worked with “bKash” merchant account API (2019)
                                                     I have worked as the Web developer of Chittagong Rent-A-Car (2018). I was also in-charge of
                                                    Chittagong Rent-A-Car’s Search Engine Optimization project and from January 2019 to November
                                                    2019. Chittagong Rent-A-Car was ranked as number one in Google Search and Google Map among
                                                    Chittagong Division.
                                                     I have developed and commercialized a management desktop software to the “Food Guide” (2018)
                                                     I was in-charge of the Post-Production unit at “Three Films” (2017-2018)
                                                     I worked as a 3D modeler and VR developer with Glitch (2016)
                                                     I have contributed to the video content optimization project for “Apex Footwear Limited” official
                                                    website.
                                                     I also have a project under the supervision of Dr. Khandaker Tabin Hasan which is related with
                                                    Artificial Intelligence domain. The application is capable to recognize user voice command and
                                                    Design Interior with AR Experience. IBM Watson is also used in this project.(2019)
                                                </Tab>
                                                <Tab eventKey="contact" title="Skills" >
                                                    Front-End Essentials: HTML, CSS, Bootstrap
                                                    Programming Language: C#, php, C++,Vanilla JavaScript
                                                    Framework: C#.NET, Laravel, Lumen, jQuery
                                                    Runtime Environment: Node.js
                                                    Database Management System : MySQL, Oracle (10g)
                                                    Library & Development Kit: React, Open GL, IBM Watson, Google AR Core, Vuforia
                                                    Game Development: Unity Game Engine
                                                    2D Graphics Design: Photoshop , Illustrator
                                                    3D Content Creation: CGI, 3D Modeling, Texture, Animation (Key Frame) [Software: Autodesk Maya]
                                                    Video: Rotoscoping, VFX, Post-Production [Software: Adobe After Effects]
                                                    Office Document: MS Office Suit
                                                </Tab>

                                                <Tab eventKey="soft&tool" title="Software & Tools" >
                                                    PS,AE,Maya
                                                </Tab>
                                            </Tabs>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={12} md={12} sm={12} >
                                <Card className="textStyle" style={{marginTop:"2rem"}} >
                                    <Card.Header>Achievement</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                                <Tab eventKey="home" title="Training and Certifications">
                                                     Discover Augmented Reality Games Certified, Diego Herrera/Udemy (2019)
                                                     Satellite Ground Station Training, Bangladesh Innovation Forum (2019)
                                                     Certification on Game Development, Ministry of ICT Division (2017)
                                                     CGI Artist Certification, Cycore. (2017)
                                                     IT Essentials Certification, Cisco (2016)
                                                </Tab>
                                                <Tab eventKey="profile" title="Awards & Recognitions">
                                                     AIUB CS Fest: Champion of Project Showcasing (2016)
                                                     IUT ICT Fest: Final Round Selection of Project Showcasing (2016)
                                                     IUT Meccelaration: Runner Up of Project Showcasing (2018)
                                                </Tab>
                                                <Tab eventKey="contact" title="Community Membership" >
                                                    <ListGroup style={{marginTop:"1rem"}} variant="flush">
                                                        <ListGroup.Item><FontAwesomeIcon icon={faCompactDisc} /> IEEE</ListGroup.Item>
                                                    </ListGroup>
                                                </Tab>
                                            </Tabs>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12} md={12} sm={12} style={{marginTop:"2rem"}} >
                                <Accordion>
                                    <Card className="textStyle">
                                        <Card.Header>
                                            <Accordion.Toggle className="textStyle" as={Button} variant="link" eventKey="0">
                                                <FontAwesomeIcon icon={faNetworkWired} />
                                                <b> View Reference & Network</b>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item><FontAwesomeIcon icon={faLongArrowAltRight} /> <b>Title: </b> <i> Name </i> <a href="/url"> Contact/URL</a></ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>

                    </Container>

                </Container>
            </Fragment>
        );
    }
}

export default Profile;