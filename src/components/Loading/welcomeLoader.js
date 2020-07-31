import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import loading from "../../asset/img/rocket-0.3s-164px.svg"
import {Link} from "react-router-dom";
class WelcomeLoader extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row >
                        <Col>
                            <br/><br/>
                            <Link to="/">
                                <img onDrag={()=> window.open("OurServices", "_blank")} onClick={()=> window.open("/", "_blank")} onMouseEnter={false} className="LoaderAnimation" src={loading}/>
                            </Link>
                            <p>Launching You to Someone's Dream.....</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WelcomeLoader;