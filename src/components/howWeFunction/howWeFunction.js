import React, {Component, Fragment} from 'react';
import {Card, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import DevCycle from '../../asset/img/Dev.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {faMugHot} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";

class HowWeFunction extends Component {

    constructor() {
        super();
        this.state={
            title:"How we Function?",
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({title:result[2]['title']})
        }).catch(error=>{
            this.setState({title:"How we do Things?"})
        })
    }

    render() {
        return (
            <Fragment>

                <Container fluid={true} className="howWeDo p-0" >

                        <Container>
                            <h2 className="text-center text-white" >{this.state.title}</h2>
                            <Row>
                                <Col lg={8} md={12} sm={12}>
                                    <Row className="howWeDoContent text-center text-white">
                                        <Col className="count1" lg={4} md={6} sm={12}>
                                            <h2>
                                                <CountUp start={0} end={14}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h2>
                                            <h3>Projects</h3>
                                            <hr className="w-25 bg-white" />
                                        </Col>
                                        <Col className="count2" lg={4} md={6} sm={12}>
                                            <h2>
                                                <CountUp start={0} end={9}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h2>
                                            <h3>Clients</h3>
                                            <hr className="w-25 bg-white" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="align-content-center" lg={4} md={12} sm={12}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={DevCycle} />
                                        <Card.Body>
                                            <Card.Title>How We Operate?</Card.Title>
                                            <Card.Text>
                                                <p><FontAwesomeIcon className="bullet" icon={faCheckCircle} /> Requirement Gathering</p>
                                                <p><FontAwesomeIcon className="bullet" icon={faCheckCircle} /> Requirement Analysis</p>
                                                <p><FontAwesomeIcon className="bullet" icon={faCheckCircle} /> System Analysis</p>
                                                <p><FontAwesomeIcon className="bullet" icon={faCheckCircle} /> GUI Design</p>
                                                <p><FontAwesomeIcon className="bullet" icon={faCheckCircle} /> Client Approval</p>
                                                <p><FontAwesomeIcon className="bullet" icon={faCheckCircle} /> Development</p>
                                                <p><FontAwesomeIcon className="bullet" icon={faCheckCircle} /> Testing</p>
                                                <p><FontAwesomeIcon className="bullet" icon={faCheckCircle} /> Release & Maintenance</p>
                                                <p><FontAwesomeIcon className="bullet" icon={faMugHot} /> <b> Coffee !</b></p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>

                </Container>
            </Fragment>
        );
    }
}

export default HowWeFunction;