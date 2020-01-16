import React, {Component,Fragment} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import GlitchClip from "react-glitch-effect/core/Clip";
import Typewriter from 'typewriter-effect';
class PageTitleBar extends Component {

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="TitlePage p-0" >
                    <div className="TitlePageOverlay" >
                        <Container className="TitlePageContent" >
                            <Row>
                                <Col>
                                    <Typewriter
                                        options={{
                                            strings: ['Glitch', 'Glitch Studios'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                    <GlitchClip>
                                        <h4 className="pageTitle" >{this.props.pageTitle}</h4>
                                    </GlitchClip>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTitleBar;