import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import '../../asset/css/custom.css'
class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0" >
                    <div className="topBannerOverlay" >
                        <Container className="topContent" >
                            <Row>
                                <Col>
                                    <h1>Glitch Studios</h1>
                                    <h4>A hub of Software Engineers</h4>
                                    <Button variant="primary">info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;