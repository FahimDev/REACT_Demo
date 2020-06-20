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
import {faLink} from "@fortawesome/free-solid-svg-icons";

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

import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";


class Profile extends Component {

    constructor(props) {
        super();
        this.state={
            show:false,

            MasterID:props.id,

            fullName:"",
            title:"",
            imgPath:"",
            fatherName:"",
            motherName:"",
            religion:"",
            relationship:"",
            currentLoc:"",
            parmanentLoc:"",
            about:"",
            contact:"",
            eMail:"",
            socialFB:"",
            socialTwit:"",
            gitHub:"",
            expSummary:"",

            hashTag:[],
            edu:[],
            work:[],
            hobby:[],
            url:[],
        }

    }
    ModalColse=()=> this.setState({show:false});
    ModalOpen=()=> this.setState({show:true});

    componentDidMount() {
        restClient.GetRequest(appURL.member_bio+this.state.MasterID).then(result=>{
            this.setState({
                fullName:result[0]['fullName'],
                title:result[0]['title'],
                imgPath:result[0]['imgPath'],
                religion:result[0]['religion'],
                fatherName:result[0]['fatherName'],
                motherName:result[0]['motherName'],
                relationship:result[0]['relationship'],
                currentLoc:result[0]['currentLoc'],
                parmanentLoc:result[0]['parmanentLoc'],
                about:result[0]['about'],
                contact:result[0]['contact'],
                eMail:result[0]['eMail'],
                socialFB:result[0]['socialFB'],
                socialTwit:result[0]['socialTwit'],
                gitHub:result[0]['gitHub'],
                expSummary:result[0]['expSummary'],
            })
        }).catch(error=>{

        })

        restClient.GetRequest(appURL.member_hashTag+this.state.MasterID).then(result=>{
            this.setState({hashTag: result})
        }).catch(error=>{
            this.setState({hashTag:"Nothing [404]"})
        })

        restClient.GetRequest(appURL.member_edu+this.state.MasterID).then(result=>{
            this.setState({edu: result})
        }).catch(error=>{
            this.setState({edu:"Nothing [404]"})
        })

        restClient.GetRequest(appURL.member_work+this.state.MasterID).then(result=>{
            this.setState({work: result})
        }).catch(error=>{
            this.setState({work:"Nothing [404]"})
        })

        restClient.GetRequest(appURL.member_hobby+this.state.MasterID).then(result=>{
            this.setState({hobby: result})
        }).catch(error=>{
            this.setState({hobby:"Nothing [404]"})
        })

        restClient.GetRequest(appURL.member_url+this.state.MasterID).then(result=>{
            this.setState({url: result})
        }).catch(error=>{
            this.setState({url:"Nothing [404]"})
        })
    }

