import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import loading from "../../asset/img/network.svg";

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row >
                        <Col>
                            <br/><br/>
                            <img className="LoaderAnimation" src={loading}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loading;