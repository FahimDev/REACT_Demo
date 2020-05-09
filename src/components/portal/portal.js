import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Portal extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="p-0" >

                    <Container>
                        <h2 className="portal text-center" >Portal</h2>
                        <Row>
                            <Col className="text-justify text-center" lg={12} md={12} sm={12}>

                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Portal"
                                        aria-label="use package manager commands "
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary">Go</Button>
                                    </InputGroup.Append>
                                </InputGroup>

                            </Col>
                        </Row>
                    </Container>

                </Container>
            </Fragment>
        );
    }
}

export default Portal;