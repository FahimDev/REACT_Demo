import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";
import Loading from "../Loading/loading";
class About extends Component {

    constructor() {
        super();
        this.state={
            title:"About [404]",

            mission:"mission [404]",
            vision:"vision [404]",
            story:"story [404]",

            loaading:true,
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({title:result[4]['title'],loaading:false})
        }).catch(error=>{
            this.setState({title:"About us [404]"})
        })

        restClient.GetRequest(appURL.about).then(result=>{
            this.setState({mission:result[0]['mission'],vision:result[0]['vision'],story:result[0]['story'],loaading:false})
        }).catch(error=>{
            this.setState({mission:"mission [404]",vision:"vision [404]",story:"story [404]"})
        })

    }

    render() {

        if(this.state.loaading == true){
            return <Loading/>;
        }
        else {
            return (
                <Fragment>
                    <Container fluid={true}>
                        <h2 className="serviceTitle text-center">{this.state.title}</h2>
                        <Row className="research_info" >
                            <Col lg={6} md={12} sm={12}>
                                <h2> Mission </h2>
                                <p className="text-justify">
                                    {this.state.mission}
                                </p>
                            </Col>

                            <Col lg={6} md={12} sm={12}>
                                <h2> Vision </h2>
                                <p className="text-justify">
                                    {this.state.vision}
                                </p>
                            </Col>

                            <Col className="about-story" xs lg={12} md={12} sm={12}>
                                <h2 className="text-center"> Story </h2>
                                <p className="text-justify text-center">
                                    {this.state.story}
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default About;