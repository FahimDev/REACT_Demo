import React, {Component, Fragment} from 'react';
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import  {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Loading from "../Loading/loading";

class Contact extends Component {

    constructor() {
        super();
        this.state={
            title:"Contact [404]",

            number:"+8801712844177 [404]",
            mail:"fahim.arif0373@outlook.com [404]",

            loader: true,
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({title:result[5]['title'],loader:false})
        }).catch(error=>{
            this.setState({title:"Contact [404]"})
        })

        restClient.GetRequest(appURL.contact).then(result=>{
            this.setState({number:result[0]['number'],mail:result[0]['email'],loader:false})
        }).catch(error=>{
            this.setState({number:'+8801712844177 [404]',mail:'fahim.arif0373@outlook.com [404]'})
        })

    }

    render() {
        if(this.state.loader==true){
            return <Loading/>
        }
        else{
            return (
                <Fragment>

                    <Container fluid={true} className="p-0" >

                        <Container>
                            <h2 className="contactTitle text-center" >{this.state.title}</h2>
                            <Row>
                                <Col className="contactBody text-center" lg={6} md={12} sm={12}>
                                    <h5><FontAwesomeIcon icon={faPhoneVolume} /> {this.state.number}</h5>
                                </Col>

                                <Col className="contactBody text-center" lg={6} md={12} sm={12}>
                                    <h5><FontAwesomeIcon icon={faEnvelope} /> {this.state.mail}</h5>
                                </Col>
                            </Row>
                        </Container>

                    </Container>
                </Fragment>
            );
        }
    }
}

export default Contact;