    render() {

        const hashTags = this.state.hashTag;
        const hashTagView = hashTags.map(hashTags=>{
            return <span>
                        <Badge style={{marginLeft:".5rem"}} variant={hashTags.color}> {hashTags.hashTag} </Badge>
                    </span>
        })

        const edu = this.state.edu;
        const eduSchool = edu.map(edu=>{
            return <span>
                        {edu.school}  {edu.sBatch}  <br/>
                    </span>
        })

        const eduCollege = edu.map(edu=> {
            return <span>
                        {edu.college}  {edu.cBatch}  <br/>
                    </span>
        })

        const eduDiploma = edu.map(edu=> {
            return <span>
                        {edu.diploma} <sub> {edu.dSub} {edu.dBatch} </sub> <br/>
                    </span>
        })

        const eduBachelor = edu.map(edu=> {
            return <span>
                        {edu.bachelor} <sub> {edu.baSub} {edu.baBatch} </sub>  <br/>
                    </span>
        })

        const eduMasters = edu.map(edu=> {
            return <span>
                        {edu.masters}  <sub> {edu.maSub}  {edu.msBatch}  </sub>  <br/>
                    </span>
        })
        const eduPhD = edu.map(edu=> {
            return <span>
                        {edu.phd}  <sub> {edu.phdSub} {edu.passYear} </sub>  <br/>
                    </span>
        })

        const work = this.state.work;
        const works = work.map(work=> {
            return <span>
                 <ListGroup.Item><FontAwesomeIcon icon={faBriefcase} /> <b> {work.type}: </b>  <i> {work.orgName} </i> <sub> {work.rank} [ {work.started} - {work.end}] </sub></ListGroup.Item>
                    </span>
        })

        const hobby = this.state.hobby;
        const hobbies = hobby.map(hobby=> {
            return <span>
                        <ListGroup.Item><FontAwesomeIcon icon={faCompactDisc} /> {hobby.hobby} </ListGroup.Item>
                    </span>
        })

        const url = this.state.url;
        const urls = url.map(url=> {
            return <span>
                        <Button className='mr-2' href={url.url} variant="outline-secondary"> {url.buttonTitle} </Button>
                    </span>
        })

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
                                                     src={this.state.imgPath} height="200rem" />
                                            </Col>
                                            <Col lg={12} md={12} sm={12}>
                                                <Jumbotron fluid>
                                                    <Row>
                                                        <Col lg={2} md={2} sm={2}>

                                                        </Col>
                                                        <Col lg={8} md={8} sm={8}>
                                                            <Button variant="dark">
                                                                <Badge variant="light"><FontAwesomeIcon icon={faUserTie} />
                                                                </Badge> {this.state.fullName}
                                                            </Button>
                                                            <br/>
                                                            <Badge pill variant="dark">
                                                                <i>{this.state.title}</i>
                                                            </Badge>
                                                            <br/>
                                                            <FontAwesomeIcon icon={faPrayingHands} /> <b>Religion:  </b>  <i> {this.state.religion} </i> <br/>
                                                            <FontAwesomeIcon icon={faHeart} /> <b>Relationship:  </b>  <i> {this.state.relationship} </i> <br/>
                                                            <FontAwesomeIcon icon={faHome} /> <b>Father:  </b>  <i> {this.state.fatherName} </i> <br/>
                                                            <FontAwesomeIcon icon={faHome} />  <b>Mother:  </b>  <i> {this.state.motherName} </i> <br/>
                                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> <b>Home Town:  </b> <i>{this.state.parmanentLoc}</i>

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
                                                         src={this.state.imgPath} height="120rem" />
                                                </Col>
                                                <Col lg={12} md={12} sm={12}>
                                                    <Button onClick={this.ModalOpen} variant="dark">
                                                        <Badge variant="light"><FontAwesomeIcon icon={faUserTie} />
                                                        </Badge> {this.state.fullName}
                                                    </Button>
                                                    <br/>
                                                    <Badge pill variant="dark">
                                                        <i> {this.state.title} </i>
                                                    </Badge>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Row>
                                            <Col style={{marginBottom:".5rem"}} lg={12} md={12} sm={12}>
                                                <Card className="cardBodyProfile" border="info" style={{  }}>
                                                    <Card.Body>
                                                        <p>#HashTag:</p>
                                                        {hashTagView}
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={12} md={12} sm={12}>
                                                <Card.Text>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item><FontAwesomeIcon icon={faMobile} /> {this.state.contact} </ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faEnvelopeSquare} /> {this.state.eMail} </ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.state.currentLoc} </ListGroup.Item>
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
                                                        <ListGroup.Item><FontAwesomeIcon icon={faBookReader} /> <b>School: </b> <i> {eduSchool} </i></ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faUserGraduate} /> <b>College: </b> <i> {eduCollege} </i> </ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faUserGraduate} /> <b>Diploma Degree: </b> <i> {eduDiploma} </i> </ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faGraduationCap} /> <b>Bachelor Degree: </b> <i> {eduBachelor} </i> </ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faUniversity} /> <b>Masters Degree: </b> <i> {eduMasters} </i> </ListGroup.Item>
                                                        <ListGroup.Item><FontAwesomeIcon icon={faAward} /> <b>PhD: </b> <i> {eduPhD} </i> </ListGroup.Item>
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
                                                    {works}
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
                                                    {hobbies}
                                                </ListGroup>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <Accordion>
                                    <Card className="textStyle">
                                        <Card.Header>
                                            <Accordion.Toggle className="textStyle" as={Button} variant="link" eventKey="0">
                                                <FontAwesomeIcon icon={faLink} />
                                                <b> Links</b>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                {urls}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>

                            <Col lg={3} md={3} sm={12}>
                                <Row>
                                    <Col lg={12} md={4} sm={4}>
                                        <br/>
                                        <Button href={this.state.socialFB} variant="primary"><FontAwesomeIcon icon={faFacebookF} /></Button>
                                        <br/> <br/>
                                    </Col>
                                    <Col lg={12} md={4} sm={4}>
                                        <Button href={this.state.socialTwit} variant="info"><FontAwesomeIcon icon={faTwitter} /></Button>
                                        <br/> <br/>
                                    </Col>
                                    <Col lg={12} md={4} sm={4}>
                                        <Button href={this.state.gitHub} variant="dark"><FontAwesomeIcon icon={faGithub} /></Button>
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
                                            {this.state.about}
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
                                            <Tabs defaultActiveKey="dash" id="uncontrolled-tab-example">
                                                <Tab eventKey="home" title="Experience Summary">
                                                    {this.state.expSummary}
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
                                                <Tab eventKey="dash" title="-o-" >

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
                                            <Tabs defaultActiveKey="dash" id="uncontrolled-tab-example">
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
                                                <Tab eventKey="dash" title="-o-" >

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