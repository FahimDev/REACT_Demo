import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import '../../asset/css/custom.css'
import webIco from '../../asset/img/webDev.png'
import softIco from '../../asset/img/softDev.png'
import animIco from '../../asset/img/animDev.png'
import gameIco from '../../asset/img/gameDev.png'
class Services extends Component {
    render() {
        return (
            <Fragment>

                <Container className="text-center" >
                    <h2 className="serviceTitle" >Services</h2>
                    <Row>
                        <Col lg={3} md={6} sm={12} >
                            <div className="serviceSlot text-center" >
                                <img src={webIco} height={100} width={100} />
                                <h2>Web Development</h2>
                                <p>We provide all types of Web solutions.We have experience to work mobile banking services
                                    & also all types of API support</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} >
                            <div className="serviceSlot text-center">
                                <img src={softIco} height={100} width={100} />
                                <h2>Software Development</h2>
                                <p>We can develop any type of Desktop(Windows/MAC) software for your organisation
                                    We are also capable of developing Android and IOS app for you</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} >
                            <div className="serviceSlot text-center">
                                <img src={animIco} height={100} width={100} />
                                <h2>3D Animation</h2>
                                <p>For any type of 3D animated short film or TVC/OVC you can take our support</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} >
                            <div className="serviceSlot text-center">
                                <img src={gameIco} height={100} width={100} />
                                <h2>Game Development</h2>
                                <p>We have full capacity to built android/desktop game for you</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default Services;