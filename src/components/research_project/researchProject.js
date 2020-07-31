import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import research1 from  '../../asset/img/blockchain.png'
import research2 from '../../asset/img/HolographicVideoCall.png'
import research3 from '../../asset/img/Framework.png'
import research4 from '../../asset/img/AR_design.png'
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";
import Loader from "../Loading/loading";


class ResearchProject extends Component {

    constructor() {
        super();
        this.state={
            title:"Research & Creation",
            ourResearch:[],

            loading:true,
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({title:result[3]['title'],loading:false})
        }).catch(error=>{
            this.setState({title:"Research Projects [404]"})
        })

        restClient.GetRequest(appURL.research).then(result=>{
            this.setState({ourResearch: result,loading:false})
        })

    }

    render() {

        if(this.state.loading == true){
            return <Loader/>
        }else {
            const researchList = this.state.ourResearch;
            const researchView = researchList.map(researchList=>{
                return  <Col lg={6} md={6} sm={12}>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <img height="100rem" src={researchList.title_img} />
                        </Col>
                        <Col lg={8} md={6} sm={12}>
                            <h3>{researchList.title}</h3>
                            <p className="" >
                                {researchList.summary}
                            </p>
                            <Button className="m-3" variant="info">View Details</Button>
                        </Col>
                    </Row>
                </Col>

            })

            return (
                <Fragment>
                    <Container>
                        <h2 className="serviceTitle text-center text-dark" >{this.state.title}</h2>
                        <Row className="research_info">

                            {researchView}

                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default ResearchProject;