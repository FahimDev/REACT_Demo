import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import GlitchClip from '../../../node_modules/react-glitch-effect/core/Clip';
import '../../asset/css/custom.css'
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";
class TopBanner extends Component {

    constructor() {
        super();
        this.state={
            title:"Glitch",
            subtitle:"[404]"
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({title:result[0]['title'],subtitle:result[0]['subtitle']})
        }).catch(error=>{
            this.setState({title:"Glitch",subtitle:"Engineers Hub [404]"})
        })
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0" >
                    <div className="topBannerOverlay" >
                        <Container className="topContent" >
                            <Row>
                                <Col>
                                    <GlitchClip>
                                        <h1 className="topTitle" >{this.state.title}</h1>
                                    </GlitchClip>
                                    <h4 className="topSubtitle" >{this.state.subtitle}</h4>
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