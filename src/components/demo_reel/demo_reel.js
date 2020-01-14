import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import { Player ,BigPlayButton} from 'video-react';
class DemoReel extends Component {
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
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <Card className="text-center">
                                <Card.Header>Computer Vision</Card.Header>
                                <Card.Body>
                                    <Card.Title>CGI Demoreel</Card.Title>
                                    <Card.Text>
                                        <FontAwesomeIcon className="playVideo fa-3x" icon={faPlayCircle} onClick={this.ModalOpen} />
                                        <br/>
                                        Click to Play!
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Modal show={this.state.show} onHide={this.ModalColse}>
                                <Modal.Header closeButton>
                                    <Modal.Title>CGI Demoreel</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                   <Player>
                                       <BigPlayButton position="center" />
                                       <source src="https://www.youtube.com/watch?v=FSODEGD9wmA"/>
                                   </Player>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={this.ModalColse}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default DemoReel;